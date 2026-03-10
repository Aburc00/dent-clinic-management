import type { CurrencyCode } from '../../billing/domain/models';

export type PosProvider = 'IYZICO' | 'PAYTR';

export interface PaymentLink {
  id: string;
  patientId: string;
  invoiceId?: string;
  provider: PosProvider;
  amount: number;
  currency: CurrencyCode;
  status: 'PENDING' | 'PAID' | 'EXPIRED' | 'CANCELLED';
  expiresAt?: string;
  urlMasked: string;
}

