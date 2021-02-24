import { Request, Response } from 'express';
import { getCustomRepository } from "typeorm";
import { SurveyRepository } from '../repositories/SurveyRepository';

class SurveyController {    

    async create(request: Request, response: Response) {
        const { title, description } = request.body;
        return getCustomRepository(SurveyRepository).saveSurvey(title, description, response);
    }

    async listAll(request: Request, response: Response) {
        return getCustomRepository(SurveyRepository).listAll(response);
    }
}

export { SurveyController };
