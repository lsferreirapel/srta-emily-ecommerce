import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsRgbColor, MaxLength } from 'class-validator';

import Picture from './Picture';

@Entity('colors')
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

  @ManyToOne(type => Picture, color => Color)
  pictures: Picture[];
}
