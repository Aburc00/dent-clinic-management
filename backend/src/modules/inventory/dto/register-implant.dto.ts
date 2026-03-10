import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RegisterImplantDto {
  @IsString()
  @IsNotEmpty()
  utsBarcode!: string;

  @IsString()
  @IsNotEmpty()
  patientId!: string;

  @IsString()
  @IsOptional()
  appointmentId?: string;

  @IsString()
  @IsOptional()
  productId?: string;

  @IsString()
  @IsOptional()
  toothNumber?: string;

  @IsString()
  @IsOptional()
  lotNumber?: string;

  @IsString()
  @IsOptional()
  serialNumber?: string;
}

