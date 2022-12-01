import { Request } from 'express';

export interface Irequest<T> extends Request {
  body: T;
}

export interface Iresponse<T> extends Response {
  data: T;
}
