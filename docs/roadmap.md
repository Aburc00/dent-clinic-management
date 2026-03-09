## Dent Clinic Management – Yol Haritası ve Durum Takibi

Bu dosya, diş kliniği yönetim sisteminin **tüm özelliklerini**, hangi fazda planlandığını ve
**tamamlandı / devam ediyor / bekliyor** durumlarını izlemek için kullanılır.

- **İşaretleme kuralı**:
  - `[x]` → tamamlandı
  - `[~]` → kısmen yapıldı / devam ediyor
  - `[ ]` → henüz yapılmadı

Şu an için kod tarafında yalnızca proje tanımı mevcut, bu nedenle tüm iş kalemleri başlangıçta **bekliyor** durumundadır.

---

## Faz Tanımları (Yüksek Seviye)

- **Faz 1 – Klinik Çekirdek**  
  Temel hasta yönetimi, dijital anamnez, randevu takvimi, online randevu.

- **Faz 2 – Finans & Stok & Personel**  
  Otomatik fiyatlandırma, e-SMM/e-Fatura, POS, hakediş, stok ve ÜTS entegrasyonu.

- **Faz 3 – Odontogram & Periodontal**  
  2D/3D interaktif odontogram, periodontal haritalama, klinik içi görselleştirme.

- **Faz 4 – E-Devlet Entegrasyonları**  
  e-Nabız, Medula, Sağlık.net, MHRS/USS standartlarına uygun entegrasyonlar.

- **Faz 5 – AI, PACS & Teledentistry**  
  AI destekli röntgen analizi, AI verilerinin odontograma aktarımı, bulut PACS/DICOM, teledentistry.

- **Faz 6 – Sağlık Turizmi, Sadakat & DSO**  
  Çoklu dil/döviz, CRM & lojistik, paket/abonelikler, white-label mobil uygulama, çoklu şube (DSO) mimarisi.

---

## 0. Genel Proje & Altyapı

- [x] Proje tanımı ve temel README (kapsam özetlendi).
- [ ] Mimari dokümantasyon (frontend/backend teknolojileri, modüller, veri modeli).
- [ ] Geliştirme ortamı kurulumu (Docker-compose, veritabanı, temel servisler).
- [ ] Kimlik doğrulama ve rol bazlı yetkilendirme altyapısı.

---

## 1. Temel Hasta ve Klinik Yönetimi (Faz 1 ağırlıklı)

- [ ] **Dinamik Hasta Profili**
  - [ ] Hasta kimlik ve iletişim bilgileri yönetimi.
  - [ ] Kronik rahatsızlık ve alerji kayıtları (örn. penisilin, kalp pili).
  - [ ] Tedavi planı veya randevu açılırken hekime **otomatik pop-up uyarı**.

- [ ] **Dijital Anamnez**
  - [ ] Cep telefonu üzerinden doldurulabilen anamnez formu tasarımı.
  - [ ] Anamnez formu için şablon/versiyon yönetimi.
  - [ ] Hastanın doldurduğu formun sisteme **otomatik senkronizasyonu**.

- [ ] **E-Devlet Entegrasyonları (ileri faz)**  
  - [ ] Sağlık Bakanlığı **e-Nabız** entegrasyonu (veri gönderme/alma).
  - [ ] **Medula** entegrasyonu.
  - [ ] **Sağlık.net** entegrasyonu.
  - [ ] **MHRS (USS normlarıyla)** entegrasyonu.

- [ ] **3D İnteraktif Odontogram (Faz 3)**  
  - [ ] Süt ve sürekli dişlerin aynı anda işaretlenebildiği **karma dentisyon** desteği.
  - [ ] Mevcut / planlanan / tamamlanan tedavilerin **farklı layer’larda** gösterimi.
  - [ ] Uluslararası **renk kodları** ile tedavi durumlarının gösterimi.

- [ ] **Periyodontal Haritalama (Faz 3)**  
  - [ ] Diş eti cebi derinliği, kanama, çekilme gibi verilerin girilebileceği grafiksel tablo.
  - [ ] Periodontal verilerin geçmişe dönük takibi ve raporlanması.

- [ ] **Akıllı Randevu Takvimi (Faz 1 çekirdek, faz 2+ gelişmiş)**  
  - [ ] Hekim ve koltuk bazlı günlük/haftalık/aylık takvim görünümü.
  - [ ] Hekim ve koltuk çakışmalarını engelleyen **otomatik çakışma kontrolü**.
  - [ ] İptal olan randevular için uygun **bekleme listesi** hastalarının önerilmesi.
  - [ ] (İleri faz) İptal slotuna **waitlist** hastalarına otomatik teklif (SMS/e-posta).

