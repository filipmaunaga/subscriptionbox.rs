import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import * as dotenv from 'dotenv';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(
    session({
      secret: process.env.SESSION_SECRET, // Replace with your secret
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 }, // Optional: set cookie expiry (1 hour in this case)
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.enableCors(); // Enables CORS for all origins
  await app.listen(3001);
}
bootstrap();
