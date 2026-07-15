// ===================================
// script.js - NEXA Agencia
// Interacciones basicas del sitio
// ===================================

// Inicializar animaciones AOS (si la libreria esta cargada)
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 800,
    once: true,
  });
}

// Filtro de portfolio (solo funciona en portfolio.html, pero
// lo dejamos en el mismo script.js para no crear otro archivo)
const botonesFiltro = document.querySelectorAll('.filtro-portfolio button');
const itemsPortfolio = document.querySelectorAll('.item-portfolio');

if (botonesFiltro.length > 0) {
  botonesFiltro.forEach(function (boton) {
    boton.addEventListener('click', function () {
      // saco la clase activo de todos los botones
      botonesFiltro.forEach(function (b) {
        b.classList.remove('activo');
      });
      boton.classList.add('activo');

      const categoria = boton.getAttribute('data-filtro');

      itemsPortfolio.forEach(function (item) {
        if (categoria === 'todos' || item.getAttribute('data-categoria') === categoria) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Formulario de contacto (demo, no envia a un servidor real)
const formContacto = document.getElementById('formContacto');

if (formContacto) {
  formContacto.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor completá todos los campos obligatorios.');
      return;
    }

    // Como es un proyecto academico, no hay backend: solo mostramos un mensaje
    document.getElementById('mensajeEnviado').style.display = 'block';
    formContacto.reset();
  });
}

// Cambia el estilo del navbar cuando se scrollea la pagina
window.addEventListener('scroll', function () {
  const nav = document.querySelector('.navbar-nexa');
  if (nav) {
    if (window.scrollY > 40) {
      nav.style.boxShadow = '0 4px 14px rgba(0,0,0,0.12)';
    } else {
      nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.06)';
    }
  }
});
