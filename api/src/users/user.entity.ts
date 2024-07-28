import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { IsEmail, IsNotEmpty, Length } from "class-validator";

@Entity()
@Unique(['email'])
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'email'})
  @IsEmail({}, {message: 'Incorrect email'})
  @IsNotEmpty()
  email: string;

  @Column({name: 'password'})
  @IsNotEmpty()
  @Length(4, 20, {message: 'Password length Must be between 4 and 20 charcters'})
  password: string;
}