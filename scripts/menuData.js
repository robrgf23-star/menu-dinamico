// Estructura de datos inicial del menú con contenido real
const initialMenuData = {
    "menu": [
        {
            "id": 1,
            "nombre": "Inicio",
            "enlace": "/inicio",
            "icono": "fas fa-home",
            "padre": null
        },
        {
            "id": 2,
            "nombre": "Sobre Nosotros",
            "enlace": "/sobre-nosotros",
            "icono": "fas fa-building",
            "padre": null,
            "submenu": [
                {
                    "id": 21,
                    "nombre": "Nuestra Historia",
                    "enlace": "/sobre-nosotros/historia",
                    "icono": "fas fa-history",
                    "padre": 2
                },
                {
                    "id": 22,
                    "nombre": "Misión y Visión",
                    "enlace": "/sobre-nosotros/mision-vision",
                    "icono": "fas fa-bullseye",
                    "padre": 2
                },
                {
                    "id": 23,
                    "nombre": "Equipo Directivo",
                    "enlace": "/sobre-nosotros/equipo",
                    "icono": "fas fa-users-cog",
                    "padre": 2
                },
                {
                    "id": 24,
                    "nombre": "Cultura Empresarial",
                    "enlace": "/sobre-nosotros/cultura",
                    "icono": "fas fa-heart",
                    "padre": 2
                },
                {
                    "id": 25,
                    "nombre": "Reconocimientos",
                    "enlace": "/sobre-nosotros/reconocimientos",
                    "icono": "fas fa-trophy",
                    "padre": 2
                }
            ]
        },
        {
            "id": 3,
            "nombre": "Servicios",
            "enlace": "/servicios",
            "icono": "fas fa-cogs",
            "padre": null,
            "submenu": [
                {
                    "id": 31,
                    "nombre": "Desarrollo Web",
                    "enlace": "/servicios/desarrollo-web",
                    "icono": "fas fa-code",
                    "padre": 3,
                    "submenu": [
                        {
                            "id": 311,
                            "nombre": "Aplicaciones Web",
                            "enlace": "/servicios/desarrollo-web/aplicaciones",
                            "icono": "fas fa-laptop-code",
                            "padre": 31
                        },
                        {
                            "id": 312,
                            "nombre": "E-commerce",
                            "enlace": "/servicios/desarrollo-web/ecommerce",
                            "icono": "fas fa-shopping-cart",
                            "padre": 31
                        },
                        {
                            "id": 313,
                            "nombre": "Portales Corporativos",
                            "enlace": "/servicios/desarrollo-web/portales",
                            "icono": "fas fa-globe",
                            "padre": 31
                        }
                    ]
                },
                {
                    "id": 32,
                    "nombre": "Consultoría TI",
                    "enlace": "/servicios/consultoria",
                    "icono": "fas fa-chart-line",
                    "padre": 3,
                    "submenu": [
                        {
                            "id": 321,
                            "nombre": "Auditoría Tecnológica",
                            "enlace": "/servicios/consultoria/auditoria",
                            "icono": "fas fa-search",
                            "padre": 32
                        },
                        {
                            "id": 322,
                            "nombre": "Transformación Digital",
                            "enlace": "/servicios/consultoria/transformacion",
                            "icono": "fas fa-sync-alt",
                            "padre": 32
                        }
                    ]
                },
                {
                    "id": 33,
                    "nombre": "Cloud Computing",
                    "enlace": "/servicios/cloud",
                    "icono": "fas fa-cloud",
                    "padre": 3,
                    "submenu": [
                        {
                            "id": 331,
                            "nombre": "Infraestructura Cloud",
                            "enlace": "/servicios/cloud/infraestructura",
                            "icono": "fas fa-server",
                            "padre": 33
                        },
                        {
                            "id": 332,
                            "nombre": "Migración a Cloud",
                            "enlace": "/servicios/cloud/migracion",
                            "icono": "fas fa-truck-moving",
                            "padre": 33
                        }
                    ]
                }
            ]
        },
        {
            "id": 4,
            "nombre": "Productos",
            "enlace": "/productos",
            "icono": "fas fa-box-open",
            "padre": null,
            "submenu": [
                {
                    "id": 41,
                    "nombre": "Software Empresarial",
                    "enlace": "/productos/software-empresarial",
                    "icono": "fas fa-desktop",
                    "padre": 4
                },
                {
                    "id": 42,
                    "nombre": "Soluciones Móviles",
                    "enlace": "/productos/soluciones-moviles",
                    "icono": "fas fa-mobile-alt",
                    "padre": 4
                },
                {
                    "id": 43,
                    "nombre": "Plataformas SaaS",
                    "enlace": "/productos/plataformas-saas",
                    "icono": "fas fa-cloud",
                    "padre": 4
                },
                {
                    "id": 44,
                    "nombre": "Herramientas IA",
                    "enlace": "/productos/herramientas-ia",
                    "icono": "fas fa-robot",
                    "padre": 4
                },
                {
                    "id": 45,
                    "nombre": "Sistemas de Seguridad",
                    "enlace": "/productos/sistemas-seguridad",
                    "icono": "fas fa-shield-alt",
                    "padre": 4
                }
            ]
        },
        {
            "id": 5,
            "nombre": "Clientes",
            "enlace": "/clientes",
            "icono": "fas fa-handshake",
            "padre": null,
            "submenu": [
                {
                    "id": 51,
                    "nombre": "Casos de Éxito",
                    "enlace": "/clientes/casos-exito",
                    "icono": "fas fa-star",
                    "padre": 5
                },
                {
                    "id": 52,
                    "nombre": "Testimonios",
                    "enlace": "/clientes/testimonios",
                    "icono": "fas fa-comment",
                    "padre": 5
                },
                {
                    "id": 53,
                    "nombre": "Alianzas Estratégicas",
                    "enlace": "/clientes/alianzas",
                    "icono": "fas fa-handshake",
                    "padre": 5
                }
            ]
        },
        {
            "id": 6,
            "nombre": "Contacto",
            "enlace": "/contacto",
            "icono": "fas fa-envelope",
            "padre": null,
            "submenu": [
                {
                    "id": 61,
                    "nombre": "Oficinas",
                    "enlace": "/contacto/oficinas",
                    "icono": "fas fa-map-marker-alt",
                    "padre": 6
                },
                {
                    "id": 62,
                    "nombre": "Soporte Técnico",
                    "enlace": "/contacto/soporte",
                    "icono": "fas fa-headset",
                    "padre": 6
                },
                {
                    "id": 63,
                    "nombre": "Trabaja con Nosotros",
                    "enlace": "/contacto/trabaja",
                    "icono": "fas fa-briefcase",
                    "padre": 6
                }
            ]
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