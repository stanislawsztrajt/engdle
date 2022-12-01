import { User } from '../../users/entities/user.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Entity,
  CreateDateColumn,
} from 'typeorm';
import {
  maxLengthContext,
  maxLengthText,
  maxLengthTranslatedText,
} from '../../../utils/constants';

export class Language {
  public from: string;
  public to: string;
}

@Entity()
export class Text {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: maxLengthText })
  public text: string;

  @Column({ type: 'varchar', length: maxLengthTranslatedText })
  public translatedText: string;

  @Column({ type: 'varchar', length: maxLengthContext, nullable: true })
  public context: string;

  @Column({ type: 'json' })
  public language: Language;

  @Column({ type: 'boolean', default: false })
  public isClosed: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @ManyToOne(() => User, (user) => user.texts)
  public user: User;
}
