import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_post')
export class UserPostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  branch: string;

  @Column({ default: '' })
  age: string;

  @Column({ default: '' })
  gender: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date;
}