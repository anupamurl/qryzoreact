import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class RedirectAuthController {
  constructor(private authService: AuthService) {}

  @Get('redirectauth')
  @UseGuards(AuthGuard('google'))
  async redirectAuth(@Req() req, @Res() res) {
    const result = await this.authService.googleLogin(req);
    res.redirect(`http://localhost:4200/login/callback?token=${result.access_token}&user=${encodeURIComponent(JSON.stringify(result.user))}`);
  }
}