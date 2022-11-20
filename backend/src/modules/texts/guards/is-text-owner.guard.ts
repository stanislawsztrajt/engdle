import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { parseJwt } from '../../../utils/helpers/jwt'
import { Irequest } from '../../../utils/types';
import { User } from '../../users/entities/user.entity';
import { Text } from '../entities/text.entity';
import { TextsService } from '../texts.service';

@Injectable()
export class IsTextOwnerGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly textService : TextsService
  ) { }
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request: Irequest<Text> = context.switchToHttp().getRequest();

    const jwt = parseJwt(request.headers.authorization)
    const user = this.jwtService.decode(jwt) as User

    const text = await this.textService.findOne(+request.params.id)
    if (user.id !== text.user.id) {
      throw new UnauthorizedException()
    }

    return true;
  }
}