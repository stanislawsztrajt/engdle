import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTextDto } from './dto/create-text.dto';
import { UpdateTextDto } from './dto/update-text.dto';
import { Text } from './entities/text.entity';

@Injectable()
export class TextsService {
  constructor(
    @InjectRepository(Text) private readonly userRepository: Repository<Text>
  ) {}

  create(createTextDto: CreateTextDto) {
    const newText = this.userRepository.create(createTextDto)
    return this.userRepository.save(newText);
  }

  findAll() {
    return this.userRepository.find({ relations: { user: true }, select: { user: { id: true, username: true, email: true } } });
  }

  findOne(id: number) {
    return this.userRepository.findOne(
      { where: { id }, 
      relations: { user: true }, 
      select: { user: { id: true, username: true, email: true } } });
  }

  update(id: number, updateTextDto: UpdateTextDto) {
    this.userRepository.update(id, updateTextDto);
    return this.findOne(id)
  }

  remove(id: number) {
    return this.userRepository.delete(id)
  }
}
