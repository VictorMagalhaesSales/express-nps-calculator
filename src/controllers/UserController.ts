import { Request, Response } from 'express';
import { getCustomRepository } from "typeorm";
import { UserRepository } from '../repositories/UserRepository';

class UserController {    

    async create(request: Request, response: Response) {
        const { name, email } = request.body;
        return getCustomRepository(UserRepository).saveUser(name, email, response);
    }

    async listAll(request: Request, response: Response) {
        return getCustomRepository(UserRepository).listAll(response);
    }
}

export { UserController };
