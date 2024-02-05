import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
//Checks for duplicate username
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
}
