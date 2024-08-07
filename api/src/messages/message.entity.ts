import { IsEmail, IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'email'})
    @IsNotEmpty()
    @IsEmail({}, {message: 'Incorrect email'})
    recipient: string

    @Column({name: 'title'})
    @IsNotEmpty()
    subject: string;


    @Column({name: 'content'})
    @IsNotEmpty()
    content: string
}