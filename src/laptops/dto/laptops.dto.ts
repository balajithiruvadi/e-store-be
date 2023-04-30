import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateLaptopDto {
    @IsNumber()
    public id: number;

    @IsString()
    public title: string;

    @IsString()
    public description:string;

    @IsNumber()
    public price: number;

    @IsNumber()
    public rating: number;

    @IsNumber()
    public stock: number;

    @IsString()
    public brand: string;

};

