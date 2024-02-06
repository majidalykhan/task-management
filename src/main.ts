import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('task-management-server');

  const app = await NestFactory.create(AppModule);

  const port = 3000;
  await app.listen(3000);
  logger.log(`Application is listening on port: ${port}`);
}
bootstrap();
