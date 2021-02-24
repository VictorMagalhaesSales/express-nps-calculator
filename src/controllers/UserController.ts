import { getRepository } from "typeorm";
import { User } from "../models/User";
import { Request, Response } from 'express';

class UserController {    

    async create(request: Request, response: Response) {
        const { name, email } = request.body;
        const userRepository = getRepository(User);

        const userAlreadyExists = await userRepository.findOne({email});
        if(userAlreadyExists)
            return response.status(400).json({error: "User already exists!"});
        
        const user = userRepository.create({name, email});
        await userRepository.save(user);
        
        return response.json(user);
    }

    async listAll(request: Request, response: Response) {
        const userRepository = getRepository(User);
        let usuarios: User[];

        await userRepository.find().then(res => {
            usuarios = res;
        });
        return response.json(usuarios);
    }
}

export { UserController };