## Proje Durum Raporu – 10.03.2026

### Genel Özet

- **Backend tarafı**: Çekirdek mimari ve birçok domain modülü iskelet + temel servis/endpoint seviyesinde hazır, ama henüz uçtan uca iş akışları ve veri erişim katmanı tamamlanmış değil.
- **Frontend tarafı**: Klinik paneli için route yapısı ve sayfa iskeletleri hazır, ancak henüz backend API’lerine gerçek entegrasyon yok.
- **Dokümantasyon / planlama**: Domain şeması, mimari ve Faz 1 backlog’u tanımlandı; proje artık “uygulanacak işleri” net görebileceğin bir noktada.

---

### Backend Modülleri – Durum

#### App & Genel Altyapı

- **Yapılanlar**:
  - `AppModule` tüm çekirdek modülleri import edecek şekilde konfigüre edildi (`patients`, `appointments`, `billing`, `inventory`, `notifications`, `users`, `files`, `auth`, `e-invoice`, `pos`, `payout`).
  - `main.ts` global prefix (`/api`) ve global `ValidationPipe` ile güncellendi.
  - `tsconfig.json` ve `package.json` NestJS 10 uyumlu olacak şekilde birleştirildi.
- **Eksikler**:
  - Ortak logger, exception filter, config module (env yönetimi) henüz eklenmedi.
  - DB bağlantısı (PostgreSQL + ORM) henüz yok.

#### Patients (Hasta Yönetimi)

- **Yapılanlar**:
  - `PatientsModule` var; klasör yapısı DDD-lite uyumlu (`domain`, `application`, `infra`, `api` klasörleri).
  - Domain modeli `backend-domain-schema.md` içinde detaylı tanımlı (`Patient`, `MedicalHistory`, `ContactPerson`).
- **Eksikler**:
  - Entity class’ları, repository interface’leri, use-case servisleri, controller ve gerçek endpointler yazılmadı.
  - Veritabanı şeması ve migration’lar yok.

#### Appointments (Randevu Yönetimi)

- **Yapılanlar**:
  - `AppointmentsModule` oluşturuldu, DDD-lite klasör yapısı hazır.
  - Domain kavramları (`Appointment`, `DoctorSchedule`, `ScheduleBlock`) şemada tanımlı.
- **Eksikler**:
  - Çakışma kontrolü olan randevu oluşturma akışı, listeleme endpointleri vs. henüz yok.
  - Doktor takvimi modelinin persist edilmesi / sorgulanması eksik.

#### Billing (Finans/Muhasebe)

- **Yapılanlar**:
  - `BillingModule` artık **controller + servislerle dolu**:
    - `BillingController`
    - Servisler: `TariffService`, `PricingService`, `InvoiceService`, `PaymentService`
  - Domain dokümantasyonunda `Procedure`, `PriceList`, `Invoice`, `Payment` vs. tanımlı.
- **Eksikler**:
  - Servislerin iç mantığı ve DB erişimi (iş kuralları büyük ölçüde taslak kabul edilebilir).
  - Hasta ve tedavi planı ile tam entegrasyon (tedaviden otomatik fatura üretme vb.).

#### Inventory (Stok / Envanter)

- **Yapılanlar**:
  - `InventoryModule` controller ve servislerle dolu:
    - `InventoryController`
    - `ProductService`, `InventoryService`, `UtsService`
  - `domain/models.ts` ve ilgili DTO’lar (`create-product`, `create-movement`, `register-implant`) eklendi.
- **Eksikler**:
  - Stok hareketlerinin tedavi ve finans modülleriyle bağlanması.
  - UTS entegrasyonunun gerçek implementasyonu (şu an ihtimalle stub).

#### E-Invoice (e-Fatura)

- **Yapılanlar**:
  - `EInvoiceModule` ve `EInvoiceService` var (altyapı hazır).
- **Eksikler**:
  - Gerçek e-fatura servis entegrasyonu, fatura statü takibi, hata yönetimi.

#### POS (Ödeme Sistemleri / Sanal POS)

- **Yapılanlar**:
  - `PosModule`, `PosController`, domain modelleri, `PaymentLinkService`, `PosProviderFactory`, DTO (`create-payment-link`) dosyaları var.
- **Eksikler**:
  - Gerçek POS sağlayıcı entegrasyonları, webhook akışları, güvenlik kontrolleri.

