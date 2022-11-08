import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv'

dotenv.config()
describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    service = new AuthService(AuthService as any, JwtService as any)
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
