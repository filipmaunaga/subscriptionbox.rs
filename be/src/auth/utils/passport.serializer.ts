import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private authService: AuthService) {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  serializeUser(user: any, done: Function) {
    done(null, user._id);
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  async deserializeUser(userId: string, done: Function) {
    const user = await this.authService.validateUserById(userId);
    done(null, user);
  }
}
