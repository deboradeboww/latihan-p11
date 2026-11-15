# Changelog — Catatan Kuliah

Format didasarkan pada [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.2.0] - 2026-11-15

### Ditambahkan
- Komponen reusable `KartuCatatan(catatan)` di `src/komponen.js`; teks pengguna dimasukkan lewat `textContent`.
- Penyimpanan aman di `src/storage.js`: kunci berversi `catatan-kuliah:v1`, `muat()` yang tidak pernah melempar galat dan hanya mengembalikan catatan sah, serta `simpan()` dengan `try/catch`.
- Migrasi sekali jalan dari kunci lama `catatan-kuliah` ke kunci baru, lalu kunci lama dihapus.
- Berkas pemeriksa `uji/uji-tangguh.html` dan `uji/uji-tangguh.js` (tidak diubah).

### Diubah
- `ui.js` memakai `KartuCatatan` untuk daftar Disematkan dan Semua catatan.
- Fungsi storage dinamai `muat` dan `simpan` sesuai kontrak pemeriksa, dan `state.js` memakainya.

### Diperbaiki
- Aplikasi tidak lagi mati saat isi `catatan-kuliah:v1` rusak.
- Judul seperti `<b>tebal</b>` tampil sebagai teks, bukan dibaca sebagai HTML.

## [1.1.0] - 2026-11-06

### Diubah
- Aplikasi monolit dipecah menjadi ES Modules di folder `src/`: [cek nama modulnya, mis. `main.js`, `state.js`, `storage.js`, `ui.js`].

## [1.0.0] - 2026-11-06

### Ditambahkan
- Rilis awal aplikasi Catatan Kuliah dalam satu berkas (monolit).