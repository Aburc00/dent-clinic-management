## Backend Domain Şeması

### 1. Hasta Yönetimi

- **Patient**
  - `id: string`
  - `clinicId: string`
  - `fullName: string`
  - `phone: string`
  - `email?: string`
  - `birthDate?: Date`
  - `gender?: 'male' | 'female' | 'other'`
  - `nationalId?: string`
  - `address?: string`
  - `notes?: string`
  - `archivedAt?: Date`
  - `createdAt: Date`
  - `updatedAt: Date`

- **MedicalHistory**
  - `id: string`
  - `patientId: string`
  - `chronicDiseases: string[]`
  - `allergies: string[]`
  - `currentMedications: string[]`
  - `notes?: string`
  - `createdAt: Date`
  - `updatedAt: Date`

- **ContactPerson**
  - `id: string`
  - `patientId: string`
  - `fullName: string`
  - `phone: string`
  - `relation: string`

### 2. Odontogram ve Tedavi Planı

- **Tooth**
  - (Veritabanında genelde ayrı tabloya ihtiyaç olmadan numara + status ile temsil edilir)

- **ToothStatus**
  - `status: 'healthy' | 'caries' | 'filling' | 'crown' | 'implant' | 'extracted' | 'planned_extraction' | 'other'`

- **Odontogram**
  - `id: string`
  - `patientId: string`
  - `schemaType: 'adult' | 'child'`
  - `teeth: OdontogramTooth[]`
  - `createdAt: Date`
  - `updatedAt: Date`

- **OdontogramTooth**
  - `toothNumber: string` (FDI numaralandırma sistemi tercih edilebilir)
  - `status: ToothStatus`
  - `notes?: string`

- **TreatmentPlan**
  - `id: string`
  - `patientId: string`
  - `createdByUserId: string`
  - `status: 'planned' | 'in_progress' | 'completed' | 'cancelled'`
  - `version: number`
  - `createdAt: Date`
  - `updatedAt: Date`

- **TreatmentItem**
  - `id: string`
  - `planId: string`
  - `toothNumber?: string`
  - `procedureCode: string`
  - `description?: string`
  - `price: number`
  - `status: 'planned' | 'in_progress' | 'completed' | 'cancelled'`
  - `performedByUserId?: string`
  - `performedAt?: Date`

### 3. Randevu Yönetimi

- **Appointment**
  - `id: string`
  - `clinicId: string`
  - `patientId: string`
  - `doctorId: string`
  - `roomId?: string`
  - `start: Date`
  - `end: Date`
  - `type: 'exam' | 'control' | 'operation' | 'other'`
  - `status: 'scheduled' | 'arrived' | 'no_show' | 'cancelled' | 'completed'`
  - `notes?: string`
  - `createdAt: Date`
  - `updatedAt: Date`

- **DoctorSchedule**
  - `id: string`
  - `doctorId: string`
  - `dayOfWeek: number` (0–6)
  - `startTime: string` (HH:MM)
  - `endTime: string` (HH:MM)

- **ScheduleBlock**
  - `id: string`
  - `doctorId: string`
  - `start: Date`
  - `end: Date`
  - `reason?: string`

### 4. Finans ve Muhasebe

- **Procedure**
  - `id: string`
  - `code: string`
  - `name: string`
  - `defaultPrice: number`
  - `category?: string`
  - `active: boolean`

- **PriceList**
  - `id: string`
  - `clinicId: string`
  - `name: string`
  - `isDefault: boolean`

- **PriceListItem**
  - `id: string`
  - `priceListId: string`
  - `procedureId: string`
  - `price: number`

- **Invoice**
  - `id: string`
  - `clinicId: string`
  - `patientId: string`
  - `total: number`
  - `status: 'draft' | 'issued' | 'paid' | 'cancelled'`
  - `issuedAt?: Date`
  - `paidAt?: Date`
  - `createdAt: Date`
  - `updatedAt: Date`

- **InvoiceItem**
  - `id: string`
  - `invoiceId: string`
  - `treatmentItemId?: string`
  - `description: string`
  - `quantity: number`
  - `unitPrice: number`
  - `total: number`

- **Payment**
  - `id: string`
  - `invoiceId: string`
  - `amount: number`
  - `method: 'cash' | 'card' | 'transfer' | 'installment'`
  - `paidAt: Date`
  - `notes?: string`

- **CashRegister**
  - `id: string`
  - `clinicId: string`
  - `date: Date`
  - `openingBalance: number`
  - `closingBalance: number`

### 5. Stok ve Envanter

- **InventoryItem**
  - `id: string`
  - `clinicId: string`
  - `name: string`
  - `category?: string`
  - `brand?: string`
  - `quantity: number`
  - `unit: string`
  - `minQuantity: number`
  - `createdAt: Date`
  - `updatedAt: Date`

- **InventoryMovement**
  - `id: string`
  - `itemId: string`
  - `direction: 'in' | 'out'`
  - `quantity: number`
  - `reason?: string`
  - `relatedTreatmentItemId?: string`
  - `createdAt: Date`

### 6. Kullanıcı ve Yetkilendirme

- **User**
  - `id: string`
  - `clinicId: string`
  - `email: string`
  - `hashedPassword: string`
  - `fullName: string`
  - `role: 'doctor' | 'assistant' | 'reception' | 'admin'`
  - `isActive: boolean`
  - `createdAt: Date`
  - `updatedAt: Date`

- **StaffProfile**
  - `id: string`
  - `userId: string`
  - `title?: string`
  - `speciality?: string`
  - `bio?: string`

- **Role** (İleri faz için granular yetkiler gerekiyorsa ayrı tablo)
  - `id: string`
  - `name: string`
  - `permissions: string[]`

### 7. Dosya ve Görüntü Arşivi

- **MedicalFile**
  - `id: string`
  - `patientId: string`
  - `uploadedByUserId: string`
  - `fileType: 'xray' | 'photo' | 'document' | 'other'`
  - `fileName: string`
  - `storagePath: string`
  - `contentType: string`
  - `notes?: string`
  - `createdAt: Date`

### 8. Ortak Kavramlar

 - **Clinic**
   - `id: string`
   - `name: string`
   - `address?: string`
   - `phone?: string`
   - `createdAt: Date`

## Faz 2 Domain Modelleri ve İlişkiler

- TreatmentCode
- ClinicTreatmentPrice
- Invoice
- InvoiceItem
- Payment
- PosProviderConfig
- PaymentLink
- DoctorPayoutRule
- DoctorPayoutEntry
- Product
- InventoryLocation
- InventoryStock
- InventoryMovement
- ImplantRegistry
