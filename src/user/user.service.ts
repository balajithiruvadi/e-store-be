import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Response } from 'express';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
    ) {}

    async findAll(req): Promise<User[]> {
        return await this.userModel.find(req.query);        
    };

    async create(user: CreateUserDto, res: Response) {
        const checkExistQuery = {
            query: {
                name: user.name,
                password: user.password
            }
        };
        const checkExist = await this.findAll(checkExistQuery);
        console.log(checkExist.length);
        
        if(checkExist.length > 0) {
            res.status(400).json({ status: 400, message: "User already exists" });
            return user;
        } else {
            console.log('inside else');
            await this.userModel.create(user);
            res.status(200).json({ status: 400, message: user });
            return user;
        }        
    }

    async login(creds: LoginUserDto, res: Response) {
        const req = {
            query : {
                name: creds.name,
                password: creds.password
            }
        };
        const recs = await this.findAll(req);
        if(recs.length>0) {
            res.status(200).json({ status: 200, message: "Logged in Successfully" });
            return true;
        } 
        res.status(403).json({ status: 403, message: "Bad Credentials" });
        return false;
    }
}
