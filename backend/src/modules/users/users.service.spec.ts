import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const usersMock = [
  {
    id: 1,
    username: 'testuser1',
    email: 'testuser1@gmail.com',
    password: 'testuser1',
  },
  {
    id: 2,
    username: 'testuser2',
    email: 'testuser2@gmail.com',
    password: 'testuser2',
  },
  {
    id: 3,
    username: 'testuser3',
    email: 'testuser3@gmail.com',
    password: 'testuser3',
  },
  {
    id: 4,
    username: 'testuser4',
    email: 'testuser4@gmail.com',
    password: 'testuser4',
  },
]

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    service = new UsersService(Repository<User> as any);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('GET find all /users, should return few users', async () => {
    jest.spyOn(service, 'findAll').mockImplementation(() => usersMock as unknown as Promise<User[]>)
    expect(await service.findAll()).toBe(usersMock)
  })

  it('GET find one /users/:id, should return user', async () => {
    jest.spyOn(service, 'findOne').mockImplementation(() => usersMock[0] as unknown as Promise<User>)
    expect(await service.findOne(1)).toBe(usersMock[0])
  })

  it('GET find one by email /users/email/:email, should return user', async () => {
    jest.spyOn(service, 'findOneByEmail').mockImplementation(() => usersMock[0] as unknown as Promise<User>)
    expect(await service.findOneByEmail('testuser1@gmai.com')).toBe(usersMock[0])
  })
});
