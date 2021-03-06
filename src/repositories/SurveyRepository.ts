import { EntityRepository, Repository } from "typeorm";
import { Response } from 'express';
import { Survey } from "../models/Survey";
import { AppError } from "../errors/AppError";

@EntityRepository(Survey)
export class SurveyRepository extends Repository<Survey> {

    async saveSurvey(title: string, description: string, response: Response) {
        const surveyAlreadyExists = await this.findOne({title});
        if(surveyAlreadyExists)
            throw new AppError("Survey already exists!");
        
        const survey = this.create({title, description});
        await this.save(survey);
        return response.status(201).json(survey);
    }

    async listAll(response: Response) {
        let usuarios = await this.find();
        return response.status(200).json(usuarios);
    }

}