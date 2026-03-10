import { Injectable } from '@nestjs/common';

export interface GibPayload {
  invoiceId: string;
}

@Injectable()
export class EInvoiceService {
  buildPayload(invoiceId: string): GibPayload {
    return { invoiceId };
  }

  send(payload: GibPayload) {
    return { payload, status: 'SANDBOX_SENT' };
  }
}

