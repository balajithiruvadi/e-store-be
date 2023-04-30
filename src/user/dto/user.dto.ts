import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    public name: string;

    @IsString()
    public password:string;

    @IsDate()
    public dob: Date;
};

export class LoginUserDto {
    @IsString()
    public name: string;

    @IsString()
    public password: string;
};