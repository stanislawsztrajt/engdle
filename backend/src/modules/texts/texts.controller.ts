import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TextsService } from './texts.service';
import { CreateTextDto } from './dto/create-text.dto';
import { UpdateTextDto } from './dto/update-text.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { IsTextOwnerGuard } from './guards/is-text-owner.guard';

@Controller('texts')
export class TextsController {
  constructor(private readonly textsService: TextsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTextDto: CreateTextDto) {
    return this.textsService.create(createTextDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.textsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.textsService.findOne(+id);
  }

  @UseGuards(IsTextOwnerGuard)
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTextDto: UpdateTextDto) {
    return this.textsService.update(+id, updateTextDto);
  }

  @UseGuards(IsTextOwnerGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.textsService.remove(+id);
  }
}
