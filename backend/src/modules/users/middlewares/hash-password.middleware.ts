import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { Irequest } from '../../../utils/types';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { bcryptRounds } from '../../../utils/constants/bcrypt';

@Injectable()
export class HashPasswordMiddleware implements NestMiddleware {
  async use(req: Irequest<User>, res: Response, next: NextFunction) {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, bcryptRounds);
    }
    next();
  }
}
