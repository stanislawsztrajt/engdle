import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TextsService } from './texts.service';
import { TextsController } from './texts.controller';
import { Text } from './entities/text.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetUserMiddleware } from '../../core/middlewares/set-user.middleware';
import { JwtService } from '@nestjs/jwt';
import { SetTextContextMiddleware } from './middlewares/set-text-context.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Text])],
  controllers: [TextsController],
  providers: [TextsService, JwtService],
})
export class TextsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SetUserMiddleware, SetTextContextMiddleware)
      .forRoutes({ path: 'texts', method: RequestMethod.POST });
  }
}
