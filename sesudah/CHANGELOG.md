# Changelog — Catatan Kuliah

## [1.2.0] - 2026-11-14
### Added
- Komponen kartu catatan reusable (`KartuCatatan`) di `src/komponen.js` dengan proteksi `textContent` untuk mencegah injeksi kode/tag HTML dari pengguna.
- Penyimpanan aman berversi `catatan-kuliah:v1` di `src/storage.js` yang dilengkapi penanganan error `try/catch` sehingga tidak pernah melempar galat saat data rusak.
- Dukungan migrasi data lama secara otomatis (Level 2)[cite: 1].

## [1.1.0] - 2026-10-xx
### Changed
- Memecah aplikasi monolit `app.js` menjadi arsitektur berbasis ES Modules terstruktur (`main.js`, `state.js`, `storage.js`, `ui.js`)[cite: 13].

## [1.0.0] - 2026-10-xx
### Added
- Rilis awal aplikasi monolit catatan kuliah.
```[cite: 1]

---

### Langkah Selanjutnya untuk Menyelesaikan Tugas P12:
1. Buat file **`CHANGELOG.md`** di direktori latihan Anda, lalu tempel (*paste*) teks di atas dan simpan[cite: 1].
2. Lakukan *commit* dan *push* perubahan ini ke GitHub:
   ```bash
   git add CHANGELOG.md
   git commit -m "docs: tambahkan changelog latihan p12"
   git push origin main