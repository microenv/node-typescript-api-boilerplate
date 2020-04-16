import { Router } from 'express';
import ensureParams from 'httpServer/middleware/ensureParams.middleware';
import * as controller from './controller';
import SearchByIdDto from 'dto/SearchById.dto';
import GymMiddleware from 'httpServer/middleware/gym.middleware';

const router = Router();

router.get('/:pid/users', GymMiddleware(), controller.getUsers);
router.get('/:pid/users/:id', GymMiddleware(), ensureParams(SearchByIdDto), controller.getUser);

export default router;
