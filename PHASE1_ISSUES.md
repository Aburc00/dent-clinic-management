## Faz 1 Issue Listesi (MVP)

Bu liste, Faz 1 kapsamındaki temel işleri küçük task'lara bölmek için hazırlandı.

### Backend – Auth ve Kullanıcı Yönetimi

- [ ] `backend`: Auth module iskeleti (JWT tabanlı kimlik doğrulama)
- [ ] `backend`: Login endpoint (`POST /auth/login`) – email + şifre ile token üretimi
- [ ] `backend`: Mevcut kullanıcıyı dönen endpoint (`GET /auth/me`)
- [ ] `backend`: `User` entity ve basit in-memory veya mock repository
- [ ] `backend`: RBAC için `RolesGuard` ve `@Roles()` decorator

### Backend – Hasta Yönetimi (Temel)

- [ ] `backend`: `PatientsModule` altında `Patient` domain entity'sinin eklenmesi
- [ ] `backend`: Hasta oluşturma use-case'i (`CreatePatientService`)
- [ ] `backend`: Hasta listeleme ve arama use-case'i (pagination + filtreleme)
- [ ] `backend`: Hasta güncelleme ve arşivleme endpointleri
- [ ] `backend`: Hasta controller (`/patients` REST endpointleri)

### Backend – Randevu Yönetimi (Basit)

- [ ] `backend`: `AppointmentsModule` için `Appointment` entity'si
- [ ] `backend`: Randevu oluşturma use-case'i – çakışma kontrolü ile
- [ ] `backend`: Doktor bazlı günlük/haftalık randevu listeleme endpointi
- [ ] `backend`: Randevu durum güncelleme endpointleri (tamamlandı, iptal, no-show)

### Backend – Basit Finans

- [ ] `backend`: `BillingModule` altında `Invoice` ve `InvoiceItem` entity'leri
- [ ] `backend`: Tedavi kalemlerinden fatura oluşturmak için basit endpoint (şimdilik dummy tedavi verisiyle)
- [ ] `backend`: Hastaya göre fatura ve bakiye sorgulama endpointi
- [ ] `backend`: Günlük kasa toplamını hesaplayan basit endpoint

### Frontend – Altyapı ve Auth Akışı

- [ ] `frontend`: API client katmanı (base URL, auth header ekleme)
- [ ] `frontend`: Login formunu backend `/auth/login` ile bağlama
- [ ] `frontend`: Auth context veya hook (mevcut kullanıcıyı saklama)
- [ ] `frontend`: Protected route mantığı (login yoksa `/login`e yönlendirme)

### Frontend – Hastalar

- [ ] `frontend`: `Hastalar` sayfasında backend'den liste çekme ve tablo render etme
- [ ] `frontend`: Arama inputunu backend filtreleri ile entegre etmek
- [ ] `frontend`: Yeni hasta formu (modal veya ayrı sayfa) ve create endpoint entegrasyonu
- [ ] `frontend`: Hasta detay sayfasında ( `/patients/[id]` ) temel hasta bilgilerini gösterme

### Frontend – Randevular

- [ ] `frontend`: `Randevular` sayfasında basit liste/tablo ile günün randevularını gösterme
- [ ] `frontend`: Yeni randevu oluşturma formu (hasta + doktor + saat seçimleri mock veya basit dropdown)

### Frontend – Basit Finans Görünümleri

- [ ] `frontend`: Hastanın finans özeti için basit bir kart (toplam borç, son ödeme)
- [ ] `frontend`: Dashboard üzerinde günlük tahsilat ve aylık ciro kartlarını backend ile entegre etmek

