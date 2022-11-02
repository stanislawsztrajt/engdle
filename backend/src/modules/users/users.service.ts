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

  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto)
    const { password, ...user } = await this.userRepository.save(newUser);
    return user
  }

  findAll() {
    return this.userRepository.find();
  }

  findOneByEmail (email: string) {
    return this.userRepository.findOneBy({ email })
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: { id },
      relations: { texts: true },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
