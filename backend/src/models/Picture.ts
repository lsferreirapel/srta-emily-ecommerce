import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

// Validators
import { IsNotEmpty } from 'class-validator';

// Models
import Product from './Product';
import Color from './Color';

@Entity('pictures')
@Unique(['path'])
export default class Picture {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  path: string;

  @ManyToOne(() => Color, color => color.pictures)
  color: Color;

  @ManyToOne(() => Product, product => product.pictures)
  product: Product;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
