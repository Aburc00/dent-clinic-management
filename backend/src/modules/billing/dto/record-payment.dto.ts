import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { CurrencyCode, PaymentMethod } from '../domain/models';

export class RecordPaymentDto {
  @IsString()
  @IsNotEmpty()
  clinicId!: string;

  @IsString()
  @IsNotEmpty()
  patientId!: string;

  @IsString()
  @IsOptional()
  invoiceId?: string;

  @IsEnum(['CASH', 'CARD', 'ONLINE', 'TRANSFER'])
  method!: PaymentMethod;

  @IsNumber()
  @IsPositive()
  amount!: number;

  @IsEnum(['TRY', 'EUR', 'USD'])
  currency!: CurrencyCode;

  @IsString()
  @IsOptional()
  posProvider?: string;

  @IsString()
  @IsOptional()
  externalTransactionId?: string;
}

