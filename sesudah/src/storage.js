// src/storage.js
export const KUNCI = 'catatan-kuliah:v1';

export function simpan(data) {
  try {
    localStorage.setItem(KUNCI, JSON.stringify(data));
  } catch (err) {
    console.warn('Penyimpanan gagal dilakukan:', err);
  }
}

export function muat() {
  try {
    const dataMentah = localStorage.getItem(KUNCI);
    
    if (!dataMentah) {
      const dataLama = localStorage.getItem('catatan-kuliah');
      if (dataLama) {
        const parsedLama = JSON.parse(dataLama);
        if (Array.isArray(parsedLama)) {
          simpan(parsedLama);
          localStorage.removeItem('catatan-kuliah');
          return parsedLama.filter(c => c && typeof c === 'object' && typeof c.judul === 'string');
        }
      }
      return [];
    }

    const parsed = JSON.parse(dataMentah);
    if (!Array.isArray(parsed)) return [];
    
    return parsed.filter(catatan => 
      catatan !== null && 
      typeof catatan === 'object' && 
      typeof catatan.judul === 'string'
    );
  } catch (err) {
    return [];
  }
}