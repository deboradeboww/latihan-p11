// src/state.js
import { muat, simpan } from './storage.js';

let catatan = muat();

export function semua() {
  return catatan;
}

export function tambah(judul, mk) {
  const baru = {
    id: Date.now(),
    judul: judul,
    mk: mk,
    dibuat: new Date().toISOString(),
    disematkan: false
  };
  catatan.push(baru);
  simpan(catatan);
}

export function alihSemat(id) {
  const target = catatan.find(c => c.id === id);
  if (target) {
    target.disematkan = !target.disematkan;
    simpan(catatan);
  }
}

export function hapus(id) {
  catatan = catatan.filter(c => c.id !== id);
  simpan(catatan);
}

export function cari(kata) {
  if (!kata) return catatan;
  const k = kata.toLowerCase();
  return catatan.filter(c => c.judul.toLowerCase().includes(k));
}