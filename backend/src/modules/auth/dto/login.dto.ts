import { IsEmail, IsNotEmpty, MaxLength, MinLength, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(30)
  @MinLength(4)
  public email: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  @MinLength(4)
  public password: string
}
