// Estructura de datos inicial del menú
const initialMenuData = {
    "menu": [
        {
            "id": 1,
            "nombre": "Inicio",
            "enlace": "/inicio",
            "icono": "fa-home",
            "padre": null
        },
        {
            "id": 2,
            "nombre": "Sobre Nosotros",
            "enlace": "/sobre-nosotros",
            "icono": "fa-info",
            "padre": null,
            "submenu": [
                {
                    "id": 21,
                    "nombre": "Nuestra Historia",
                    "enlace": "/sobre-nosotros/historia",
                    "icono": "fa-history",
                    "padre": 2
                },
                {
                    "id": 22,
                    "nombre": "Equipo",
                    "enlace": "/sobre-nosotros/equipo",
                    "icono": "fa-users",
                    "padre": 2
                }
            ]
        },
        {
            "id": 3,
            "nombre": "Servicios",
            "enlace": "/servicios",
            "icono": "fa-cogs",
            "padre": null,
            "submenu": [
                {
                    "id": 31,
                    "nombre": "Desarrollo Web",
                    "enlace": "/servicios/desarrollo-web",
                    "icono": "fa-code",
                    "padre": 3,
                    "submenu": [
                        {
                            "id": 311,
                            "nombre": "Frontend",
                            "enlace": "/servicios/desarrollo-web/frontend",
                            "icono": "fa-paint-brush",
                            "padre": 31
                        },
                        {
                            "id": 312,
                            "nombre": "Backend",
                            "enlace": "/servicios/desarrollo-web/backend",
                            "icono": "fa-server",
                            "padre": 31
                        }
                    ]
                },
                {
                    "id": 32,
                    "nombre": "Consultoría",
                    "enlace": "/servicios/consultoria",
                    "icono": "fa-chart-line",
                    "padre": 3
                }
            ]
        },
        {
            "id": 4,
            "nombre": "Contacto",
            "enlace": "/contacto",
            "icono": "fa-envelope",
            "padre": null
        }
    ]
};

// Función para obtener datos del menú desde localStorage o usar los iniciales
function getMenuData() {
    const storedData = localStorage.getItem('dynamicMenuData');
    return storedData ? JSON.parse(storedData) : initialMenuData;
}

// Función para guardar datos del menú en localStorage
function saveMenuData(menuData) {
    localStorage.setItem('dynamicMenuData', JSON.stringify(menuData));
}

// Función para restablecer el menú a los valores iniciales
function resetMenuData() {
    localStorage.removeItem('dynamicMenuData');
    return initialMenuData;
}

// Función para exportar el menú como JSON
function exportMenuData() {
    const menuData = getMenuData();
    const dataStr = JSON.stringify(menuData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'menu-data.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}