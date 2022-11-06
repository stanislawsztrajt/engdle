export interface Iresponse<T> {
  data: T;
}

export interface IresponseQuery<T> {
  data: Iresponse<T>;
}

export interface Ierror {
  response: {
    data: {
      message: string;
    };
  };
}
