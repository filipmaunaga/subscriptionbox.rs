import { Controller, Request, Get, Post, UseGuards, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './utils/local-auth.guard';
import { JwtAuthGuard } from './utils/jwt-auth.guard';
import { GoogleAuthGuard } from './utils/google-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Request() req) {
    return this.authService.register(req.body);
  }

  @UseGuards(JwtAuthGuard)
  @Post('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Request() req) {}

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Request() req, @Res() res) {
    const { user } = req;
    const tokens = await this.authService.login(user);
    res.redirect(
      `http://localhost:3001?access_token=${tokens.access_token}&refresh_token=${tokens.refresh_token}`,
    );
  }
}
