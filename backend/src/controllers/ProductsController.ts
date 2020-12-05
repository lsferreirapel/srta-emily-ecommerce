import { validate } from 'class-validator';
import { Response, Request } from 'express';
import { getRepository } from 'typeorm';

import Product from '../models/Product';
import Category from '../models/Category';
import Size from '../models/Size';

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
        // pictures, need be implemented
        discount,
        freeShipping,
        isNew,
        rating,
        numberOfReviews,
        countInStock,
      } = request.body;

      // Create a new instance of Product
      const product = productsRepository.create({
        name,
        description,
        brand,
        price,
        interest,
        categories: [],
        sizes: [],
        pictures: [],
        discount,
        freeShipping,
        isNew,
        rating,
        numberOfReviews,
        countInStock,
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
          where: categoriesID.map((id: number) => {
            return {
              id,
            };
          }),
        });
        // Save categories on product
        createdProduct.categories.push(...categories);

        // Search sizes on DB
        const sizes = await sizesRepository.find({
          relations: ['products'],
          where: sizesID.map((id: number) => {
            return {
              id,
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
