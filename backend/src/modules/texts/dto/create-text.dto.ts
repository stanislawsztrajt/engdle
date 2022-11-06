import { IsString, MaxLength } from "class-validator";

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
}