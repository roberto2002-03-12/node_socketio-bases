import { Request, Response, NextFunction } from 'express';
import createHttpError from 'http-errors'
import { createUser } from '../../services/users'
import { IUser } from '../../models';

export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data: IUser = req.body;
    const result = await createUser(data);
    return res.status(201).json(result);
  } catch (error) {
    next(createHttpError(500, error));
  }
}