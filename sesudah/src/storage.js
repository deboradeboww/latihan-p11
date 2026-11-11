// src/storage.js
export const KUNCI = 'catatan-kuliah:v1';

export function simpanLokal(data) {
  try {
    localStorage.setItem(KUNCI, JSON.stringify(data));
  } catch (err) {
    // Menangkap galat jika penyimpanan penuh (QuotaExceededError) atau diblokir (SecurityError)
    console.warn('Penyimpanan gagal dilakukan:', err);
  }
}

export function muatLokal() {
  try {
    const dataMentah = localStorage.getItem(KUNCI);
    
    // Level 2 (Opsional): Migrasi otomatis dari kunci lama jika kunci baru belum ada
    if (!dataMentah) {
      const dataLama = localStorage.getItem('catatan-kuliah');
      if (dataLama) {
        const parsedLama = JSON.parse(dataLama);
        if (Array.isArray(parsedLama)) {
          simpanLokal(parsedLama);
          localStorage.removeItem('catatan-kuliah'); // Hapus kunci lama setelah dimigrasi
          return parsedLama.filter(c => c && typeof c === 'object' && typeof c.judul === 'string');
        }
      }
      return [];
    }

    const parsed = JSON.parse(dataMentah);
    
    // Pastikan data berupa array dan saring item yang sah (judul berupa string)
    if (!Array.isArray(parsed)) return [];
    
    return parsed.filter(catatan => 
      catatan !== null && 
      typeof catatan === 'object' && 
      typeof catatan.judul === 'string'
    );
  } catch (err) {
    // Jika data JSON rusak, kembalikan array kosong agar aplikasi tidak mati/crash
    return [];
  }
}