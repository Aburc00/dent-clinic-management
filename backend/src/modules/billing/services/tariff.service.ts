import { Injectable } from '@nestjs/common';
import { TreatmentCode } from '../domain/models';

@Injectable()
export class TariffService {
  private readonly tariffs: TreatmentCode[] = [];

  listTariffs() {
    return this.tariffs;
  }

  importTariffs(source: string) {
    // Demo amaçlı: gerçek implementasyonda CSV/JSON parse edilecek.
    const demoTariff: TreatmentCode = {
      id: 'treat-demo',
      code: 'D001',
      name: 'Örnek Tedavi',
      defaultPrice: 1000,
      isActive: true,
      vatRate: 0.2,
    };
    this.tariffs.splice(0, this.tariffs.length, demoTariff);
    return { importedFrom: source, count: this.tariffs.length };
  }
}