- [ ] **Online Randevu Modülü (Faz 1)**  
  - [ ] Web sitesi / mobil arayüz üzerinden 7/24 randevu alım ekranı.
  - [ ] Hekim/branş seçimi ve uygun saat slotlarının listelenmesi.
  - [ ] Telefon/e-posta doğrulama ve onay mesajları.

---

## 2. Finans, Stok ve Personel Süreçleri (Faz 2)

- [ ] **Otomatik Fiyatlandırma ve Faturalandırma**
  - [ ] TDB güncel **asgari ücret tarifesinin** sisteme gömülmesi.
  - [ ] İşlem bazlı otomatik fiyat hesaplama (işlem türü, süre, malzeme vb.).
  - [ ] e-Serbest Meslek Makbuzu (**e-SMM**) üretimi ve GİB’e otomatik iletim.
  - [ ] **e-Fatura** entegrasyonu (GİB ile).

- [ ] **Sanal POS Entegrasyonu**
  - [ ] iyzico, PayTR vb. altyapılarla ödeme entegrasyonu.
  - [ ] Hastaya SMS/e-posta ile **güvenli ödeme linki** gönderme.
  - [ ] Uzaktan tahsilatların durum takibi (başarılı, iptal, iade).

- [ ] **Hakediş ve Prim Otomasyonu**
  - [ ] Hekim bazlı ciro ve tahsilat raporu.
  - [ ] Ciro veya tahsilat üzerinden aylık **hakediş hesaplama** kuralları.
  - [ ] Hakediş raporlarının onay ve ödeme takibi.

- [ ] **Akıllı Stok ve ÜTS Entegrasyonu**
  - [ ] Stok kartları (sarf malzemeleri, ilaçlar, implantlar vb.).
  - [ ] ÜTS barkodu okutularak **hastanın dosyasına işlem** kaydı.
  - [ ] Stok kritik seviyeye düştüğünde otomatik uyarı.
  - [ ] Odontogramda yapılan işleme göre kullanılan sarf malzemenin **stoktan otomatik düşmesi**.

- [ ] **Personel Yönetimi**
  - [ ] Rol ve yetki seviyelerinin tanımlanması (doktor, asistan, banko vb.).
  - [ ] Personel performans metriklerinin tanımı (hasta sayısı, ciro, memnuniyet vs.).
  - [ ] Vardiya, mesai ve izin takibi.

---

## 3. Yapay Zeka (AI) ve İleri Teknolojiler (Faz 5)

- [ ] **AI Destekli Röntgen Analizi**
  - [ ] Pearl AI, Overjet vb. API’ler ile entegrasyon altyapısı.
  - [ ] Panoramik ve periapikal röntgenlerde çürük, kemik kaybı, lezyon tespiti.
  - [ ] AI bulgularının görsel olarak işaretlenmesi ve raporlanması.

- [ ] **AI Verilerinin Odontograma Aktarımı**
  - [ ] AI’nin bulduğu çürük ve dolguların **manuel giriş olmadan** diş haritasına işlenmesi.
  - [ ] AI tahmini ile hekimin manuel düzeltmelerini senkron tutan yapı.

- [ ] **Ortam Dinleme (Ambient Voice)**
  - [ ] Hekimin muayene sırasında söylediği tıbbi terimleri algılayacak sesli asistan entegrasyonu.
  - [ ] Bu verilerin otomatik olarak **hasta notlarına** ve tedavi planına işlenmesi.
  - [ ] Dilde (TR/EN) özel tıbbi terminoloji sözlüğü yönetimi.

- [ ] **Bulut PACS ve DICOM Desteği**
  - [ ] 3D Tomografi (CBCT) ve röntgen görüntülerinin DICOM formatında saklanması.
  - [ ] Harici programa gerek kalmadan web arayüzünde görüntüleme (zoom, ölçüm, parlaklık/kontrast).
  - [ ] Büyük veri boyutları için ölçeklenebilir bulut dosya sistemi entegrasyonu.

---

## 4. Sağlık Turizmi ve Hasta İletişimi (Faz 5–6)

- [ ] **Çoklu Dil ve Döviz Kuru Desteği**
  - [ ] Arayüz, formlar ve hasta portallarında çoklu dil desteği (TR, EN, vb.).
  - [ ] Merkez Bankası API’si ile **anlık döviz kurları** üzerinden fiyat teklifi hazırlama.

