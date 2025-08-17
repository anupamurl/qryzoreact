import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async googleLogin(req: any) {
    if (!req.user) {
      throw new Error('No user data from Google');
    }
    
    const user = await this.usersService.findOrCreate(req.user);
    const payload = { email: user.email, sub: user._id };
    
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        picture: user.picture,
        profileCompleted: user.profileCompleted,
      },
    };
  }


}