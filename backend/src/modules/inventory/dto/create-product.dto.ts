import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  clinicId!: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsNotEmpty()
  unit!: string;

  @IsString()
  @IsOptional()
  utsCode?: string;

  @IsBoolean()
  isConsumable!: boolean;

  @IsBoolean()
  trackBySerial!: boolean;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  defaultReorderLevel?: number;
}

