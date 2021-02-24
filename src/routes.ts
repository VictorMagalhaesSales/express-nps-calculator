import { UserController } from "./controllers/UserController";
import { Router } from 'express';

const userController = new UserController();
const router = Router();

router.post('/user', userController.create);
router.get('/user', userController.listAll);

export {router};