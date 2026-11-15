# Changelog — Catatan Kuliah

Format didasarkan pada [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.2.0] - 2026-11-15

### Ditambahkan
- Komponen reusable `KartuCatatan(catatan)` di `sesudah/src/komponen.js`; teks pengguna dimasukkan lewat `textContent`.
- Penyimpanan aman di `sesudah/src/storage.js`: kunci berversi `catatan-kuliah:v1`, `muat()` yang tidak pernah melempar galat dan hanya mengembalikan catatan sah, serta `simpan()` dengan `try/catch`.
- Migrasi sekali jalan dari kunci lama `catatan-kuliah` ke kunci baru, lalu kunci lama dihapus.
- Berkas pemeriksa `sesudah/uji/uji-tangguh.html` dan `sesudah/uji/uji-tangguh.js` (tidak diubah).

### Diubah
- `ui.js` memakai `KartuCatatan` untuk daftar Disematkan dan Semua catatan.
- Fungsi storage dinamai `muat` dan `simpan` sesuai kontrak pemeriksa, dan `state.js` memakainya.

### Diperbaiki
- Aplikasi tidak lagi mati saat isi `catatan-kuliah:v1` rusak.
- Judul seperti `<b>tebal</b>` tampil sebagai teks, bukan dibaca sebagai HTML.

## [1.1.0] - 2026-11-06

### Diubah
- Aplikasi monolit (`sebelum/app.js`) dipecah menjadi ES Modules di folder `sesudah/src/`: `main.js`, `state.js`, `storage.js`, dan `ui.js`.

## [1.0.0] - 2026-11-06

### Ditambahkan
- Rilis awal aplikasi Catatan Kuliah dalam satu berkas script (monolit) di `sebelum/app.js`.