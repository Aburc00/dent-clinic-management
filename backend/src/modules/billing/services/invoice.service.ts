import { Injectable } from '@nestjs/common';
import { Invoice, InvoiceItem } from '../domain/models';
import { CreateInvoiceDto } from '../dto/create-invoice.dto';

@Injectable()
export class InvoiceService {
  private readonly invoices: Invoice[] = [];

  createInvoice(input: CreateInvoiceDto): Invoice {
    const items: InvoiceItem[] = input.items.map((item, index) => {
      const discountAmount = item.discountAmount ?? 0;
      const lineTotal = item.quantity * item.unitPrice - discountAmount;
      return {
        id: `item-${Date.now()}-${index}`,
        treatmentCodeId: item.treatmentCodeId,
        toothNumber: item.toothNumber,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        discountAmount,
        lineTotal,
      };
    });

    const totalAmount = items.reduce((sum, i) => sum + i.lineTotal, 0);
    const nowIso = new Date().toISOString();

    const invoice: Invoice = {
      id: `inv-${Date.now()}`,
      clinicId: input.clinicId,
      patientId: input.patientId,
      appointmentId: input.appointmentId,
      totalAmount,
      currency: input.currency,
      status: 'ISSUED',
      issueDate: nowIso,
      gibStatus: 'PENDING',
      items,
    };

    this.invoices.push(invoice);
    return invoice;
  }

  getInvoice(id: string): Invoice | undefined {
    return this.invoices.find((i) => i.id === id);
  }

  sendToGib(id: string) {
    const invoice = this.invoices.find((i) => i.id === id);
    if (!invoice) {
      return { id, error: 'INVOICE_NOT_FOUND' };
    }
    invoice.gibStatus = 'SENT';
    return { id, status: invoice.gibStatus };
  }
}

