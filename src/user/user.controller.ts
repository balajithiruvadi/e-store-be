import { Body, Controller, Post, Get, Req, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiExcludeEndpoint } from '@nestjs/swagger';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';
import { User } from './user.schema';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @ApiBearerAuth()
    @ApiExcludeEndpoint()
    findAll(@Req() req: Request): Promise<User[]>{
        return this.userService.findAll(req);
    };

    @Post()
    @ApiBearerAuth()
    create(@Body() user: CreateUserDto, @Res() res: Response): Promise<User>{
        return this.userService.create(user, res);
        
    };

    @Post('/login')
    @ApiBearerAuth()
    async login(@Body() creds: LoginUserDto, @Res() res: Response): Promise<Boolean> {
        return this.userService.login(creds, res);
    }
}
