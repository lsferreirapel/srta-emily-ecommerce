import { validate } from 'class-validator';
import { Response, Request } from 'express';
import { getRepository } from 'typeorm';

import Product from '../models/Product';
import Category from '../models/Category';
import Size from '../models/Size';
import Picture from '../models/Picture';

export default {
  async index(request: Request, response: Response): Promise<Response> {
    // Get product repository
    const productsRepository = getRepository(Product);

    // Search all products on DB
    const products = await productsRepository.find({
      relations: ['categories', 'sizes', 'pictures'],
    });

    // Send 200 response and all products
    return response.status(200).json(products);
  },

  // async show(request: Request, response: Response) {},
  async create(request: Request, response: Response): Promise<Response> {
    try {
      // Get repositories
      const productsRepository = getRepository(Product);
      const categoriesRepository = getRepository(Category);
      const sizesRepository = getRepository(Size);

      // Get all params from body
      const {
        name,
        description,
        brand,
        price,
        interest,
        categoriesID,
        sizesID,
        discount,
        freeShipping,
        isNew,
        rating,
        numberOfReviews,
        countInStock,
      } = request.body;

      // Get pictures from request files
      const requestImages = request.files as Express.Multer.File[];

      // Create a array of Image
      const pictures: Picture[] = requestImages.map(pic => {
        const picture = new Picture();
        picture.path = pic.filename;

        return picture;
      });

      // Create a new instance of Product
      const product = productsRepository.create({
        name,
        description,
        brand,
        price: parseFloat(price),
        interest: parseInt(interest, 10),
        categories: [],
        sizes: [],
        pictures,
        discount: parseInt(discount, 10),
        freeShipping: freeShipping === 'true',
        isNew: isNew === 'true',
        rating: parseInt(rating, 10),
        numberOfReviews: parseInt(numberOfReviews, 10),
        countInStock: parseInt(countInStock, 10),
      });

      // Validate if the paramters are valid
      const validateErrors = await validate(product);

      // If there isn't an error
      if (validateErrors.length === 0) {
        // Save product on data base
        const createdProduct = await productsRepository.save(product);

        // Search categories on DB
        const categories = await categoriesRepository.find({
          relations: ['products'],
          where: categoriesID.map((id: string) => {
            return {
              id: parseInt(id, 10),
            };
          }),
        });

        // Save categories on product
        createdProduct.categories.push(...(await categories));

        // Search sizes on DB
        const sizes = await sizesRepository.find({
          relations: ['products'],
          where: sizesID.map((id: string) => {
            return {
              id: parseInt(id, 10),
            };
          }),
        });
        // Save sizes on product
        createdProduct.sizes.push(...sizes);

        // Save product on data base with categories and sizes
        const res = await productsRepository.save(createdProduct);

        // Send 201 response
        return response.status(201).json(res);
      }

      // If there is an error return a 400 status and error(s)
      return response.status(400).json(validateErrors);
    } catch (error) {
      console.log('error.message =>>', error.message);
      return response.status(400).json({ error: error.message });
    }
  },
};
