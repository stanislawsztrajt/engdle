import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    controller = new UsersController(UsersService as any);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // it('should return a lot of users', () => {
  //   expect()
  // })
});
