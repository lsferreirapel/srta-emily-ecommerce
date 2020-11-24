import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';
import { IsNotEmpty, MaxLength } from 'class-validator';

import Product from './Product';

@Entity('categories')
@Unique(['name'])
export default class Category {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  @MaxLength(40)
  name: string;

  @ManyToMany(type => Product, categories => Category, {
    cascade: ['insert', 'update']
  })
  products: Product[];

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
