import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  // app.enableCors({
  //   origin: ['http://localhost:3000', 'https://engdle.vercel.app', 'http://engdle.vercel.app'],
  //   methods: ['POST', 'GET', 'PATCH', 'DELETE'],
  //   credentials: true,
  // });

  await app.listen(1337);
}
bootstrap();
