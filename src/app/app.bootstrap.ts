import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

/**
 * Инициирует сервис
 */
export async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  await app.startAllMicroservices();
  await app.init();
}