- [ ] **Lojistik (CRM) Modülü**
  - [ ] Yabancı hastaların uçuş bilgileri, VIP transfer, otel rezervasyonlarının kaydı.
  - [ ] Vize süreçlerinin ve gerekli belgelerin takibi.
  - [ ] Tüm bu bilgilerin tek ekrandan görüntülenebileceği CRM paneli.

- [ ] **Uzaktan Teşhis (Teledentistry)**
  - [ ] Sistem içine entegre, uçtan uca şifrelenmiş **video konferans** modülü.
  - [ ] Fotoğraf/video yükleme ile ön değerlendirme imkânı.
  - [ ] Teledentistry seansının hasta dosyasına otomatik kaydı.

- [ ] **İki Yönlü İletişim**
  - [ ] WhatsApp Business API entegrasyonu.
  - [ ] Hastalara randevu hatırlatmaları, eğitim broşürleri ve röntgen gönderimi.
  - [ ] Hastanın \"EVET\" veya \"HAYIR\" yanıtının doğrudan takvimi güncellemesi.

- [ ] **Otomatik Geri Çağırma (Recall)**
  - [ ] 6 aylık / yıllık rutin kontrol için uygun hastaların otomatik tespiti.
  - [ ] Otomatik randevu daveti (SMS/e-posta/WhatsApp).
  - [ ] Hatırlatma kampanyalarının dönüş oranı raporlaması.

- [ ] **Hasta Eğitim Kütüphanesi**
  - [ ] Tedavi türlerine göre (örn. implant, kanal tedavisi) kategorize eğitim içerikleri.
  - [ ] Hastaya, planlanan tedaviye göre **3D eğitici animasyonların otomatik gönderimi**.
  - [ ] İzlenme oranı ve geri bildirim takibi.

---

## 5. Yasal Uyum ve Dijital Arşiv – Kağıtsız Klinik (Faz 4–5)

- [ ] **Biyometrik Dijital Onam**
  - [ ] KVKK ve aydınlatılmış onam formlarının tablet üzerinden okunması.
  - [ ] Zaman damgalı, hız ve basınç duyarlı **biyometrik imza** alınması.
  - [ ] İmzalı formların güvenli arşivlenmesi ve gerektiğinde hukuki delil olarak sunulabilmesi.

- [ ] **Veri Maskeleme ve Unutulma Hakkı**
  - [ ] \"Unutulma hakkı\" talep eden hastalar için kişisel verilerin maskelenmesi/anonimleştirilmesi.
  - [ ] Klinik finansal istatistiklerini bozmadan (agregasyonları koruyarak) veri gizleme.
  - [ ] Bu işlemlerin audit log’lara kaydedilmesi.

---

## 6. Hasta Sadakati ve Kurumsal (DSO) Mimari (Faz 6)

- [ ] **Üyelik ve Sadakat Planları**
  - [ ] \"Klinik abonelik paketleri\" tanımlama (örn. yıllık sabit ücretle ücretsiz diş taşı temizliği, indirimli tedaviler).
  - [ ] Aboneliklerin kredi kartından **otomatik tahsilatı**.
  - [ ] Üyelik süresi, hak edilen hizmetler ve kullanım istatistiklerinin takibi.

- [ ] **Kliniğe Özel (White-Label) Mobil Uygulama**
  - [ ] Klinik logosu ve renkleriyle özelleştirilebilir mobil uygulama arayüzü.
  - [ ] Hastaların randevu, reçete, ödeme geçmişi ve 3D eğitim videolarını görüntüleyebilmesi.
  - [ ] Push bildirimleri (randevu hatırlatma, kampanya, geri çağırma vb.).

- [ ] **Çoklu Şube (DSO) Desteği**
  - [ ] Birden fazla şubesi olan klinikler için verilerin **merkezileştirilmesi**.
  - [ ] Hastanın her şubede aynı dosyayla işlem görebilmesi (tek hasta ID).
  - [ ] Yöneticiler için tüm şubeleri tek ekrandan izleyebileceği **finansal dashboard**.
  - [ ] Şubeler arası performans karşılaştırma ve raporlama.

---

## Kullanım Notu

Bu dosya, geliştirme ilerledikçe **güncellenecek tek kaynak** (single source of truth) olmalıdır.  
Yeni bir özellik eklendiğinde veya tamamlandığında ilgili maddeyi:

- `[ ]` → `[~]` (devam ediyor) veya  
- `[ ] / [~]` → `[x]` (tamamlandı)  

olarak işaretleyin ve gerekiyorsa kısa bir not düşerek ilerlemeyi şeffaf bir şekilde takip edin.

