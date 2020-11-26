import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsNotEmpty, MaxLength } from 'class-validator';

import Product from './Product';

@Entity('sizes')
export default class Size {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  @MaxLength(3)
  name: string;

  @ManyToMany(type => Product, sizes => Size, {
    cascade: ['insert', 'update'],
  })
  products: Product[];

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