#### Payout (Doktor Hakedişleri)

- **Yapılanlar**:
  - `PayoutModule`, `PayoutController`, `PayoutCalculationService`, `PayoutRuleService` oluşturuldu.
- **Eksikler**:
  - Hakediş kurallarının detaylı domain modeli ve fatura/tahsilat verileriyle beslenmesi.
  - Raporlama endpointleri.

#### Auth, Users, Files, Notifications

- **Yapılanlar**:
  - Bu modüllerin NestJS module iskeletleri var (Patients gibi).
  - Kullanıcı ve dosya domaini `backend-domain-schema.md` içinde tanımlı (`User`, `StaffProfile`, `MedicalFile`).
- **Eksikler**:
  - Auth için login/refresh endpointleri, JWT üretimi, RBAC guard’lar.
  - Users için CRUD ve rol yönetimi.
  - Files için upload/download, storage entegrasyonu.
  - Notifications için SMS/e-posta adapter’ları ve cron job’lar.

---

### Frontend – Durum

#### Genel Mimari

- **Yapılanlar**:
  - `frontend` altında Next.js app-router yapısı kuruldu.
  - `frontend/package.json` merge edildi ve Next 14 + React 18 stack’e sabitlendi.
  - `frontend-flows-plan.md` ile UI akış planı (randevu, finans, envanter vb.) yazılmış durumda.
- **Eksikler**:
  - UI state yönetimi (React Query vs.) ve API client katmanı henüz yazılmadı.
  - Auth korumaları (protected route, token saklama) yok.

#### Klinik Paneli Route’ları

- **Yapılanlar**:
  - `(clinic)` segmentleriyle modüler route’lar hazır:
    - `/app/(clinic)/patients`
    - `/app/(clinic)/schedule`
    - `/app/(clinic)/appointments/new`
    - `/app/(clinic)/inventory`
    - `/app/(clinic)/finance` ve `/app/(clinic)/finance/invoices`
  - Ayrıca:
    - `/book` (online randevu akışı için),
    - `/anamnesis/[token]` (doldurulacak anamnez formu için),
    - Kök `app/layout.tsx` ve `app/page.tsx` hazırlanmış.
- **Eksikler**:
  - Backend API’leriyle bağ (fetch, error handling, loading state).
  - Form validasyonu (Zod vs.) ve UX detayları.

#### Eski Planlanan Admin Panel Layout’u

- **Yapılanlar**:
  - Önceki iterasyonda tasarlanan sidebar’lı layout ve dashboard fikirleri mevcut yapıyla büyük ölçüde uyumlu; yeni `(clinic)` yapısına uyarlanmış durumda.
- **Eksikler**:
  - Tasarımın tek bir UX dili altında sadeleştirilmesi (şu an taslaklar birikmiş durumda, refaktör ihtiyacı olacak).

---

### Dokümantasyon ve Planlama

- **Yapılanlar**:
  - `backend-domain-schema.md`: Tüm temel domain objeleri + Faz 2 objeleri tanımlı.
  - `backend-modules-plan.md`: Backend modüllerinin görevleri ve sınırları planlanmış.
  - `frontend-flows-plan.md`: Frontend akışları (randevu, finans, stok, vs.) için ekran/flow tanımları.
  - `CLINIC_CHANGELOG.md`: Yüksek seviyede yapılan değişikliklerin kaydı tutulmaya başlamış.
- **Eksikler**:
  - Test stratejisi (unit/e2e) ve deployment pipeline dokümantasyonu.
  - Ortak API sözleşmesi (OpenAPI/Swagger) dökümanı.

---

### Genel Eksik Listesi (Kısa)

- **Altyapı**: DB entegrasyonu, config, logging, error handling standardizasyonu.
- **Backend iş akışları**: Hasta + randevu + finans + stok arasında uçtan uca senaryolar.
- **Auth & security**: Login, RBAC, token yenileme, frontend’de session yönetimi.
- **Frontend entegrasyonu**: Sayfaların gerçek API’lerle konuşması ve form/tablo bileşenlerinin üretim kullanımı.
- **Test & kalite**: Unit testler, e2e testler ve linter kurallarına göre temiz bir CI hattı.
- **DevOps**: Docker-compose, ortam konfigleri, staging/prod deployment stratejisi.

