import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto)
    const { password, ...user } = await this.userRepository.save(newUser);
    return user
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find({ select: { id: true, username: true, email: true }, relations: { texts: true } });
  }

  findOneByEmail (email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } })
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
      select: { id: true, username: true, email: true },
      relations: { texts: true },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
