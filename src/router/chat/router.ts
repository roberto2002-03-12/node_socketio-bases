import { Router } from 'express';

import {
  createMessageController, listMessagesController
} from '../../controller/chat/controller';

export const router: Router = Router();

router.post('/', createMessageController);
router.get('/', listMessagesController);