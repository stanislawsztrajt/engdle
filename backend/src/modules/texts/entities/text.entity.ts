import { User } from 'modules/users/entities/user.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Entity,
} from 'typeorm';

export class Language {
  public from: string;
  public to: string;
}

@Entity()
export class Text {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 80 })
  public text: string;

  @Column({ type: 'varchar', length: 80 })
  public translatedText: string;

  @Column({ type: 'json' })
  public language: Language;

  @Column({ type: 'boolean' })
  public isClosed: boolean;

  @ManyToOne(() => User, (user) => user.texts)
  public user: User;
}
