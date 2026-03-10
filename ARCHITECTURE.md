## Genel Mimari Özeti

- **Backend**: `backend` klasörü altında NestJS tabanlı REST API.
- **Frontend**: `frontend` klasörü altında Next.js (React) tabanlı web arayüzü.
- **Veritabanı**: PostgreSQL (ileride Docker-compose ile eklenecek).
- **Modüller**: Patients, Appointments, Billing, Inventory, Notifications, Users, Files, Auth.

```mermaid
flowchart LR
  ui[NextJsFrontend] --> api[NestJsBackend]
  api --> patientsModule[PatientsModule]
  api --> appointmentsModule[AppointmentsModule]
  api --> billingModule[BillingModule]
  api --> inventoryModule[InventoryModule]
  api --> notificationsModule[NotificationsModule]
  api --> usersModule[UsersModule]
  api --> filesModule[FilesModule]
  api --> authModule[AuthModule]
  api --> db[(PostgreSQL)]
```

### Backend Katmanları (DDD-lite)

Her feature modülü `src/modules/<feature>` altında aşağıdaki katmanlara ayrılır:

- `domain`: Entity tanımları, domain servisleri, repository interface'leri.
- `application`: Use-case servisleri (ör. `CreatePatient`, `ScheduleAppointment`).
- `infra`: ORM repository implementasyonları ve diğer dış bağımlılıklar.
- `api`: NestJS controller'ları, DTO'lar ve HTTP mapping.

```mermaid
flowchart TB
  controller[API Controller] --> appService[Application Service]
  appService --> domainService[Domain Service]
  domainService --> repoInterface[Repository Interface]
  repoInterface --> repoImpl[Repository Implementation]
  repoImpl --> db[(DB)]
```

### Frontend Yapısı (Next.js)

- Route yapısı:
  - `/login`
  - `/dashboard`
  - `/patients`
  - `/patients/[id]`
  - `/appointments`
  - `/billing`
  - `/inventory`
  - `/settings/users`
  - `/reports`

- Ortak bileşenler:
  - Layout (sidebar + topbar)
  - Tablo ve form bileşenleri
  - Modallar ve toast bildirimi
  - Özel bileşenler: `OdontogramView`, `CalendarView`, `FinanceSummaryCard`

