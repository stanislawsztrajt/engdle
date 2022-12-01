import { HttpException, HttpStatus } from '@nestjs/common';

export const parseJwt: (authorization: string) => string = (authorization) => {
  try {
    return authorization.split(' ')[1];
  } catch {
    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }
};
