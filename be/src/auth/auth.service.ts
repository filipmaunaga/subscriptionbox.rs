import { Injectable } from '@nestjs/common';
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
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
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
  async register(user: any) {
    user.password = await bcrypt.hash(user.password, 10);
    const newUser = await this.usersService.create(user);
    return newUser;
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
