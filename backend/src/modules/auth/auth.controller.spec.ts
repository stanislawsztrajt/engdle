import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    controller = new AuthController(AuthService as any);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
