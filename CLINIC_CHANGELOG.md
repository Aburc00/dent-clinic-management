## Klinik Değişiklik Günlüğü

- 2026-03-10 – Başlangıç
  - Proje için fazlara bölünmüş master teknik yol haritası tanımlandı.
  - Faz 2 kapsamı: finans, stok, hakediş ve entegrasyon temelleri planlandı.
  - Faz 2 için domain modelleri, backend modül planı ve frontend akış planları `*.md` dosyalarında tanımlandı.
  - `CLINIC_CHANGELOG.md` dosyasının her geliştirme turu öncesi okunup, sonrası güncelleneceği kuralı benimsendi.

- 2026-03-10 – Faz 2 Uygulama İskeleti
  - `backend/` altında NestJS uygulama çekirdeği (`main.ts`, `app.module.ts`) ve Faz 2 modülleri (`BillingModule`, `EInvoiceModule`, `PosModule`, `PayoutModule`, `InventoryModule`) scaffold edildi.
  - `frontend/` altında Next.js (App Router) yapılandırıldı ve klinik panel + public akışlar için temel route’lar oluşturuldu: `(clinic)/finance`, `(clinic)/inventory`, `(clinic)/appointments/new`, `(clinic)/patients`, `(clinic)/schedule`, `anamnesis/[token]`, `book`.

- 2026-03-10 – Billing Domain Uygulaması (In-Memory)
  - `BillingModule` altında Faz 2 planındaki finans domain modelleri için tipler tanımlandı (`TreatmentCode`, `Invoice`, `InvoiceItem`, `Payment` vb.).
  - `TariffService`, `InvoiceService` ve `PaymentService` in-memory veri yapıları ve tipli DTO’larla güncellendi; `/billing/tariffs`, `/billing/invoices`, `/billing/payments` endpoint’leri anlamlı demo yanıtları döner hale getirildi.

- 2026-03-10 – Inventory ve POS Domain Uygulaması (In-Memory)
  - `InventoryModule` altında ürün, stok, hareket ve implant kayıtları için domain modelleri ve servisler in-memory olarak kurgulandı; `/inventory/products`, `/inventory/stock`, `/inventory/movements`, `/inventory/implants/register` uçları tipli DTO’larla çalışır hale getirildi.
  - `PosModule` içinde `PaymentLink` domain modeli ve `PaymentLinkService` güncellendi; `/pos/payment-links` uçları demo payment-link nesneleri üretecek şekilde yapılandırıldı.

- 2026-03-10 – Backend DTO ve Validasyon Katmanı
  - Backend’e `class-validator` ve `class-transformer` eklendi, global `ValidationPipe` aktive edildi.
  - Billing, Inventory ve POS modüllerinde istek gövdeleri için DTO sınıfları tanımlandı (ör. `CreateInvoiceDto`, `RecordPaymentDto`, `CreateProductDto`, `CreateMovementDto`, `RegisterImplantDto`, `CreatePaymentLinkDto`) ve controller’lar bu tipleri kullanacak şekilde güncellendi.



