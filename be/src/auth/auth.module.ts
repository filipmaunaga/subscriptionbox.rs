import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './utils/jwt.strategy';
import { LocalStrategy } from './utils/local.strategy';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './utils/google.strategy';
import { SessionSerializer } from './utils/passport.serializer';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ session: true }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    GoogleStrategy,
    SessionSerializer,
  ],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
