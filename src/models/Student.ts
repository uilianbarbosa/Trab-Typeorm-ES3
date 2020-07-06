import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { IsEmail, Max, Min, MaxLength, MinLength } from 'class-validator';
import Class from './Class';

@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MaxLength(5)
  @MinLength(2)
  name: string;

  @Column()
  @Max(88888)
  @Min(10000)
  key: number;

  @Column()
  @IsEmail()
  email: string;

  @ManyToMany(type => Class)
  @JoinTable()
  klasses: Class;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updateAt: Date;
}
