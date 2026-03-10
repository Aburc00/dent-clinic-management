import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { InventoryMovementReason } from '../domain/models';

export class CreateMovementDto {
  @IsString()
  @IsNotEmpty()
  productId!: string;

  @IsString()
  @IsOptional()
  fromLocationId?: string;

  @IsString()
  @IsOptional()
  toLocationId?: string;

  @IsNumber()
  @IsPositive()
  quantity!: number;

  @IsString()
  @IsIn(['PURCHASE', 'CONSUMPTION', 'ADJUSTMENT', 'RETURN'])
  reason!: InventoryMovementReason;

  @IsString()
  @IsOptional()
  relatedPatientId?: string;

  @IsString()
  @IsOptional()
  relatedAppointmentId?: string;

  @IsString()
  @IsOptional()
  createdByUserId?: string;
}

