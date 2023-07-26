// Obtener referencias a los botones
const infoBtn = document.getElementById('infoBtn');
const errorBtn = document.getElementById('errorBtn');
const warningBtn = document.getElementById('warningBtn');

// Agregar eventos de clic a los botones
infoBtn.addEventListener('click', function() {
  registrarLog('info', 'Log de información');
});

errorBtn.addEventListener('click', function() {
  registrarLog('error', 'Log de error');
});

warningBtn.addEventListener('click', function() {
  registrarLog('warning', 'Log de advertencia');
});

// Función para registrar el log
function registrarLog(tipo, nombre) {
  const fecha = new Date().toLocaleString();
  const log = `%c[${fecha}] ${tipo.toUpperCase()}: ${nombre}`;

  switch (tipo) {
    case 'info':
      console.log(log, 'color: green');
      break;
    case 'error':
      console.log(log, 'color: red');
      break;
    case 'warning':
      console.log(log, 'color: yellow');
      break;
    default:
      console.log(log);
      break;
  }
}
