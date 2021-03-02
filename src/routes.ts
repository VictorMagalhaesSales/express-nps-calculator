import { UserController } from "./controllers/UserController";
import { Router } from 'express';
import { SurveyController } from "./controllers/SurveyController";
import { SendMailController } from "./controllers/SendMailController";
import { AnswerController } from "./controllers/AnswerController";
import { NpsController } from "./controllers/Npscontroller";

const userController = new UserController();
const surveyController = new SurveyController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();
const router = Router();

router.post('/user', userController.create);
router.get('/user', userController.listAll);

router.post('/survey', surveyController.create);
router.get('/survey', surveyController.listAll);

router.post('/sendMail', sendMailController.execute);

router.get('/answers/:value', answerController.execute);

router.get('/nps', npsController.execute)

export {router};