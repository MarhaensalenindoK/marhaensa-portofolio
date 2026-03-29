# User Guide - Komara Adventure

# 📚 User Guide - Admin Panel Komara Adventure

> Panduan Lengkap Penggunaan Dashboard Admin
> 
> 
> Version: 1.0 | Last Updated: July 2025
> 

---

## 📖 Daftar Isi

1. Login & Dashboard
2. Manajemen Kategori
3. Manajemen Paket
4. Manajemen Galeri
5. Manajemen Blog
6. Tips & Troubleshooting

---

## 🔐 Login & Dashboard

### Login ke Admin Panel

1. **Akses Halaman Login**
    - Buka browser dan akses: `https://company-profile-demo.komara.id/login`
    - Atau klik link admin di footer website (tanda #)
2. **Masukkan Kredensial**
    - **Email**: admindemo@komaraadventure.com
    - **Password**: 1
    - Klik tombol **"Log in"**

> 💡 Tips: Pastikan menggunakan koneksi internet yang stabil dan browser yang update
> 

![image.png](/assets/jeep-guide/image.png)

### Dashboard Overview

Setelah login berhasil, Anda akan masuk ke dashboard utama yang menampilkan:

- **📊 Statistics Cards**: Total kategori, paket, galeri, dan blog
- **📈 Recent Activities**: Aktivitas terbaru
- **🎯 Quick Actions**: Tombol cepat untuk membuat konten baru

![image.png](/assets/jeep-guide/image%201.png)

---

## 📂 Manajemen Kategori

### Melihat Daftar Kategori

1. **Navigasi ke Kategori**
    - Di sidebar, klik **"Categories"**
    - Halaman akan menampilkan daftar semua kategori
2. **Fitur di Halaman Index**
    - **Search**: Cari kategori berdasarkan nama
    - **Filter**: Filter berdasarkan status
    - **Sort**: Urutkan berdasarkan nama atau tanggal

![image.png](/assets/jeep-guide/image%202.png)

### Membuat Kategori Baru

1. **Klik Tombol "Create Category"**
    - Tombol hijau di pojok kanan atas
2. **Isi Form Kategori**
    - **Name** *(required)*: Nama kategori (contoh: "Adventure", "Family Trip")
    - **Description** *(optional)*: Deskripsi kategori
    - **Status**: Active/Inactive
3. **Validasi Form**
    - Nama kategori harus diisi
    - Nama kategori harus unik (tidak boleh sama)
    - Maksimal 255 karakter
4. **Simpan Kategori**
    - Klik **"Create Category"** untuk menyimpan
    - Akan muncul notifikasi sukses

![image.png](/assets/jeep-guide/image%203.png)

### Edit Kategori

1. **Pilih Kategori**
    - Di halaman index, klik tombol **"Edit"** pada kategori yang ingin diubah
2. **Update Data**
    - Ubah nama, deskripsi, atau status sesuai kebutuhan
    - Klik **"Update Category"** untuk menyimpan

![image.png](/assets/jeep-guide/image%204.png)

### Hapus Kategori

1. **Klik Tombol Delete**
    - Di halaman index, klik tombol merah **"Delete"**
2. **Konfirmasi Penghapusan**
    - Akan muncul dialog konfirmasi
    - Klik **"Ya, Hapus"** untuk melanjutkan

> ⚠️ Perhatian: Kategori yang sudah memiliki paket tidak dapat dihapus. Hapus atau pindahkan paket terlebih dahulu.
> 

![image.png](/assets/jeep-guide/image%205.png)

---

## 📦 Manajemen Paket

### Melihat Daftar Paket

1. **Navigasi ke Paket**
    - Di sidebar, klik **"Packages"**
2. **Fitur Filter & Pencarian**
    - **Search**: Cari berdasarkan nama paket
    - **Filter Kategori**: Dropdown pilihan kategori
    - **Filter Harga**: Range harga minimum dan maksimum
    - **Quick Filters**: Semua, Aktif, Tidak Aktif

![image.png](/assets/jeep-guide/image%206.png)

### Membuat Paket Baru

1. **Klik "Create Package"**
    - Tombol hijau di pojok kanan atas
2. **Isi Informasi Dasar**
    - **Name** *(required)*: Nama paket wisata
    - **Category** *(required)*: Pilih dari dropdown kategori
    - **Duration**: Durasi paket (contoh: "1 Hari", "2 Hari 1 Malam")
    - **Max Participants**: Maksimal peserta
3. **Isi Harga Paket**
    - **Price (Rupiah)**: Input manual dalam format Rupiah
    - **Price (Numeric)**: Input otomatis terisi saat mengetik di field Rupiah
    - Validasi: Harga harus lebih dari 0
4. **Deskripsi Lengkap**
    - **Description**: Gunakan CKEditor untuk formatting rich text
    - Bisa menambahkan bullet points, bold, italic, dll.
5. **Status Paket**
    - **Active**: Paket tampil di website
    - **Inactive**: Paket disembunyikan dari website
6. **Simpan Paket**
    - Klik **"Create Package"**
    - Validasi akan berjalan otomatis

![image.png](/assets/jeep-guide/image%207.png)

![image.png](/assets/jeep-guide/image%208.png)

### Edit Paket

1. **Pilih Paket**
    - Di halaman index, klik **"Edit"** pada paket yang diinginkan
2. **Update Informasi**
    - Semua field dapat diubah
    - Format harga akan otomatis ter-format
3. **Simpan Perubahan**
    - Klik **"Update Package"**

![image.png](/assets/jeep-guide/image%209.png)

### Detail Paket

1. **Klik "View" atau nama paket**
    - Menampilkan detail lengkap paket
2. **Informasi yang Ditampilkan**
    - Semua data paket
    - Galeri foto terkait (jika ada)
    - Log aktivitas paket

![image.png](/assets/jeep-guide/image%2010.png)

---

## 🖼️ Manajemen Galeri

### Melihat Galeri

1. **Navigasi ke Galeri**
    - Di sidebar, klik **"Galleries"**
2. **Tampilan Grid**
    - Foto ditampilkan dalam bentuk grid
    - Thumbnail dengan informasi dasar
3. **Fitur Filter**
    - **Filter Paket**: Dropdown paket wisata
    - **Search**: Cari berdasarkan judul atau alt text
    - **Reset Filter**: Tombol reset (muncul saat filter aktif)

![image.png](/assets/jeep-guide/image%2011.png)

### Upload Foto Baru

1. **Klik "Add New Photo"**
    - Tombol hijau di pojok kanan atas
2. **Upload File**
    - **Image**: Klik area upload atau drag & drop
    - Format yang didukung: JPG, PNG, GIF
    - Ukuran maksimal: 2MB
3. **Isi Informasi Foto**
    - **Title** *(required)*: Judul foto
    - **Alt Text**: Teks alternatif untuk SEO dan accessibility
    - **Package**: Pilih paket terkait (optional)
4. **Preview Foto**
    - Foto akan langsung ter-preview setelah upload
    - Bisa klik **"Preview"** untuk melihat ukuran penuh
5. **Simpan Foto**
    - Klik **"Upload Photo"**

![image.png](/assets/jeep-guide/image%2012.png)

![image.png](/assets/jeep-guide/image%2013.png)

### Edit Foto Galeri

1. **Pilih Foto**
    - Klik **"Edit"** pada foto yang ingin diubah
2. **Update Informasi**
    - Ubah title, alt text, atau paket terkait
    - **Tidak bisa mengganti file foto** (harus upload ulang)
3. **Simpan Perubahan**
    - Klik **"Update Photo"**

![image.png](/assets/jeep-guide/image%2014.png)

### Preview & Detail Foto

1. **Klik "View" atau thumbnail foto**
    - Menampilkan foto dalam ukuran penuh
2. **Modal Preview**
    - Navigation untuk foto sebelum/sesudah
    - Informasi detail foto
    - Tombol **"View Fullscreen"**

![image.png](/assets/jeep-guide/image%2015.png)

---

## 📝 Manajemen Blog

### Melihat Daftar Blog

1. **Navigasi ke Blog**
    - Di sidebar, klik **"Blog Posts"** atau **"Posts"**
2. **Tampilan Tabel**
    - Judul, status, tanggal publikasi
    - Kolom aksi (View, Edit, Delete)
3. **Fitur Filter**
    - **Search**: Cari berdasarkan judul atau konten
    - **Filter Status**: Semua, Published, Draft
    - **Reset Filter**: Muncul saat filter aktif

![image.png](/assets/jeep-guide/image%2016.png)

### Membuat Post Blog Baru

1. **Klik "Create Post"**
    - Tombol hijau di pojok kanan atas
2. **Isi Informasi Post**
    - **Title** *(required)*: Judul artikel blog
    - **Slug**: URL-friendly version judul (auto-generate)
    - **Excerpt**: Ringkasan artikel untuk preview
3. **Konten Artikel**
    - **Content**: Gunakan CKEditor untuk konten lengkap
    - Fitur formatting: Bold, Italic, Lists, Links, dll.
4. **Featured Image**
    - **Upload Image**: Foto utama artikel
    - **Preview**: Lihat preview foto setelah upload
5. **SEO & Metadata**
    - **Meta Description**: Deskripsi untuk SEO
    - **Status**: Published/Draft
6. **Simpan Post**
    - **Save as Draft**: Simpan sebagai draft
    - **Publish**: Langsung publikasikan

![image.png](/assets/jeep-guide/image%2017.png)

![image.png](/assets/jeep-guide/image%2018.png)

![image.png](/assets/jeep-guide/image%2019.png)

### Edit Post Blog

1. **Pilih Post**
    - Di halaman index, klik **"Edit"** pada post yang diinginkan
2. **Update Konten**
    - Semua field dapat diubah
    - Featured image bisa diganti dengan upload baru
3. **Simpan Perubahan**
    - **Update**: Simpan perubahan
    - **Publish/Unpublish**: Ubah status publikasi

![image.png](/assets/jeep-guide/image%2020.png)

### Preview & Detail Post

1. **Klik "View" atau judul post**
    - Menampilkan post seperti di website
2. **Informasi Detail**
    - Konten lengkap dengan formatting
    - Featured image
    - Metadata dan informasi SEO

![image.png](/assets/jeep-guide/image%2021.png)

---

## — OPSIONAL:

🛠️ Tips & Troubleshooting

### Tips Penggunaan

### 📸 **Untuk Galeri:**

- Gunakan foto berkualitas tinggi (minimal 1200px lebar)
- Isi alt text untuk SEO yang lebih baik
- Kelompokkan foto berdasarkan paket wisata
- Nama file foto sebaiknya deskriptif

### 📦 **Untuk Paket:**

- Gunakan deskripsi yang detail dan menarik
- Format harga akan otomatis ter-format dengan benar
- Pastikan kategori sudah dibuat sebelum membuat paket
- Gunakan CKEditor untuk formatting yang menarik

### 📝 **Untuk Blog:**

- Tulis excerpt yang menarik untuk preview
- Gunakan featured image yang relevan dan menarik
- SEO meta description maksimal 160 karakter
- Publish secara konsisten untuk engagement yang lebih baik

### Troubleshooting

### 🔧 **Masalah Umum:**

**Upload Foto Gagal**

- Cek ukuran file (maksimal 2MB)
- Pastikan format yang didukung (JPG, PNG, GIF)
- Refresh browser dan coba lagi

**CKEditor Tidak Load**

- Refresh halaman
- Clear cache browser
- Pastikan koneksi internet stabil

**Form Tidak Tersimpan**

- Cek koneksi internet
- Pastikan semua field required terisi
- Lihat pesan error yang muncul

**Filter Tidak Berfungsi**

- Refresh halaman
- Clear cache browser
- Coba reset filter dan terapkan ulang

### 📞 **Bantuan Teknis:**

- Hubungi developer jika masalah berlanjut
- Sertakan screenshot error untuk diagnosis yang lebih cepat
- Catat langkah-langkah yang menyebabkan error

---

## 🎯 Quick Reference

### Best Practices

- ✅ Backup data secara berkala
- ✅ Gunakan nama file yang deskriptif
- ✅ Isi semua field SEO untuk visibilitas yang lebih baik
- ✅ Preview sebelum publish
- ✅ Gunakan gambar berkualitas tinggi

### Status Codes

- 🟢 **Active/Published**: Konten tampil di website
- 🟡 **Draft**: Konten disimpan tapi belum publish
- 🔴 **Inactive**: Konten disembunyikan dari website

---

> 💡 Need Help?
> 
> 
> Panduan ini mencakup penggunaan dasar admin panel. Untuk fitur advanced atau customization, hubungi developer team.
> 

**Version**: 1.0

**Created for**: Komara Adventure Admin Panel