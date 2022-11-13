import { IsString, MaxLength } from "class-validator";
import { User } from "../../users/entities/user.entity";

export class Language {
  @IsString()
  public from: string;
  
  @IsString()
  public to: string;
}

export class CreateTextDto {
  @IsString()
  @MaxLength(150)
  public text: string;

  @IsString()
  @MaxLength(150)
  public translatedText: string;

  public language: Language;

  public user: User;
}