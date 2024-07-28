import { Controller, Get, Post, Res, Param } from '@nestjs/common';
import { Response } from 'express';


@Controller('image')
export class AppController {
    // constructor(private readonly appService: AppService) {}
    @Get('/:filename')
    async getMyPhoto(@Param('filename') __filename, @Res() res: Response): Promise<any> {
        res.sendFile(__filename, {root: './images/photos'})
    }
}