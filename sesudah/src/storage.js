export function simpanLokal(data) {
  localStorage.setItem('catatan-kuliah', JSON.stringify(data));
}

export function muatLokal() {
  return JSON.parse(localStorage.getItem('catatan-kuliah')) || [];
}