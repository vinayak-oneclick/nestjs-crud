import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

import { UserPostEntity } from '../models/post.entity';
import { UserPost } from '../models/post.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserPostEntity)
    private readonly userPostRepository: Repository<UserPostEntity>
  ) {}

    createUser(userPost: UserPost): Observable<UserPost> {
      return from(this.userPostRepository.save(userPost));
    }

    findAllUsers(): Observable<UserPost[]> {
      return from(this.userPostRepository.find());
    }

    updateUser(id: number, userPost:UserPost): Observable<UpdateResult> {
      return from(this.userPostRepository.update(id, userPost));
    }

    deleteUser(id: number): Observable<DeleteResult> {
      return from(this.userPostRepository.delete(id));
    }
}
