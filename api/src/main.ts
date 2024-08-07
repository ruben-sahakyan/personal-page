import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParse from "cookie-parser";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParse());
  app.enableCors({
    origin: true,
    credentials: true,
  });
  await app.listen(5000);
}
bootstrap();
