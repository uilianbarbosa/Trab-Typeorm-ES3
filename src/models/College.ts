import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ChildEntity,
} from 'typeorm';
import Institution from './Institution';

@ChildEntity()
export default class College extends Institution {
  @PrimaryGeneratedColumn('uuid')
  @Column()
  graduations: string;

  @Column()
  year: number;
}
