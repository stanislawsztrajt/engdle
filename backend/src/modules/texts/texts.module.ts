import { Module } from '@nestjs/common';
import { TextsService } from './texts.service';
import { TextsController } from './texts.controller';
import { User } from 'modules/users/entities/user.entity';
import { Text } from './entities/text.entity';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Text])],
  controllers: [TextsController],
  providers: [TextsService]
})
export class TextsModule {}
