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
export default class University extends Institution {
  @PrimaryGeneratedColumn('uuid')
  @Column()
  graduations: string;

  @Column()
  doctors: string;

  @Column()
  masters: string;
}
