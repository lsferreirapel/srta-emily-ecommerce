import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Category from '../models/Category';

export default {
  async index(request: Request, response: Response): Promise<Response> {
    // Get categories from database
    let categories: Category[] = [];
    try {
      const categoriesRepository = getRepository(Category);
      categories = await categoriesRepository.find({
        relations: ['products'],
      });
    } catch (error) {
      response.status(404).json({ error });
    }

    return response.json(categories);
  },

  async create(request: Request, response: Response): Promise<Response> {
    try {
      // Get Repository
      const categoriesRepository = getRepository(Category);

      // Get param from body
      const { name } = request.body;

      // Create a new instance of Product
      const category = categoriesRepository.create({ name });

      // Validate if the paramters are valid
      const validateErrors = await validate(category);

      // If there isn't an error
      if (validateErrors.length === 0) {
        // Save category on data base
        const createdCategory = await categoriesRepository.save(category);

        // All ok, send 201 response
        return response.status(201).json(createdCategory);
      }

      // Else return a 400 status and error(s)
      return response.status(400).json(validateErrors);
    } catch (error) {
      console.log('error.message =>>', error.message);
      return response.status(400).json({ error: error.message });
    }
  },
};
