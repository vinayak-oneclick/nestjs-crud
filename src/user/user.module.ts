import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPostEntity } from './models/post.entity'
import { UserService } from './services/user.service';
import { UserController } from './controller/user.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserPostEntity])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
