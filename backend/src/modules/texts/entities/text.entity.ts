import { User } from '../../users/entities/user.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Entity,
  CreateDateColumn,
} from 'typeorm';

export class Language {
  public from: string;
  public to: string;
}

@Entity()
export class Text {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 150 })
  public text: string;

  @Column({ type: 'varchar', length: 150 })
  public translatedText: string;

  @Column({ type: 'json' })
  public language: Language;

  @Column({ type: 'boolean', default: false })
  public isClosed: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @ManyToOne(() => User, (user) => user.texts)
  public user: User;
}
