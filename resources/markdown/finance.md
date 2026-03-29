# User Guide - Komara Financial Tracker

> Panduan Lengkap Penggunaan Aplikasi Komara Financial Tracker
> 
> Version: 1.0 | Terakhir Diperbarui: Maret 2026

---

### Daftar Isi

1. [Autentikasi (Login)](#autentikasi)
2. [Pengaturan Profil](#profil)
3. [Manajemen Kategori](#kategori)
4. [Manajemen Dompet (Wallets)](#wallets)
5. [Anggaran & Perencanaan (Budget & Plan)](#budget)
6. [Manajemen Transaksi](#transaksi)

---

<a id="autentikasi"></a>
# 1. Autentikasi Sistem (Login)

![image.png](/assets/finance-guide/image.png)

Halaman autentikasi mensyaratkan pengguna untuk memasukkan nama pengguna (*username*) dan kata sandi (*password*). Harap gunakan kredensial yang telah didistribusikan oleh administrator sistem. Penggunaan kredensial milik orang lain sangat tidak diperkenankan demi menjamin keamanan dan kerahasiaan data finansial.

Setelah proses autentikasi berhasil, Anda akan diarahkan ke dasbor utama. Dasbor ini memberikan gambaran umum keuangan Anda serta menyediakan panel navigasi di sisi kiri layar dan menu pengaturan profil di sudut kanan atas.

![image.png](/assets/finance-guide/image%201.png)

---

<a id="profil"></a>
# 2. Pengaturan Profil

![image.png](/assets/finance-guide/image%202.png)

Halaman profil memfasilitasi Anda untuk memperbarui kata sandi. Mengingat kata sandi awal merupakan sandi acak (*auto-generated*) yang diberikan oleh administrator, Anda diwajibkan untuk segera mengubah kata sandi tersebut pada kesempatan pertama. 

Selain itu, terdapat kolom pengisian nomor WhatsApp. Meskipun bersifat opsional, pengisian nomor ini sangat direkomendasikan guna mempermudah proses pemulihan akses (contoh: permintaan *reset password*) yang akan dikirimkan langsung secara otomatis oleh sistem ke WhatsApp Anda.

---

<a id="kategori"></a>
# 3. Manajemen Kategori

![image.png](/assets/finance-guide/image%203.png)

Modul kategori merupakan komponen fundamental dari sistem pendataan. Melalui halaman ini, kita dapat mendefinisikan klasifikasi terstruktur untuk pemasukan dan pengeluaran finansial. Fitur-fitur utama yang disediakan meliputi:

1. **Upload Category** → Memfasilitasi pembuatan banyak kategori sekaligus (impor massal) menggunakan berkas Excel.
2. **Refresh** → Menyegarkan data pada tabel tanpa mereset status filter yang sedang aktif.
3. **Add Category** → Menambahkan entitas kategori baru secara individual.
4. **Update Category** → Menyunting detail kategori yang telah terdaftar.
5. **Delete Category** → Menghapus kategori yang tidak lagi relevan dari sistem.

## Impor Kategori (Upload Category)

1. Klik tombol **Upload Category**, kemudian akan muncul jendela dialog (*modal*) seperti berikut:
    
    ![image.png](/assets/finance-guide/image%204.png)
    
2. Silakan unduh templat Excel yang disediakan. Tata cara pengisian matriks data pada Excel adalah sebagai berikut:
    
    ![image.png](/assets/finance-guide/image%205.png)
    
    Sistem saat ini mendistribusikan Tipe Kategori (*Category Type*) ke dalam lima klasifikasi standar:
    
    *   INCOME (Pendapatan)
    *   SAVING (Tabungan / Investasi)
    *   EXPENSE (Pengeluaran Biasa)
    *   BILLS (Tagihan Rutin)
    *   DEBT (Hutang / Kewajiban)

3. Tekan opsi pemilihan berkas dan lampirkan dokumen Excel Anda.
    
    ![image.png](/assets/finance-guide/image%206.png)
    
4. Tekan tombol **Upload**. Hasil pemrosesan data akan dikonfirmasi melalui jendela laporan dan langsung diaplikasikan ke dalam basis data tabel kategori.
    
    ![image.png](/assets/finance-guide/image%207.png)
    
    ![image.png](/assets/finance-guide/image%208.png)
    

## Menambah Kategori Baru (Add Category)

Untuk menginput data secara manual:

1. Klik tombol **Add Category**.
2. Masukkan deskripsi pada kolom **Name**.
3. Tentukan klasifikasinya pada opsi **Type**.
4. Klik **Create** untuk menyimpan.

![image.png](/assets/finance-guide/image%209.png)

![image.png](/assets/finance-guide/image%2010.png)

## Memperbarui Kategori (Edit Category)

Langkah-langkah untuk merevisi kategori:

1. Klik ikon *Edit* (Ubah) pada baris data terkait.
2. Lakukan modifikasi pada kolom **Name** dan/atau **Type**.
3. Konfirmasi perubahan dengan menekan tombol **Update**.

![image.png](/assets/finance-guide/image%2011.png)

## Menghapus Kategori (Delete Category)

Langkah-langkah penghapusan data:

1. Identifikasi kategori yang ingin dieliminasi.
2. Klik ikon *Delete* (Hapus).
3. Setujui konfirmasi penghapusan sistem untuk menindaklanjuti aksi tersebut.

![image.png](/assets/finance-guide/image%2012.png)

---

<a id="wallets"></a>
# 4. Manajemen Dompet (Wallets)

![image.png](/assets/finance-guide/image%2013.png)

Halaman *Wallets* menampilkan portofolio aset likuid Anda. Menu ini dilengkapi dengan tombol *Refresh*, prosedur *Add Wallet*, serta personalisasi antarmuka dalam bentuk kartu (*Cards*) atau kompilasi tabel (*Tables*). Panel atas juga akan mengakumulasikan seluruh kekayaan bersih Anda (*Total Net Worth*).

Tujuan operasional dari modul Wallets:

1. Memberikan representasi visual terhadap likuiditas finansial Anda di lintas klasifikasi aliran dana.
2. Sentralisasi dana pada satu sumber dompet tidak direkomendasikan untuk akuntabilitas. Sistem mengevaluasi pembukuan melalui deduksi dan penambahan saldo berdasarkan spesifikasi tipologi dompet masing-masing.
3. Anda diwajibkan untuk mengadakan pemisahan dompet penerimaan dana (pemasukan) dan wadah operasional pengeluaran. Hal ini mendasari penyaluran dana yang dapat dikoordinasikan kelak melalui modul **Transactions**.

## Menambahkan Dompet Baru (Add Wallet)

![image.png](/assets/finance-guide/image%2014.png)

Melalui jendela dialog *Add Wallet*:

1. Input nomenklatur dompet (contoh: "Rekening Mandiri", "Gopay", "Kas Tunai").
2. Definisikan **Type** dompet terkait.
3. Isikan nilai pembukaan saldo pada **Amount** (validasi silang dengan saldo aktual perbankan/tunai demi menjaga keakuratan).
4. Tentukan **Status** operasional (aktif secara *default*, namun dapat dinonaktifkan di kemudian hari).

## Memperbarui Konfigurasi Dompet (Edit Wallet)

![image.png](/assets/finance-guide/image%2015.png)

Modifikasi komponen berikut disediakan oleh fitur *Edit*:

1. Nomenklatur dompet
2. Tipe operasional dompet
3. Penyesuaian batas saldo empiris
4. Status keberlakuan dompet

## Menghapus Dompet (Delete Wallet)

![image.png](/assets/finance-guide/image%2016.png)

Tersedia mekanisme *Delete Wallet*. Diperlukan kehati-hatian tingkat tinggi oleh pengguna sebelum melakukan proses ini, menimbang probabilitas keberadaan histori transaksi historis yang terikat mutlak pada wadah aset operasional terkait.

---

<a id="budget"></a>
# 5. Anggaran & Perencanaan (Budget & Plan)

![image.png](/assets/finance-guide/image%2017.png)

Selamat datang pada modul **Budget & Plan**! Fasilitas ini didelegasikan untuk mengatur garis pedoman perencanaan agregasi dana Anda. Praktik pendisiplinan finansial fundamental diawali dengan alokasi target yang terukur dan realistis.

Sebelum melangkah lebih jauh, pahami taksonomi konsep berikut ini:

### A. Payday (Siklus Penggajian)

**Payday** merepresentasikan titik mula dari siklus pembukuan bulanan Anda. Metrik tanggal ini sebaiknya dialokasikan secara simultan bersamaan dengan jadwal konvensional penerimaan basis upah/kompensasi dari instansi terkait.
*Sebagai ilustrasi: Jika ritme penggajian Anda ditetapkan setiap tanggal 25, maka konfigurasikan Payday pada tanggal 25. Siklus kalender akan secara pro-aktif dikalkulasi sejak tanggal acuan tersebut.*

### B. Finance Strategy (Strategi Finansial) - *Tahap Pengembangan* 

Pada iterasi mendatang, modul ini akan terintegrasi kuat dengan elemen analitika tingkat mahir berbasis *Artificial Intelligence* (Kecerdasan Buatan) yang secara otonom akan mengevaluasi portofolio Anda. Terknologi ini mendemonstrasikan fungsionalitas sebagai *Virtual Financial Advisor* untuk menyajikan proyeksi matematis efisiensi penghematan maupun mitigasi deviasi beban konsumsi berlebih.

### C. Budget Plan (Perumusan Rencana Anggaran)

Fitur ini melayani fungsi sentral manajemen, mengukuhkan peruntukan rancangan plafon pada proporsi distribusi masing-masing Entri Kategori.
*Model Skenario:*
- Bagi klasifikasi Kategori **Konsumsi/Logistik**, Anda diizinkan untuk mendeklarasikan platform batas atas komulatif ekuivalensial pengeluaran per bulan.
- Bagi klasifikasi **Alokasi Tabungan**, Anda memproyeksikan target minimum bulanan yang dituju guna menjamin stabilnya instrumen jaminan aset dana cair simpanan jangka panjang/darurat.

---

### Prosedur Implementasi Fitur

Pedoman sistematis untuk menerapkan prosedur target manajemen sasaran:

### 1. Update Plan (Pembaruan Rencana Siklus Utama)

Menentukan siklus referensi mutasi data:

1. Akses modul navigasi **Dashboard > Plan**.
2. Restrukturisasi **tanggal Payday** menyesuaikan momentum interval hari konsolidasi penerimaan kas Anda.
3. Tekan persetujuan **Simpan (Save)** untuk merestui perpindahan validasi hari. Laporan perhitungan kompilasi bulanan akan secara otomatis terkalibrasi menuju ritme siklus bulan sinkron.

![image.png](/assets/finance-guide/image%2018.png)

### 2. Administrasi Anggaran Induk (CRUD)

Platform ini mengusung kapabilitas kontrol dan revisi (*Create, Read, Update, Delete*) mutlak terhadap skenario rancangan portofolio berjenis *Income, Expense, Saving, Bills,* dan *Debt*.

#### A. Konstruksi Rencana Anggaran Baru (Create)

1. Menuju indeks modul tabulasi klasifikasi finansial (*Expense,* dll).
2. Tekan tombol fungsi **Add Budget** (simbolisasi `+`).
3. Spesifikkan subyektifitas kompartemen direktori pada parameter **Kategori** yang relevan dan terkualifikasi (misalnya klasifikasi "Bahan Bakar" via kluster administrasi operasional aset kendaraan).
4. Isikan limit batasan referensi absolut pada indeks masukan **Ekspektasi Nominal**.
5. Validasi final dengan perintah ketukan **Simpan**.

![image.png](/assets/finance-guide/image%2019.png)

![image.png](/assets/finance-guide/image%2020.png)

#### B. Tinjauan Hasil Penganggaran (Read)

- Detail instrumentasi skenario yang terotorisasi seketika dirender secara deskriptif linear pada rincian direktori tabulasi subyektif Anda.
- Ekosistem ini turut membekali fitur indikator visual progrese pencapaian nilai metrik komposit (Ketercapaian pemenuhan realisasi di atas ekspektasi target pendanaan perihal sektor aset *Income / Saving*,  sampai sejauh rasio kuota dana menyusut yang diperbolehkan tereksekusi pada sektor penanggungan obligasi liabilitas / *Expense*).*

![image.png](/assets/finance-guide/image%2021.png)

#### C. Modifikasi Kalibrasi Rencana Anggaran (Update)

1. Sortir elemen entri ekspektasi klasifikasi data target.
2. Seleksi sub-rutin fungsi aksi penyuntingan parameter yang identik (*Edit*).
3. Modulasi revisi parameter besaran nilai plafon metrik **Nominal Ekspektasi** atas fluktuasi ketidakpastian indikator konsumsi di luar perkiraan awal yang dirumuskan faktual.
4. Setujui integrasi sistem dengan validasi tekan penguatan **Simpan**.

![image.png](/assets/finance-guide/image%2022.png)

![image.png](/assets/finance-guide/image%2023.png)

#### D. Penarikan Konsolidasi Anggaran Sasaran (Delete)

1. Verifikasi parameter limitasi proyeksi rencana yang disinyalir mengalami redundansi operasional fungsional referensi mutakhir.
2. Inisiasi resolusi pembatalan aksi penanggungan (*Delete / Hapus*).
3. Sepakati deklarasi notifikasi dialog terminasi sekuriti pada browser verifikatif antarmuka administratif ini.
*(Reduksi maupun pembatalan kerangka subpemerintahan struktur anggaran target tak akan memanipulasi, mencederai histori kredibilitas rincian rekaman transaksi entri jurnal akuntansi basis data Anda).*

![image.png](/assets/finance-guide/image%2024.png)

![image.png](/assets/finance-guide/image%2025.png)

---

<a id="transaksi"></a>
# 6. Manajemen Transaksi (Transactions)

![image.png](/assets/finance-guide/image%2026.png)

Halaman ini berfungsi sebagai operasional mutlak (*command & coordination center*) untuk proses input, sinkronisasi, konsolidasi harian pada catatan neraca, serta pengelolaan mobilitas aktivitas rekam aliran modal. Penjabaran kelengkapan tata kelola submodul:

---

## 1. Agregasi Dashboard Pelaporan Keuangan Dasar (Total Income, Expense, dan Net Ratio Ekuitas)

Pada baris paling atas bidang interaktif, pengguna tersaji visual panel komparatif informasional terkait komparasi parameter kinerja finansial yang tengah divalidasi selama parameter referensi sirkulasi waktu filter fungsional bersangkutan bekerja:

- **Total Income (Agregat Total Rasio Akuisisi/Penerimaan Modal Positif):**
Keseluruhan konvergensi saldo kompensasi pemasukan atau insentif yang tersentralisasi dan mengendap dalam buku besar likuiditas (*Inflows*). Ini mentransfer bentuk uang baru semisal ganti rugi restitusi asuransi, transfer honorarium insentif karyawan reguler instansi perseroan, apresiasi nilai profitabilitas hasil dividen sekuritas entitas pialang dagang.
- **Total Expense (Akumulasi Arus Kas Debit Negatif Beban Belanja Operasional Tersier Maupun Kewajiban Primer Rutin):**
Nilai kuantifikasi pemenuhan kompensasi pengeluaran riil eksternal terdefinisikan yang murni terejawantahkan / memakan cadangan likuiditas simpanan kas harian untuk aktivitas utilitas subsisting komersil harian pascapembelian, tagihan operasional instalasi, cicilan hutang dan penalti amortisasi penyusutan (*Outflows*).
- **Net (Deviasi Representatif Posisi Rasio Keseimbangan Neraca Nilai Bersih Positif Minus):**
Selisih marjinal matematis diferensiasi silang (*cross-referencing*) hasil akhir konversi Total Pendapatan vs Nilai Konsumsi Absolut Pengeluaran operasional di akhir kalkulasi kalkulator aritmatik neraca. 
*Mekanologi Standar:* Jumlah Akresi Dana Arus Masuk (*Credit*) - Besaran Alokasi Pembelanjaan Dana Arus Keluar (*Debit*).
    - Realisasi ekuivalen saldo menunjukkan polaritas valuta **Positif (+)** mengindikasikan status kualifikasi pembukuan kesehatan komputasi entitas ini bersifat Surplus Keuangan yang ideal untuk investasi baru. 
    - Apabila sebaliknya terjerembab pada limit termin **Negatif (-)** mengartikulasikan bahwa pengkreditan neraca liabilitas (beban pengeluaran) gagal menutupi subsidi plafon kompensasi gaji sehingga Anda dalam kondisi Defisit Liquiditas Ekuitas Anggaran kritis (secara semantik sederhana "Kewajiban Pengambilan Beban Berlebihan / Besar Pasak Daripada Tiang").

![image.png](/assets/finance-guide/image%2027.png)

## 2. Tabel Operasi Utilitas Eksekusi Tindakan Transaksional (Action Console Buttons)

Halaman mutasi konsolidasi menyuguhkan kumpulan kapabilitas operasional makro efisiensi produktivitas integrasi pembukuan melalui tiga perangkat fungsi dominan:

### A. Sinkronisasi Antarmuka Platform Refleksif ("Refresh")

Otoritas paksa yang bertindak melakukan kueri (*fetch trigger*) panggilan siklus validasi konfirmasi (*re-sync routine procedure*) pemanggilan basis data termutakhir pada platform multi-interaksi jika transaksi simultan tercatat menyebar secara bersamaan tanpa relokasi koneksi internal aplikasi pada antarmuka *session runtime* perangkat administratif terkini Anda untuk menjamin simetrisasi realita akuntansi pembukuan tidak memicu insiden pelaporan yang *out of date*.

### B. Otentikasi Rekonsiliasi Distribusi Perpindahan Aset Virtual ("Transfer Between Wallets")

Manajemen modul intermediasi khusus perpindahan mutasi ini **sangat dilarang** diproyeksikan mewakili penambahan atau penarikan agregat riil keuangan ekuitas murni penggunanya; melainkan secara fungsional difokuskan terbatas dalam prosedur perpindahan lokasi kompartemen penyimpanan cadangan saldo belaka di ruang penyimpanan.

> *Ilustrasi Proyeksi Keuangan:* Mentransfer ekuilibrasi pemindahan alokasi jumlah deposito valas *Cash Withdraw* sebesar Rp1.000.000,00 dari kluster institusi platform perbankan resmi menjadi aset penyetoran top up di kompartemen uang cadangan komersial reksadana atau sebaliknya transfer tunai fisik perbankan menuju akun reservasi dompet komersial berbasis virtual *e-wallet* untuk fleksibilitas pembayaran digital.

![image.png](/assets/finance-guide/image%2028.png)

![image.png](/assets/finance-guide/image%2029.png)

### C. Pembukuan Rekam Log Eksekusi Jurnal Kas Tunggal Terpisah ("Add Transaction")

Merupakan sumbu kendali pencatatan log historis jurnal entri transaksional individual sehari-hari esensial primer yang mencatatkan segala bentuk mutasi penambahan tunjangan (*Inflows*) dan alokasi obligasi debit defisit yang dideduksi langsung terhitung presisi mikroskopik (*Outflows*) atas seluruh klasifikasi aset penyetoran pada berbagai dompet terpusat Anda. Kebenaran validitas rincian transaksi Anda dalam prosedur harian bertalian lekat akan validasi kualitas penyusunan *Business Intelligence* proyeksi estimasi analitikal di akhir kurva interval termin perhitungan kuartal pelaporan tutup buku secara sistematis holistik!

![image.png](/assets/finance-guide/image%2030.png)

![image.png](/assets/finance-guide/image%2031.png)

### E. Integrasi Pengunduhan Jurnal Basis Data Berurutan Masif Secara Otomatis Integratif ("Import New Data Batch Sequence")

Penetrasi skema utilitas fungsi logistik ekosistem khusus penyerapan arsip ekstensif riwayat transaksi masif ribuan baris barisan terekstraksi seketika dalam wujud enkapsulan pelaporan (*Bulk Integration*). Peruntukan utilitas perangkat modul mutakhir transisi data berskala eksponensial dianjurkan saat mengekspor *Spreadsheet Billing Period Mutasi Rekening Bank Konvensional Bulanan Secara Riil*, untuk diperasikan, lalu disemai sekaligus terekam seketika masuk otomatis demi kepastian mitigasi kelumpuhan inefisiensi pengerjaan produktivitas pencatatan baris pembukuan *Add Transaction* konservatif, efisien, rapi tanpa manipulasi entri rekam jejak manusia.

![image.png](/assets/finance-guide/image%2032.png)

![image.png](/assets/finance-guide/image%2033.png)

![image.png](/assets/finance-guide/image%2034.png)