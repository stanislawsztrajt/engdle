import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTextDto } from './dto/create-text.dto';
import { UpdateTextDto } from './dto/update-text.dto';
import { Text } from './entities/text.entity';

@Injectable()
export class TextsService {
  constructor(
    @InjectRepository(Text) private readonly userRepository: Repository<Text>,
  ) {}

  async create(createTextDto: CreateTextDto) {
    const texts = await this.userRepository.find({
      where: { user: { id: createTextDto.user.id } },
      select: { text: true },
    });
    try {
      if (
        texts.some(
          (text) =>
            text.text.toLocaleLowerCase() === createTextDto.text.toLocaleLowerCase() &&
            text.translatedText.toLocaleLowerCase() ===
              createTextDto.translatedText.toLocaleLowerCase(),
        )
      ) {
        throw new HttpException({ message: 'Text already exists' }, 400);
      }
    } catch {
      if (
        texts.some(
          (text) =>
            text.text === createTextDto.text &&
            text.translatedText ===
              createTextDto.translatedText,
        )
      ) {
        throw new HttpException({ message: 'Text already exists' }, 400);
      }
    }
    

    const newText = this.userRepository.create(createTextDto);
    return this.userRepository.save(newText);
  }

  findAll() {
    return this.userRepository.find({
      relations: { user: true },
      select: { user: { id: true, username: true, email: true } },
    });
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: { id },
      relations: { user: true },
      select: { user: { id: true, username: true, email: true } },
    });
  }

  update(id: number, updateTextDto: UpdateTextDto) {
    this.userRepository.update(id, updateTextDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
