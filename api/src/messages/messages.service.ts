import { BadRequestException, Injectable } from '@nestjs/common';
import { Message } from './message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';



@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(Message)
        private messagesRepository: Repository<Message>,
        private readonly mailerService: MailerService
    ) {}

    public async getAllMessages() {
        return this.messagesRepository.find();
    }

    public async sendMessage(message: Message) {
        try {
            const newMessage = this.messagesRepository.create(
                {email: message.email, title: message.title, content: message.content}
            );
            await this.messagesRepository.save(newMessage);
            this.mailerService.sendMail({
                from: message.email,
                to: 'ruben1987sahakyan@gmail.com',
                subject: message.title,
                html: `<br>Mail: ${message.email}</br><h2>TEXT: ${message.content}</h2>`
            });
            return {statusCode: 201, message: "Message has ben send"}

        } catch (error) {
            throw new BadRequestException({message: "Your message is not send"})
        }
    }
}