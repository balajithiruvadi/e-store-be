import { Body, Controller, Get, Post, Req, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiExcludeEndpoint } from '@nestjs/swagger';
import { LaptopsService } from './laptops.service';
import { Laptop } from './Laptops.schema';
import { CreateLaptopDto } from './dto/laptops.dto';

@Controller('laptops')
export class LaptopsController {
    constructor(private readonly laptopService: LaptopsService) {}

    @Get()
    @ApiBearerAuth()
    findAll(@Req() req: Request): Promise<Laptop[]> {
        return this.laptopService.findAll(req);
    };

    @Post()
    @ApiBearerAuth()
    create(@Body() laptop: CreateLaptopDto): Promise<Laptop> {
        return this.laptopService.create(laptop);
    };

    @Delete()
    @ApiBearerAuth()
    delete() {
        return this.laptopService.delete();
    }
};
