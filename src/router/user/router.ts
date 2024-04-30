import { Router } from 'express';

import {
  createUserController
} from '../../controller/users/controller';

export const router: Router = Router();

router.post('/register', createUserController);