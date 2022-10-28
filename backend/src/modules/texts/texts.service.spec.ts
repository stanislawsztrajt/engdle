import { Test, TestingModule } from '@nestjs/testing';
import { TextsService } from './texts.service';

describe('TextsService', () => {
  let service: TextsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextsService],
    }).compile();

    service = module.get<TextsService>(TextsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
