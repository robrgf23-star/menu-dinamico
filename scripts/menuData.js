// Estructura de datos inicial del menú con MEGA MENUS
const initialMenuData = {
    "menu": [
        {
            "id": 1,
            "nombre": "Inicio",
            "enlace": "/inicio",
            "icono": "fas fa-home",
            "padre": null,
            "megaMenu": true,
            "megaContent": {
                "sections": [
                    {
                        "title": "Accesos Rápidos",
                        "links": [
                            { "nombre": "Dashboard Principal", "enlace": "/dashboard", "icono": "fas fa-tachometer-alt" },
                            { "nombre": "Panel de Control", "enlace": "/panel-control", "icono": "fas fa-cogs" },
                            { "nombre": "Estadísticas", "enlace": "/estadisticas", "icono": "fas fa-chart-bar" },
                            { "nombre": "Reportes Diarios", "enlace": "/reportes", "icono": "fas fa-file-alt" },
                            { "nombre": "Alertas del Sistema", "enlace": "/alertas", "icono": "fas fa-bell" }
                        ]
                    },
                    {
                        "title": "Herramientas",
                        "links": [
                            { "nombre": "Configuración", "enlace": "/configuracion", "icono": "fas fa-sliders-h" },
                            { "nombre": "Backup", "enlace": "/backup", "icono": "fas fa-database" },
                            { "nombre": "Seguridad", "enlace": "/seguridad", "icono": "fas fa-shield-alt" },
                            { "nombre": "Actualizaciones", "enlace": "/actualizaciones", "icono": "fas fa-sync" },
                            { "nombre": "Soporte Técnico", "enlace": "/soporte", "icono": "fas fa-headset" }
                        ]
                    }
                ],
                "info": {
                    "title": "Bienvenido al Sistema",
                    "content": "Accede rápidamente a todas las funcionalidades principales del sistema desde este menú desplegable."
                }
            }
        },
        {
            "id": 2,
            "nombre": "Sobre Nosotros",
            "enlace": "/sobre-nosotros",
            "icono": "fas fa-building",
            "padre": null,
            "megaMenu": true,
            "megaContent": {
                "sections": [
                    {
                        "title": "Nuestra Empresa",
                        "links": [
                            { "nombre": "Historia y Fundación", "enlace": "/historia", "icono": "fas fa-landmark" },
                            { "nombre": "Misión y Visión", "enlace": "/mision-vision", "icono": "fas fa-bullseye" },
                            { "nombre": "Valores Corporativos", "enlace": "/valores", "icono": "fas fa-heart" },
                            { "nombre": "Cultura Organizacional", "enlace": "/cultura", "icono": "fas fa-users" },
                            { "nombre": "Certificaciones", "enlace": "/certificaciones", "icono": "fas fa-award" }
                        ]
                    },
                    {
                        "title": "Equipo y Estructura",
                        "links": [
                            { "nombre": "Directiva Ejecutiva", "enlace": "/directiva", "icono": "fas fa-user-tie" },
                            { "nombre": "Departamentos", "enlace": "/departamentos", "icono": "fas fa-sitemap" },
                            { "nombre": "Equipo de Desarrollo", "enlace": "/equipo-desarrollo", "icono": "fas fa-code" },
                            { "nombre": "Consultores", "enlace": "/consultores", "icono": "fas fa-chart-line" },
                            { "nombre": "Bolsa de Trabajo", "enlace": "/trabajo", "icono": "fas fa-briefcase" }
                        ]
                    }
                ],
                "info": {
                    "title": "15+ Años de Experiencia",
                    "content": "Liderando la innovación tecnológica con más de 500 proyectos exitosos y 200 clientes satisfechos."
                }
            }
        },
        {
            "id": 3,
            "nombre": "Servicios",
            "enlace": "/servicios",
            "icono": "fas fa-cogs",
            "padre": null,
            "megaMenu": true,
            "megaContent": {
                "sections": [
                    {
                        "title": "Desarrollo de Software",
                        "links": [
                            { "nombre": "Aplicaciones Web", "enlace": "/apps-web", "icono": "fas fa-laptop-code" },
                            { "nombre": "Apps Móviles", "enlace": "/apps-moviles", "icono": "fas fa-mobile-alt" },
                            { "nombre": "E-commerce", "enlace": "/ecommerce", "icono": "fas fa-shopping-cart" },
                            { "nombre": "Sistemas ERP", "enlace": "/erp", "icono": "fas fa-cube" },
                            { "nombre": "APIs Personalizadas", "enlace": "/apis", "icono": "fas fa-code-branch" }
                        ]
                    },
                    {
                        "title": "Consultoría Tecnológica",
                        "links": [
                            { "nombre": "Auditoría TI", "enlace": "/auditoria", "icono": "fas fa-search" },
                            { "nombre": "Transformación Digital", "enlace": "/transformacion", "icono": "fas fa-sync" },
                            { "nombre": "Cloud Computing", "enlace": "/cloud", "icono": "fas fa-cloud" },
                            { "nombre": "Ciberseguridad", "enlace": "/ciberseguridad", "icono": "fas fa-shield-alt" },
                            { "nombre": "Big Data & Analytics", "enlace": "/bigdata", "icono": "fas fa-chart-pie" }
                        ]
                    }
                ],
                "info": {
                    "title": "Servicios Premium",
                    "content": "Ofrecemos soluciones tecnológicas completas con soporte 24/7 y garantía de calidad."
                }
            }
        },
        {
            "id": 4,
            "nombre": "Productos",
            "enlace": "/productos",
            "icono": "fas fa-box-open",
            "padre": null,
            "megaMenu": true,
            "megaContent": {
                "sections": [
                    {
                        "title": "Software Empresarial",
                        "links": [
                            { "nombre": "Suite Gerencial", "enlace": "/suite-gerencial", "icono": "fas fa-chart-line" },
                            { "nombre": "Sistema de Ventas", "enlace": "/sistema-ventas", "icono": "fas fa-cash-register" },
                            { "nombre": "Control Inventarios", "enlace": "/inventarios", "icono": "fas fa-boxes" },
                            { "nombre": "Facturación Electrónica", "enlace": "/facturacion", "icono": "fas fa-file-invoice" },
                            { "nombre": "Recursos Humanos", "enlace": "/recursos-humanos", "icono": "fas fa-user-friends" }
                        ]
                    },
                    {
                        "title": "Tecnologías Emergentes",
                        "links": [
                            { "nombre": "Inteligencia Artificial", "enlace": "/ia", "icono": "fas fa-robot" },
                            { "nombre": "Machine Learning", "enlace": "/machine-learning", "icono": "fas fa-brain" },
                            { "nombre": "Blockchain", "enlace": "/blockchain", "icono": "fas fa-link" },
                            { "nombre": "IoT Solutions", "enlace": "/iot", "icono": "fas fa-wifi" },
                            { "nombre": "Realidad Aumentada", "enlace": "/realidad-aumentada", "icono": "fas fa-vr-cardboard" }
                        ]
                    }
                ],
                "info": {
                    "title": "Innovación Constante",
                    "content": "Nuestros productos incorporan las últimas tecnologías para mantener tu empresa a la vanguardia."
                }
            }
        },
        {
            "id": 5,
            "nombre": "Clientes",
            "enlace": "/clientes",
            "icono": "fas fa-handshake",
            "padre": null,
            "megaMenu": true,
            "megaContent": {
                "sections": [
                    {
                        "title": "Experiencias de Clientes",
                        "links": [
                            { "nombre": "Casos de Éxito", "enlace": "/casos-exito", "icono": "fas fa-star" },
                            { "nombre": "Testimonios", "enlace": "/testimonios", "icono": "fas fa-comment" },
                            { "nombre": "Proyectos Destacados", "enlace": "/proyectos", "icono": "fas fa-trophy" },
                            { "nombre": "Alianzas Estratégicas", "enlace": "/alianzas", "icono": "fas fa-handshake" },
                            { "nombre": "Referencias Comerciales", "enlace": "/referencias", "icono": "fas fa-building" }
                        ]
                    },
                    {
                        "title": "Soporte al Cliente",
                        "links": [
                            { "nombre": "Centro de Ayuda", "enlace": "/ayuda", "icono": "fas fa-life-ring" },
                            { "nombre": "Documentación", "enlace": "/documentacion", "icono": "fas fa-book" },
                            { "nombre": "Tutoriales", "enlace": "/tutoriales", "icono": "fas fa-graduation-cap" },
                            { "nombre": "Soporte Técnico", "enlace": "/soporte-tecnico", "icono": "fas fa-headset" },
                            { "nombre": "Portal del Cliente", "enlace": "/portal", "icono": "fas fa-user-circle" }
                        ]
                    }
                ],
                "info": {
                    "title": "95% de Clientes Satisfechos",
                    "content": "Nuestra prioridad es la satisfacción total del cliente con soporte continuo y actualizaciones constantes."
                }
            }
        },
        {
            "id": 6,
            "nombre": "Contacto",
            "enlace": "/contacto",
            "icono": "fas fa-envelope",
            "padre": null,
            "megaMenu": true,
            "megaContent": {
                "sections": [
                    {
                        "title": "Información de Contacto",
                        "links": [
                            { "nombre": "Oficinas Centrales", "enlace": "/oficinas", "icono": "fas fa-map-marker-alt" },
                            { "nombre": "Teléfonos", "enlace": "/telefonos", "icono": "fas fa-phone" },
                            { "nombre": "Correo Electrónico", "enlace": "/email", "icono": "fas fa-envelope" },
                            { "nombre": "Formulario de Contacto", "enlace": "/formulario", "icono": "fas fa-edit" },
                            { "nombre": "Chat en Vivo", "enlace": "/chat", "icono": "fas fa-comments" }
                        ]
                    },
                    {
                        "title": "Redes y Comunicación",
                        "links": [
                            { "nombre": "Soporte 24/7", "enlace": "/soporte-24", "icono": "fas fa-clock" },
                            { "nombre": "Visítanos", "enlace": "/visitanos", "icono": "fas fa-directions" },
                            { "nombre": "Trabaja con Nosotros", "enlace": "/trabaja", "icono": "fas fa-briefcase" },
                            { "nombre": "Prensa y Medios", "enlace": "/prensa", "icono": "fas fa-newspaper" },
                            { "nombre": "Eventos y Webinars", "enlace": "/eventos", "icono": "fas fa-calendar-alt" }
                        ]
                    }
                ],
                "info": {
                    "title": "¿Necesitas Ayuda?",
                    "content": "Nuestro equipo está disponible las 24 horas para resolver tus dudas y proporcionarte el mejor servicio."
                }
            }
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