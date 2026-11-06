import { cari } from './state.js';

export function renderTampilan(kataCari = '') {
  const sematan = document.getElementById('sematan');
  const semuaDOM = document.getElementById('semua');
  const info = document.getElementById('info');
  
  sematan.innerHTML = '';
  semuaDOM.innerHTML = '';
  
  const hasil = cari(kataCari);
  let jumlahSemat = 0;
  
  for (let j = 0; j < hasil.length; j++) {
    const c = hasil[j];
    const htmlKartu = `
      <div class="kartu">
        <small>${c.mk}</small>
        <h3>${c.judul}</h3>
        <small>${new Date(c.dibuat).toLocaleDateString('id-ID')}</small>
        <div class="aksi">
          <button data-aksi="semat" data-id="${c.id}">${c.disematkan ? 'Lepas' : 'Sematkan'}</button>
          <button data-aksi="hapus" data-id="${c.id}">Hapus</button>
        </div>
      </div>`;
      
    if (c.disematkan) {
      jumlahSemat++;
      sematan.innerHTML += htmlKartu;
    }
    semuaDOM.innerHTML += htmlKartu;
  }
  
  if (jumlahSemat === 0) sematan.innerHTML = '<p class="kosong">Belum ada catatan yang disematkan.</p>';
  if (hasil.length === 0) semuaDOM.innerHTML = '<p class="kosong">Tidak ada catatan.</p>';
  
  info.textContent = `${hasil.length} catatan, ${jumlahSemat} disematkan`;
}