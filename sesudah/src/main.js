import { tambah, alihSemat, hapus } from './state.js';
import { renderTampilan } from './ui.js';

let kataCariSaatIni = '';

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const judulDOM = document.getElementById('judul');
  const judul = judulDOM.value.trim();
  if (judul === '') return;
  
  const mk = document.getElementById('mk').value;
  tambah(judul, mk);
  
  judulDOM.value = '';
  renderTampilan(kataCariSaatIni);
});

document.getElementById('cari').addEventListener('input', function (e) {
  kataCariSaatIni = e.target.value.trim();
  renderTampilan(kataCariSaatIni);
});

// Event Delegation (Menggantikan onclick yang dilarang)
document.addEventListener('click', function(e) {
  const btn = e.target.closest('button[data-aksi]');
  if (!btn) return;
  
  const id = parseInt(btn.dataset.id);
  const aksi = btn.dataset.aksi;
  
  if (aksi === 'semat') {
    alihSemat(id);
    renderTampilan(kataCariSaatIni);
  } else if (aksi === 'hapus') {
    if (confirm('Hapus catatan ini?')) {
      hapus(id);
      renderTampilan(kataCariSaatIni);
    }
  }
});

// Jalankan pertama kali
renderTampilan();