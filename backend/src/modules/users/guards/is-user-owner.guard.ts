import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { parseJwt } from '../../../utils/helpers/jwt'
import { User } from '../entities/user.entity';

@Injectable()
export class IsUserOwnerGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const jwt = parseJwt(request.headers.authorization)

    try {
      const user = this.jwtService.decode(jwt) as User

      if (+user.id !== +request.params.id) {
        throw new UnauthorizedException()
      }
    } catch {
      throw new UnauthorizedException()
    }

    return true;
  }
}