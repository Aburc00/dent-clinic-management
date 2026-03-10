export type CurrencyCode = 'TRY' | 'EUR' | 'USD';

export interface TreatmentCode {
  id: string;
  code: string;
  name: string;
  description?: string;
  defaultPrice: number;
  tdbCode?: string;
  isActive: boolean;
  vatRate: number;
}

export interface ClinicTreatmentPrice {
  id: string;
  clinicId: string;
  treatmentCodeId: string;
  customPrice: number;
  currency: CurrencyCode;
}

export type InvoiceStatus = 'DRAFT' | 'ISSUED' | 'CANCELLED';
export type GibStatus = 'PENDING' | 'SENT' | 'ERROR';
export type GibDocumentType = 'E_SMM' | 'E_INVOICE';

export interface InvoiceItem {
  id: string;
  treatmentCodeId: string;
  toothNumber?: string;
  quantity: number;
  unitPrice: number;
  discountAmount: number;
  lineTotal: number;
}

export interface Invoice {
  id: string;
  clinicId: string;
  patientId: string;
  appointmentId?: string;
  totalAmount: number;
  currency: CurrencyCode;
  status: InvoiceStatus;
  issueDate: string;
  dueDate?: string;
  gibStatus: GibStatus;
  gibDocumentType?: GibDocumentType;
  externalId?: string;
  items: InvoiceItem[];
}

export type PaymentMethod = 'CASH' | 'CARD' | 'ONLINE' | 'TRANSFER';

export interface Payment {
  id: string;
  clinicId: string;
  patientId: string;
  invoiceId?: string;
  method: PaymentMethod;
  amount: number;
  currency: CurrencyCode;
  receivedAt: string;
  posProvider?: string;
  externalTransactionId?: string;
  status: 'PENDING' | 'CONFIRMED' | 'FAILED';
}

