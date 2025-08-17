import { Controller, Get, Post, Put, UseGuards, Req, Res, Body, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { UploadService } from '../upload/upload.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private uploadService: UploadService
  ) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    const result = await this.authService.googleLogin(req);
    res.redirect(`http://localhost:4200/login/callback?token=${result.access_token}&user=${encodeURIComponent(JSON.stringify(result.user))}`);
  }

  @Get('test')
  async test() {
    return { message: 'Auth controller working' };
  }

  @Put('profile')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('shopLogo'))
  async updateProfile(
    @Req() req,
    @Body() body: any,
    @UploadedFile() file: Express.Multer.File
  ) {
    const userId = req.user.userId;
  let shopLogoId: string | undefined = undefined;
    if (file) {
      shopLogoId = await this.uploadService.uploadFile(file.buffer, file.originalname, file.mimetype);
    }
    const profileData: any = {
      shopName: body.shopName,
      address: body.address,
      phone: body.phone,
      city: body.city,
      state: body.state,
      zipCode: body.zipCode,
    };
    if (shopLogoId) {
      profileData.shopLogo = shopLogoId;
    }
    const updatedUser = await this.usersService.updateProfile(userId, profileData);
    return { user: updatedUser };
  }

  @Get('file/:id')
  async getFile(@Param('id') id: string, @Res() res) {
    try {
      const { stream, metadata } = await this.uploadService.getFile(id);
      res.set({
        'Content-Type': metadata.metadata.mimetype,
        'Content-Disposition': `inline; filename="${metadata.filename}"`,
      });
      stream.pipe(res);
    } catch (error) {
      res.status(404).send('File not found');
    }
  }
}