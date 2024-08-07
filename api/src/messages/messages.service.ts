import { Injectable } from '@nestjs/common';
import { Message } from './message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SendGridClient } from './sendgrid-client';


@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(Message)
        private messagesRepository: Repository<Message>,
        private readonly sendGridClient: SendGridClient
    ) {}

    public async getAllMessages() {
        return this.messagesRepository.find();
    }

    // async sendEmailWithTemplate(message: Message): Promise<void> {
    //     const mail: MailDataRequired = {
    //         to: message.recipient,
    //         from: process.env.FROM_EMAIL,
    //         subject: message.subject,
    //         content: [{type: 'text/plain', value: 'default text'}],
    //     };
    //     await this.sendGridClient.send(mail);
    // }

};
