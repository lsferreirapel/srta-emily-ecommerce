import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

import Product from './Product';
import Color from './Color';

@Entity('pictures')
export default class Picture {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  path: string;

  @ManyToOne(type => Color, pictures => Picture, {
    eager: true,
    cascade: ['insert', 'update']
  })
  color: Color;

  @ManyToOne(type => Product, pictures => Picture, {
    cascade: ['insert', 'update']
  })
  product: Product;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
