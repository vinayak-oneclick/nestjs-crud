import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserPost } from '../models/post.interface';
import { UserService } from '../services/user.service'; 
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() userPost: UserPost): Observable<UserPost>  {
    return this.userService.createUser(userPost)
  }

  @Get()
  findAll(): Observable<UserPost[]> {
    return this.userService.findAllUsers();
  };

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() userPost: UserPost
  ): Observable<UpdateResult> {
    return this.userService.updateUser(id, userPost)
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.userService.deleteUser(id)
  }
}
