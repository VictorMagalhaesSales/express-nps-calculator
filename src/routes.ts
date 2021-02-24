import { UserController } from "./controllers/UserController";
import { Router } from 'express';
import { SurveyController } from "./controllers/SurveyController";

const userController = new UserController();
const surveyController = new SurveyController();
const router = Router();

router.post('/user', userController.create);
router.get('/user', userController.listAll);

router.post('/survey', surveyController.create);
router.get('/survey', surveyController.listAll);

export {router};