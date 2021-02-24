import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";
import { Response } from 'express';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async saveUser(name: string, email: string, response: Response) {
        const userAlreadyExists = await this.findOne({email});
        if(userAlreadyExists)
            return response.status(400).json({message: "User already exists!"});
        
        const user = this.create({name, email});
        await this.save(user);
        return response.json(user);
    }

    async listAll(response: Response) {
        let usuarios = await this.find();
        return response.json(usuarios);
    }

}