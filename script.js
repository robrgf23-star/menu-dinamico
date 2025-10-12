let menuOpciones = [];

// Cargar menú desde JSON inicial
async function cargarMenu() {
  try {
    const respuesta = await fetch('./data/menu.json');
    const datos = await respuesta.json();
    menuOpciones = datos.menu;
    renderizarMenu();
  } catch (err) {
    console.error('Error al cargar menu.json', err);
  }
}

function renderizarMenu() {
  const menu = document.getElementById('menu');
  menu.innerHTML = '';
  const ul = document.createElement('ul');

  menuOpciones.forEach(opcion => {
    const li = document.createElement('li');
    const enlace = document.createElement('a');

    // Ícono
    if (opcion.icono) {
      const icono = document.createElement('i');
      icono.className = `fa-solid ${opcion.icono}`;
      enlace.appendChild(icono);
    }

    enlace.appendChild(document.createTextNode(opcion.nombre));
    enlace.href = opcion.enlace;
    enlace.addEventListener('click', e => {
      e.preventDefault();
      mostrarContenido(opcion.nombre);
    });

    li.appendChild(enlace);

    // Submenús
    if (opcion.subMenu && opcion.subMenu.length > 0) {
      const subUl = document.createElement('ul');
      opcion.subMenu.forEach(sub => {
        const subLi = document.createElement('li');
        const subA = document.createElement('a');
        subA.textContent = sub.nombre;
        subA.href = sub.enlace;
        subA.addEventListener('click', e => {
          e.preventDefault();
          mostrarContenido(sub.nombre);
        });
        subLi.appendChild(subA);
        subUl.appendChild(subLi);
      });
      li.appendChild(subUl);
    }

    ul.appendChild(li);
  });

  menu.appendChild(ul);
}

function mostrarContenido(nombre) {
  const contenido = document.getElementById('contenido');
  contenido.innerHTML = `<h2>${nombre}</h2><p>Has seleccionado la sección "${nombre}".</p>`;
}

// Agregar opción desde formulario
document.getElementById('formAgregar').addEventListener('submit', e => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const enlace = document.getElementById('enlace').value.trim();
  const icono = document.getElementById('icono').value.trim();
  const subMenuText = document.getElementById('subMenu').value.trim();

  let subMenu = [];
  if (subMenuText) {
    // Cada línea "nombre|enlace"
    subMenu = subMenuText.split('\n').map(line => {
      const [n, e] = line.split('|').map(s => s.trim());
      return { id: Date.now() + Math.random(), nombre: n, enlace: e };
    });
  }

  const nuevaOpcion = {
    id: Date.now(),
    nombre,
    enlace,
    icono,
    subMenu
  };

  menuOpciones.push(nuevaOpcion);
  renderizarMenu();
  e.target.reset();
});

cargarMenu();
