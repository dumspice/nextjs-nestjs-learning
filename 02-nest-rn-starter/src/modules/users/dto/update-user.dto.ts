import { IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsMongoId({ message: 'Id không hợp lệ' }) //kiểm tra định dạng id có đúng là mongoId hay không
  @IsNotEmpty({ message: 'Id không được để trống' })
  _id: string;

  @IsOptional()
  name: string;

  @IsOptional()
  email: string;

  @IsOptional()
  phone: string;

  @IsOptional()
  address: string;

  @IsOptional()
  image: string;

  @IsOptional()
  isActive: boolean;
}
