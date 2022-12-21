import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500, })
  status: string;

  @Column({ default: 0 })
  gpa: number;

  @Column({ length: 500, })
  major: string;
}
