import { ValidationPipe } from '@nestjs/common';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from 'process';
import { ConfigService } from '@nestjs/config';
import * as config from 'config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: config.get('corsAuthorize'),
      credentials: true,
      allowedHeaders: ['Authorization', 'Content-Type'],
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.use(cookieParser());
  await app.listen(8700);
}
bootstrap();
