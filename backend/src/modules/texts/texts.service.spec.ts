import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { Text } from './entities/text.entity';
import { TextsController } from './texts.controller';
import { TextsService } from './texts.service';

describe('TextsService', () => {
  let service: TextsService;

  beforeEach(async () => {
    service = new TextsService(Repository<Text> as any);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
