import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Laptop } from './laptops.schema';
import { Model } from 'mongoose';
import { CreateLaptopDto } from './dto/laptops.dto';

@Injectable()
export class LaptopsService {
    constructor(
        @InjectModel(Laptop.name)
        private laptopModel: Model<Laptop>,
    ) {}
    async findAll(req): Promise<Laptop[]> {
        return await this.laptopModel.find(req.query);        
    };

    async create(laptop: CreateLaptopDto) {
        return await this.laptopModel.create(laptop);
    }

    async delete() {
        return await this.laptopModel.deleteOne({
            id: 3
        });
    }
}
