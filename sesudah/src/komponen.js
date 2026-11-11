// src/komponen.js

export function KartuCatatan(catatan) {
  const el = document.createElement('div');
  el.className = 'kartu';

  const smallMk = document.createElement('small');
  smallMk.textContent = catatan.mk;

  const h3 = document.createElement('h3');
  h3.textContent = catatan.judul; // Menggunakan textContent agar aman dari tag HTML

  const smallTanggal = document.createElement('small');
  smallTanggal.textContent = new Date(catatan.dibuat).toLocaleDateString('id-ID');

  const divAksi = document.createElement('div');
  divAksi.className = 'aksi';

  const btnSemat = document.createElement('button');
  btnSemat.dataset.aksi = 'semat';
  btnSemat.dataset.id = catatan.id;
  btnSemat.textContent = catatan.disematkan ? 'Lepas' : 'Sematkan';

  const btnHapus = document.createElement('button');
  btnHapus.dataset.aksi = 'hapus';
  btnHapus.dataset.id = catatan.id;
  btnHapus.textContent = 'Hapus';

  divAksi.append(btnSemat, btnHapus);
  el.append(smallMk, h3, smallTanggal, divAksi);

  return el;
}
