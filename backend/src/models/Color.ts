import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

// Validators
import { IsNotEmpty, IsRgbColor, MaxLength } from 'class-validator';

// Models
import Picture from './Picture';

@Entity('colors')
@Unique(['name', 'rgb'])
export default class Color {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  @MaxLength(30)
  name: string;

  @Column()
  @IsNotEmpty()
  @IsRgbColor()
  rgb: string;

  @OneToMany(() => Picture, picture => picture.color)
  pictures: Picture[];
}
