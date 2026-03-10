import { Injectable } from '@nestjs/common';

@Injectable()
export class PayoutCalculationService {
  calculate(input: { periodMonth: number; periodYear: number; clinicId: string }) {
    return { input, entries: [] };
  }

  summary(doctorId: string, period: string) {
    return { doctorId, period, amount: 0 };
  }
}

