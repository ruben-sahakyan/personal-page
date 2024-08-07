import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { SendGridClient } from './sendgrid-client';

// @Module({
//   imports: [
//     ConfigModule.forRoot(),
//     TypeOrmModule.forFeature([Message]),
//     MailerModule.forRoot({
//       transport: {
//         service: process.env.SERVICE,
//         host: process.env.MAIL_HOST,
//         port: 465,
//         secure: true,
//         auth: {
//           user: process.env.MY_MAIL,
//           pass: process.env.MAIL_PASS,
//         }
//       }
//     })
// ],
//   controllers: [MessagesController],
//   providers: [MessagesService]
// })
// export class MessagesModule {}

@Module({
  providers: [MessagesService, SendGridClient],
  exports: [MessagesService]
})
export class MessagesModule {}
