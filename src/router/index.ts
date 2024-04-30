import { Router } from "express";
import { router as RouterChat } from './chat/router'
import { router as RouterUser } from './user/router'

const routerServer = (router: Router) => {
  router.use('/chat', RouterChat);
  router.use('/user', RouterUser);
}

export default routerServer;