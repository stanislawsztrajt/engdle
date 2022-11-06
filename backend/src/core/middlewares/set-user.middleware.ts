import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { Irequest } from 'utils/types';
import { Text } from 'modules/texts/entities/text.entity';
import { parseJwt } from 'utils/helpers/jwt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'modules/users/entities/user.entity';

@Injectable()
export class SetUserMiddleware implements NestMiddleware {
  constructor(
    private jwtService: JwtService
  ) {}
  async use(req: Irequest<Text>, res: Response, next: NextFunction) {
    const jwt: string = parseJwt(req.headers.authorization)
    req.body.user = this.jwtService.decode(jwt) as User
    next();
  }
}
