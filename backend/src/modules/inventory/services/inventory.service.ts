import { Injectable } from '@nestjs/common';
import { InventoryLocation, InventoryMovement, InventoryStock } from '../domain/models';
import { CreateMovementDto } from '../dto/create-movement.dto';

@Injectable()
export class InventoryService {
  private readonly locations: InventoryLocation[] = [];
  private readonly stocks: InventoryStock[] = [];
  private readonly movements: InventoryMovement[] = [];

  stock(locationId?: string) {
    const items = this.stocks.filter((s) =>
      locationId ? s.locationId === locationId : true,
    );
    return { locationId, items };
  }

  move(input: CreateMovementDto) {
    const movement: InventoryMovement = {
      id: `mov-${Date.now()}`,
      productId: input.productId,
      fromLocationId: input.fromLocationId,
      toLocationId: input.toLocationId,
      quantity: input.quantity,
      reason: input.reason,
      relatedPatientId: input.relatedPatientId,
      relatedAppointmentId: input.relatedAppointmentId,
      createdByUserId: input.createdByUserId,
      createdAt: new Date().toISOString(),
    };

    this.movements.push(movement);

    if (input.fromLocationId) {
      this.adjustStock(input.productId, input.fromLocationId, -input.quantity);
    }
    if (input.toLocationId) {
      this.adjustStock(input.productId, input.toLocationId, input.quantity);
    }

    return movement;
  }

  private adjustStock(productId: string, locationId: string, delta: number) {
    let stock = this.stocks.find(
      (s) => s.productId === productId && s.locationId === locationId,
    );
    if (!stock) {
      stock = {
        id: `stock-${Date.now()}-${Math.random()}`,
        productId,
        locationId,
        quantityOnHand: 0,
      };
      this.stocks.push(stock);
    }
    stock.quantityOnHand += delta;
  }
}

