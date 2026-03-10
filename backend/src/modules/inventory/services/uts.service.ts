import { Injectable } from '@nestjs/common';
import { ImplantRegistry } from '../domain/models';
import { RegisterImplantDto } from '../dto/register-implant.dto';

@Injectable()
export class UtsService {
  private readonly implants: ImplantRegistry[] = [];

  registerImplant(input: RegisterImplantDto): ImplantRegistry {
    const implant: ImplantRegistry = {
      id: `impl-${Date.now()}`,
      utsBarcode: input.utsBarcode,
      patientId: input.patientId,
      appointmentId: input.appointmentId,
      productId: input.productId,
      toothNumber: input.toothNumber,
      lotNumber: input.lotNumber,
      serialNumber: input.serialNumber,
      placedAt: new Date().toISOString(),
    };

    this.implants.push(implant);
    return implant;
  }
}

