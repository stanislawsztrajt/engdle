import { TextsController } from './texts.controller';
import { TextsService } from './texts.service';

describe('TextsController', () => {
  let controller: TextsController;

  beforeEach(async () => {
    controller = new TextsController(TextsService as any);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
