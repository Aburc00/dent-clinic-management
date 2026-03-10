import { Injectable } from '@nestjs/common';

@Injectable()
export class PricingService {
  createInvoiceFromAppointment(appointmentId: string) {
    return { appointmentId, invoiceId: 'demo-invoice' };
  }
}

