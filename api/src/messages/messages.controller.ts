import { Body, Controller, Get, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response, Request} from 'express';
import { MessagesService } from './messages.service';
import { Message } from './message.entity';



@Controller('contact-us')
export class MessagesController {
    constructor(private readonly messagesServie: MessagesService) {}

    @Get('/messages')
    async contactUs() {
        return this.messagesServie.getAllMessages();
    };

    @Post('/send-message')
    @UsePipes(new ValidationPipe())
    async sendMessage(@Body() message: Message): Promise<any> {
        return {message: 'success', statusCode: 201}
        // return this.messagesServie.sendEmailWithTemplate(message);
    };
}
