import { Body, Controller, Get, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Response, Request} from 'express';



@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}


    @Get('/chlp')
    async getChlp() {
        return 'Hello, chlp'
    }

    @Get('/all')
    async getAll() {
        return this.usersService.getAllUsers();
    }

    @Get('/auth')
    async userAuth(
        @Req() request: Request) {
        return await this.usersService.auth(request)
    };

    @Post('/create')
    @UsePipes(new ValidationPipe())
    async createUser(@Body() user: User): Promise<User> {
        return await this.usersService.create(user);
    };

    @Post('/signin')
    async signInUser(
        @Body() user: User,
        @Res({passthrough: true}) response: Response
    ): Promise<User> {
        return await this.usersService.login(user, response)
    };

    @Get('/logout')
    async userLogOut(
        @Res({passthrough: true}) response: Response
    ) {
        return await this.usersService.logOut(response)
    };
};
