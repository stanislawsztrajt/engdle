import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Text } from 'modules/texts/entities/text.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 30, unique: true })
  public username: string
  
  @Column({ type: 'varchar', length: 30, unique: true })
  public email: string

  @Column({ type: 'varchar', length: 1000 })
  public password?: string

  @OneToMany(() => Text, (auction) => auction.user)
  public texts: Text[];
}