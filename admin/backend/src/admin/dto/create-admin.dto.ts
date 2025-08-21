import { IsEmail, IsNotEmpty, IsEnum, MinLength } from 'class-validator';

export class CreateAdminDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsEnum(['superadmin', 'admin'])
  role: string;
}