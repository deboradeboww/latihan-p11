// src/ui.js
import { cari } from './state.js';
import { KartuCatatan } from './komponen.js';

export function renderTampilan(kataCari = '') {
  const sematan = document.getElementById('sematan');
  const semuaDOM = document.getElementById('semua');
  const info = document.getElementById('info');
  
  sematan.replaceChildren();
  semuaDOM.replaceChildren();
  
  const hasil = cari(kataCari);
  let jumlahSemat = 0;
  
  const elemenSematanBaru = [];
  const elemenSemuaBaru = [];

  for (let j = 0; j < hasil.length; j++) {
    const c = hasil[j];
    
    // Gunakan KartuCatatan dari komponen.js agar lolos uji tangguh
    const elKartuSemat = KartuCatatan(c);
    const elKartuSemua = KartuCatatan(c);
      
    if (c.disematkan) {
      jumlahSemat++;
      elemenSematanBaru.push(elKartuSemat);
    }
    elemenSemuaBaru.push(elKartuSemua);
  }
  
  if (jumlahSemat === 0) {
    const p = document.createElement('p');
    p.className = 'kosong';
    p.textContent = 'Belum ada catatan yang disematkan.';
    sematan.replaceChildren(p);
  } else {
    sematan.replaceChildren(...elemenSematanBaru);
  }

  if (hasil.length === 0) {
    const p = document.createElement('p');
    p.className = 'kosong';
    p.textContent = 'Tidak ada catatan.';
    semuaDOM.replaceChildren(p);
  } else {
    semuaDOM.replaceChildren(...elemenSemuaBaru);
  }
  
  info.textContent = `${hasil.length} catatan, ${jumlahSemat} disematkan`;
}