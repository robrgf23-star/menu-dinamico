// Cargar el menú dinámicamente desde menu.json
async function cargarMenu() {
  const respuesta = await fetch('./data/menu.json');
  const datos = await respuesta.json();
  renderizarMenu(datos.menu);
}

// Renderiza las opciones del menú en el HTML
function renderizarMenu(opciones) {
  const menu = document.getElementById('menu');
  menu.innerHTML = ''; // Limpia el menú antes de renderizar

  opciones.forEach(opcion => {
    const enlace = document.createElement('a');
    enlace.textContent = opcion.nombre;
    enlace.href = opcion.enlace;
    enlace.addEventListener('click', e => {
      e.preventDefault();
      mostrarContenido(opcion.nombre);
    });
    menu.appendChild(enlace);
  });
}

// Simula cambiar el contenido principal
function mostrarContenido(nombre) {
  const contenido = document.getElementById('contenido');
  contenido.innerHTML = `<h2>${nombre}</h2><p>Has seleccionado la sección "${nombre}".</p>`;
}

// Agregar nueva opción al menú dinámicamente
document.getElementById('formAgregar').addEventListener('submit', e => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const enlace = document.getElementById('enlace').value.trim();

  if (nombre && enlace) {
    const nuevaOpcion = { id: Date.now(), nombre, enlace };
    // Agrega la nueva opción en la interfaz sin recargar
    const enlaceNuevo = document.createElement('a');
    enlaceNuevo.textContent = nuevaOpcion.nombre;
    enlaceNuevo.href = nuevaOpcion.enlace;
    enlaceNuevo.addEventListener('click', ev => {
      ev.preventDefault();
      mostrarContenido(nuevaOpcion.nombre);
    });
    document.getElementById('menu').appendChild(enlaceNuevo);
    e.target.reset();
  }
});

// Inicializa el menú al cargar la página
cargarMenu();
