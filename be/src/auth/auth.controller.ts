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

  @UseGuards(JwtAuthGuard)
  @Get('test')
  getProtectedResource() {
    return { message: 'This is a protected resource' };
  }

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Request() req) {}

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Request() req, @Res() res) {
    const { user } = req;
    const tokens = await this.authService.login(user);
    // Consider using secure cookies or local storage via a frontend route to handle tokens
    // Here's an example using cookies:
    res.cookie('accessToken', tokens.access_token, {
      httpOnly: true,
      secure: true,
    });
    res.cookie('refreshToken', tokens.refresh_token, {
      httpOnly: true,
      secure: true,
    });
    res.redirect('http://localhost:3000'); // Redirect to the frontend
  }

  @UseGuards(JwtAuthGuard)
  @Post('refresh-token')
  async refreshToken(@Request() req) {
    return this.authService.refreshToken(req.user);
  }
}
