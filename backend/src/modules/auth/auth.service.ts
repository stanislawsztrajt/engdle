import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser({ email, password }: LoginDto): Promise<User> {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException()
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (user && isPasswordMatch) {
      const { password, ...result } = user;
      return result;
    }

    throw new UnauthorizedException()
  }

  async login(loginDto: LoginDto) {
    const payload = await this.validateUser(loginDto);

    return {
      jwt: this.jwtService.sign(payload),
      user: payload
    };
  }
}