import {
  Controller,
  Request,
  Get,
  Post,
  UseGuards,
  Req,
  Res,
} from '@nestjs/common';
import { Request as RequestExpress, Response } from 'express';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './utils/local-auth.guard';
import { JwtAuthGuard } from './utils/jwt-auth.guard';
import { GoogleAuthGuard } from './utils/google-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: RequestExpress, @Res() res: Response) {
    const tokens = await this.authService.login(req.user);

    res.cookie('accessToken', tokens.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Ensure cookies are secure in production
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    res.cookie('refreshToken', tokens.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Ensure cookies are secure in production
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Send the response
    res.status(200).send({ message: 'Login successful' });
    // Do not return anything after directly manipulating the response!
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
