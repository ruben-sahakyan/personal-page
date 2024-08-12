import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { Message } from './message.entity';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Message]),
    MailerModule.forRoot({
      transport: {
        service: process.env.SERVICE,
        host: process.env.MAIL_HOST,
        port: 465,
        secure: true,
        auth: {
          user: process.env.MY_MAIL,
          pass: process.env.MAIL_PASS,
        }
      }
    })
],
  controllers: [MessagesController],
  providers: [MessagesService]
})
export class MessagesModule {}
