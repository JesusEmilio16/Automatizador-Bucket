// script.js - gestión simple de carga/error + botón recarga
document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('catImg');
  const status = document.getElementById('imgStatus');
  const reloadBtn = document.getElementById('reloadBtn');

  function setStatus(text, isError = false) {
    status.textContent = text;
    status.style.color = isError ? '#b91c1c' : '';
  }

  // Antes de la carga
  setStatus('Comprobando imagen...');

  // Evento: carga correcta
  img.addEventListener('load', () => {
    setStatus('Imagen cargada correctamente.');
  });

  // Evento: error al cargar (403, 404, CORS, etc.)
  img.addEventListener('error', () => {
    setStatus('No se pudo cargar la imagen. Verifica permisos o la URL (403/404).', true);
  });

  // Botón para forzar recarga (añade query param para saltar cache)
  reloadBtn.addEventListener('click', () => {
    const src = img.src.split('?')[0];
    const timestamp = Date.now();
    img.src = src + '?v=' + timestamp;
    setStatus('Recargando imagen...');
  });
});
