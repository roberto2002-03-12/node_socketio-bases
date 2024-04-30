import express, { Application } from "express";
import cors from 'cors';

export const middlewares = (app: Application) => {
  app.use(cors({ 
    credentials: true,
    origin: '*' 
  }));
  app.use(express.json({ limit: '300mb' }));
  app.use(
    express.urlencoded({
      limit: '300mb',
      extended: true,
      parameterLimit: 300000,
    })
  )
  console.log('deberia ejecutarme');
}