import { IsEmail, IsNumber, IsString } from 'class-validator';

export class PostRouteDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  branch: string;

  @IsNumber()
  age: number;

  @IsString()
  gender: string;

}