import { UserController } from "./controllers/UserController";
import { Router } from 'express';
import { SurveyController } from "./controllers/SurveyController";
import { SendMailController } from "./controllers/SendMailController";

const userController = new UserController();
const surveyController = new SurveyController();
const sendMailController = new SendMailController();
const router = Router();

router.post('/user', userController.create);
router.get('/user', userController.listAll);

router.post('/survey', surveyController.create);
router.get('/survey', surveyController.listAll);


router.post("/sendMail", sendMailController.execute);

export {router};