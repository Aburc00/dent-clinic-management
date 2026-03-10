import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { CurrencyCode } from '../../billing/domain/models';
import { PosProvider } from '../domain/models';

export class CreatePaymentLinkDto {
  @IsString()
  @IsNotEmpty()
  patientId!: string;

  @IsNumber()
  @IsPositive()
  amount!: number;

  @IsEnum(['TRY', 'EUR', 'USD'])
  currency!: CurrencyCode;

  @IsString()
  @IsOptional()
  invoiceId?: string;

  @IsEnum(['IYZICO', 'PAYTR'])
  provider!: PosProvider;
}

