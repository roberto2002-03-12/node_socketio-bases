import { Request, Response, NextFunction } from 'express'

export const errorMiddlewareRouteNotFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`The route: "${req.originalUrl}" isn't declared`)
  res.status(404).json({
    message: `The route: "${req.originalUrl}" isn't declared`,
    status: 404
  });
  next(error);
}

export const errorMiddlewareGeneral = (error: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error.stack);
  res.status(error.status || 500).json({
    status: error.status,
    message: error.message,
    stack: error.stack
  });
};