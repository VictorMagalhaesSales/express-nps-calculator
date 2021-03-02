import { Request, Response } from 'express';
import { getCustomRepository } from "typeorm";
import { UserRepository } from '../repositories/UserRepository';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';
class UserController {    

    async create(request: Request, response: Response) {
        const { name, email } = request.body;

        const schema = yup.object().shape({
            name: yup.string().required('Name is required'),
            email: yup.string().required('Email is required')
        });
        try {
            schema.validate(request.body, {abortEarly: false});
        } catch (err) {
            throw new AppError(err);
        }

        return getCustomRepository(UserRepository).saveUser(name, email, response);
    }

    async listAll(request: Request, response: Response) {
        return getCustomRepository(UserRepository).listAll(response);
    }
}

export { UserController };
