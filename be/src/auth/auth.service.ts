import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User, UserDocument } from '../users/schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}
  async validateUser(email: string, password: string): Promise<UserDocument> {
    const user = await this.usersService.findOneByEmail(email);

    // First, check if the user exists
    if (!user) {
      throw new UnauthorizedException(
        'Invalid credentials or account does not exist.',
      );
    }

    // Check if the account is registered via Google and doesn't have a password set
    if (user.googleId && !user.password) {
      throw new UnauthorizedException(
        'This account does not have a password set. Please log in using aaaaaaaa Google.',
      );
    }

    // Check if the provided password is correct
    if (!user.password || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    return user;
  }
  async validateUserById(userId: string): Promise<any> {
    return this.usersService.findOneById(userId);
  }
  async login(user: any) {
    const payload = { username: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }

  async register(userDto: any) {
    // Check if email already exists
    const existingUser = await this.usersService.findOneByEmail(userDto.email);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    // Hash the password
    if (userDto.password) {
      userDto.password = await bcrypt.hash(userDto.password, 10);
    } else {
      throw new BadRequestException('Password is required');
    }

    // Create new user
    const newUser = await this.usersService.create(userDto);
    return newUser;
  }

  // Add this method to AuthService
  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken);
      const user = await this.usersService.findOneById(payload.sub);

      if (!user) {
        throw new Error('User not found');
      }

      const newPayload = { username: user.email, sub: user._id };
      return {
        access_token: this.jwtService.sign(newPayload),
        refresh_token: this.jwtService.sign(newPayload, { expiresIn: '7d' }),
      };
    } catch (e) {
      throw new Error('Invalid refresh token');
    }
  }

  async validateOAuthLogin(profile: any, provider: string): Promise<any> {
    const { email, name, sub: id } = profile._json;

    // Find user by email
    let user = await this.usersService.findOneByEmail(email);
    // If user doesn't exist, create a new user
    if (!user) {
      user = await this.usersService.create({
        email,
        name: name || '',
        [`${provider}Id`]: id,
      });
    } else {
      // If user exists, link the social login to the existing user
      if (!user[`${provider}Id`]) {
        user[`${provider}Id`] = id;
        await (user as UserDocument).save();
      }
    }
    return user as UserDocument;
  }
}
