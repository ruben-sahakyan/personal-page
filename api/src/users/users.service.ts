import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { secretKey } from './jwtConstant';

@Injectable()
export class UsersService {

  private readonly saltOrRound = 7;

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService
  ) {}


  // PASSWORD HASH
  private async passwordHash(password: string) {
    return bcrypt.hash(password, this.saltOrRound)
  };

  // FIND USER
  private async findUser(email: string): Promise<User> {
    return this.usersRepository.findOne({where : { email }})
  };

  // all users (not production)
  async getAllUsers() {
    return this.usersRepository.find();
  }

  // USER AUTH
  async auth(request: any) {
    const token = request.cookies['token'];
    if(!token) {
      throw new UnauthorizedException();
    } 
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: secretKey,
      });
      const findUser = await this.findUser(payload.email);
      if(findUser) {
        return {message: 'authorized', email: findUser.email}
      } else {
        throw new UnauthorizedException();
      }
    } catch (error) {
      throw new UnauthorizedException();
    }
  };

  // SIGN UP (REGISTER USER)
  async create(user: User): Promise<any> {
    const userExist = await this.findUser(user.email);
    if(userExist) {
      throw new BadRequestException('This email is already exists')
    } else {
      const hashPassword = await this.passwordHash(user.password); 
      const newUser = this.usersRepository.create(
        {email: user.email, password: hashPassword}
      );
      await this.usersRepository.save(newUser);
      return {statusCode: 201, message: "User has ben created", email: newUser.email}
    }
  };

  // SIGN IN (LOGIN USER)
  async login(user: User, response: any): Promise<any> {
    const findUser = await this.findUser(user.email);
    if(findUser) {
      try {
        const checkPassword = await bcrypt.compare(user.password, findUser.password);
        console.log(findUser);
        if(checkPassword) {
          const payload = {sub: user.id, email: user.email};
          const token = await this.jwtService.signAsync(payload);
          response.cookie('token', token);
          console.log(token);
          return { status: 200, message: 'Login in success', email: user.email}
        } else {
          throw new BadRequestException({status: 400, message: 'Incorrect passwrod'})
        }
      } catch (error) {
        throw new BadRequestException({status: 400, message: 'Incorrect email or password'})
      }
    } else {
      throw new BadRequestException({status: 400, message: 'Cannot find user'})
    }
  }

  //  LOGOUT USER
  async logOut(response: any) {
    response.cookie('token', '');
    return {message: 'logout'}
  }
};