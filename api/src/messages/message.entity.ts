import { IsEmail, IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'recipient'})
    @IsNotEmpty()
    @IsEmail({}, {message: 'Incorrect email'})
    recipient: string

    @Column({name: 'subject'})
    @IsNotEmpty()
    subject: string;


    @Column({name: 'content'})
    @IsNotEmpty()
    content: string
}