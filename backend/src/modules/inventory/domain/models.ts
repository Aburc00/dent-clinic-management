export interface Product {
  id: string;
  clinicId: string;
  name: string;
  category?: string;
  unit: string;
  utsCode?: string;
  isConsumable: boolean;
  trackBySerial: boolean;
  defaultReorderLevel?: number;
}

export interface InventoryLocation {
  id: string;
  clinicId: string;
  name: string;
}

export interface InventoryStock {
  id: string;
  productId: string;
  locationId: string;
  quantityOnHand: number;
}

export type InventoryMovementReason =
  | 'PURCHASE'
  | 'CONSUMPTION'
  | 'ADJUSTMENT'
  | 'RETURN';

export interface InventoryMovement {
  id: string;
  productId: string;
  fromLocationId?: string;
  toLocationId?: string;
  quantity: number;
  reason: InventoryMovementReason;
  relatedPatientId?: string;
  relatedAppointmentId?: string;
  createdByUserId?: string;
  createdAt: string;
}

export interface ImplantRegistry {
  id: string;
  patientId: string;
  appointmentId?: string;
  productId?: string;
  utsBarcode: string;
  toothNumber?: string;
  lotNumber?: string;
  serialNumber?: string;
  placedAt: string;
}

