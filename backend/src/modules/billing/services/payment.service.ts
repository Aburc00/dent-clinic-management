import { Injectable } from '@nestjs/common';
import { Payment } from '../domain/models';
import { RecordPaymentDto } from '../dto/record-payment.dto';

@Injectable()
export class PaymentService {
  private readonly payments: Payment[] = [];

  recordPayment(input: RecordPaymentDto): Payment {
    const payment: Payment = {
      id: `pay-${Date.now()}`,
      clinicId: input.clinicId,
      patientId: input.patientId,
      invoiceId: input.invoiceId,
      method: input.method,
      amount: input.amount,
      currency: input.currency,
      receivedAt: new Date().toISOString(),
      posProvider: input.posProvider,
      externalTransactionId: input.externalTransactionId,
      status: 'CONFIRMED',
    };

    this.payments.push(payment);
    return payment;
  }
}

