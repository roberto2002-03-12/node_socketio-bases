import { Request, Response, NextFunction } from 'express';
import createHttpError from 'http-errors'

import { createMessage, listMessages } from '../../services/chat';
import { IChat } from '../../models';

export const createMessageController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data: IChat = req.body as IChat;
    const result = await createMessage(data);
    return res.status(201).json(result);
  } catch (error: any) {
    next(createHttpError(500, error));
  }
}

export const listMessagesController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await listMessages();
    return res.status(200).json(result);
  } catch (error: any) {
    next(createHttpError(500, error));
  }
}