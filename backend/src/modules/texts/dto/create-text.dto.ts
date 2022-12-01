import { IsString, MaxLength, MinLength } from 'class-validator';
import {
  maxLengthText,
  maxLengthTranslatedText,
  minLengthText,
} from '../../../utils/constants';
import { User } from '../../users/entities/user.entity';

export class Language {
  @IsString()
  public from: string;

  @IsString()
  public to: string;
}

export class CreateTextDto {
  @IsString()
  @MinLength(minLengthText)
  @MaxLength(maxLengthText)
  public text: string;

  @IsString()
  @MinLength(minLengthText)
  @MaxLength(maxLengthTranslatedText)
  public translatedText: string;

  public language: Language;

  public user: User;
}
