import { Router } from 'express';
import * as controller from './controller';

const router = Router();

router.get('/', controller.getIndex);

export default router;
