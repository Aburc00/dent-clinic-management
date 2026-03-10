import { Injectable } from '@nestjs/common';
import { PaymentLink } from '../domain/models';
import { CreatePaymentLinkDto } from '../dto/create-payment-link.dto';

@Injectable()
export class PaymentLinkService {
  private readonly links: PaymentLink[] = [];

  createLink(input: CreatePaymentLinkDto): PaymentLink {
    const link: PaymentLink = {
      id: `plink-${Date.now()}`,
      patientId: input.patientId,
      invoiceId: input.invoiceId,
      provider: input.provider,
      amount: input.amount,
      currency: input.currency,
      status: 'PENDING',
      expiresAt: new Date(Date.now() + 1000 * 60 * 60).toISOString(),
      urlMasked: 'https://payments.example.com/*****',
    };

    this.links.push(link);
    return link;
  }

  getLink(id: string): PaymentLink | undefined {
    return this.links.find((l) => l.id === id);
  }
}

