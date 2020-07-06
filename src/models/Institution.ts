import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export default class Institution {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updateAt: Date;
}
