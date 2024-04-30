import { createServer } from 'http'
import express from 'express'
import payload from 'payload'
import { startSocketIO } from './socketServer'

import { Request, Response, NextFunction } from 'express'

// middlewares
import { errorMiddlewareGeneral, errorMiddlewareRouteNotFound } from './middlewares/error.middlewares';
import { middlewares } from './middlewares/basic.middelwares';

// routes
import routes from './router';

require('dotenv').config()
const app = express()
const router = express.Router();

// Redirect root to Admin panel
app.get('/payload-ui', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  middlewares(app);

  // Add your own express routes here
  app.use('/api/v1', router);

  // routes
  routes(router);

  // error handler
  router.use(errorMiddlewareGeneral);
  router.use(errorMiddlewareRouteNotFound);
}

const httpServer = createServer(app);

// socket.io
const { io } = startSocketIO(httpServer);

export { io };

httpServer.listen(3000, () => {
  console.log('Server listening on port: ' + 3000);
});

start()
