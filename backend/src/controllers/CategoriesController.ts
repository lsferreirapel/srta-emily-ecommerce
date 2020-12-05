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

  async create(request: Request, response: Response): Promise<void> {
    // Get param from body
    const { name } = request.body;

    // Create a new instance of Product
    const category = new Category();
    category.name = name;

    // Validate if the paramters are valid
    const validateErrors = await validate(category, {
      validationError: { target: false },
    });
    if (validateErrors.length > 0) {
      response.status(400).send(validateErrors);
      return;
    }

    // Create and save new Category table on DB
    try {
      const categoryRepository = getRepository(Category);
      const createdCategory = categoryRepository.create(category);
      await categoryRepository.save(createdCategory);
    } catch (error) {
      response.status(400).json({ error });
      return;
    }

    // If all ok, send 201 response
    response.status(201).json(category);
  },
};
