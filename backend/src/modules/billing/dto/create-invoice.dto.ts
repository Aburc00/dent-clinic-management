import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { CurrencyCode } from '../domain/models';

class CreateInvoiceItemDto {
  @IsString()
  @IsNotEmpty()
  treatmentCodeId!: string;

  @IsString()
  @IsOptional()
  toothNumber?: string;

  @IsNumber()
  @IsPositive()
  quantity!: number;

  @IsNumber()
  @Min(0)
  unitPrice!: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  discountAmount?: number;
}

export class CreateInvoiceDto {
  @IsString()
  @IsNotEmpty()
  clinicId!: string;

  @IsString()
  @IsNotEmpty()
  patientId!: string;

  @IsString()
  @IsOptional()
  appointmentId?: string;

  @IsEnum(['TRY', 'EUR', 'USD'])
  currency!: CurrencyCode;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateInvoiceItemDto)
  items!: CreateInvoiceItemDto[];
}

