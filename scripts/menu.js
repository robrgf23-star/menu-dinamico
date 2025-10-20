// Clase principal para gestionar el menú dinámico
class DynamicMenu {
    constructor() {
        this.menuData = getMenuData();
        this.navElement = document.getElementById('main-nav');
        this.formElement = document.getElementById('menu-form');
        this.mobileToggle = document.querySelector('.mobile-menu-toggle');
        this.init();
    }

    init() {
        this.renderMenu();
        this.setupEventListeners();
        this.setupMobileMenu();
    }

    // Renderizar el menú completo
    renderMenu() {
        this.navElement.innerHTML = '';
        const navList = document.createElement('ul');
        navList.className = 'nav-list';

        // Obtener elementos raíz (sin padre)
        const rootItems = this.menuData.menu.filter(item => item.padre === null);

        rootItems.forEach(item => {
            const menuItem = this.createMenuItem(item);
            navList.appendChild(menuItem);
        });

        this.navElement.appendChild(navList);
    }

    // Crear un elemento del menú recursivamente
    createMenuItem(item) {
        const li = document.createElement('li');
        li.className = 'nav-item';
        li.dataset.id = item.id;

        const link = document.createElement('a');
        link.className = 'nav-link';
        link.href = item.enlace;
        
        // Agregar ícono si existe
        if (item.icono) {
            const icon = document.createElement('i');
            icon.className = item.icono;
            link.appendChild(icon);
            
            // Agregar espacio después del ícono
            link.appendChild(document.createTextNode(' '));
        }

        const text = document.createTextNode(item.nombre);
        link.appendChild(text);

        // Verificar si tiene mega menú
        if (item.megaMenu && item.megaContent) {
            link.classList.add('has-submenu');
            const megaMenu = this.createMegaMenu(item.megaContent);
            li.appendChild(megaMenu);
        }
        // Verificar si tiene submenú normal
        else {
            const submenuItems = this.getSubmenuItems(item.id);
            if (submenuItems.length > 0) {
                link.classList.add('has-submenu');
                const submenu = this.createSubmenu(submenuItems);
                li.appendChild(submenu);
            }
        }

        li.appendChild(link);
        return li;
    }

    // Crear MEGA MENU
    createMegaMenu(megaContent) {
        const megaMenu = document.createElement('div');
        megaMenu.className = 'mega-menu';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'mega-menu-content';

        // Crear secciones
        megaContent.sections.forEach(section => {
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'mega-menu-section';

            const title = document.createElement('h4');
            title.className = 'mega-menu-title';
            title.textContent = section.title;
            sectionDiv.appendChild(title);

            const linksList = document.createElement('ul');
            linksList.className = 'mega-menu-links';

            section.links.forEach(linkItem => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = linkItem.enlace;

                if (linkItem.icono) {
                    const icon = document.createElement('i');
                    icon.className = linkItem.icono;
                    a.appendChild(icon);
                }

                a.appendChild(document.createTextNode(linkItem.nombre));
                li.appendChild(a);
                linksList.appendChild(li);
            });

            sectionDiv.appendChild(linksList);
            contentDiv.appendChild(sectionDiv);
        });

        megaMenu.appendChild(contentDiv);

        // Agregar información adicional si existe
        if (megaContent.info) {
            const infoDiv = document.createElement('div');
            infoDiv.className = 'mega-menu-info';
            
            const infoTitle = document.createElement('h4');
            infoTitle.textContent = megaContent.info.title;
            infoDiv.appendChild(infoTitle);

            const infoContent = document.createElement('p');
            infoContent.textContent = megaContent.info.content;
            infoDiv.appendChild(infoContent);

            megaMenu.appendChild(infoDiv);
        }

        return megaMenu;
    }

    // Crear submenú recursivo normal
    createSubmenu(items) {
        const ul = document.createElement('ul');
        ul.className = 'submenu';

        items.forEach(item => {
            const menuItem = this.createMenuItem(item);
            ul.appendChild(menuItem);
        });

        return ul;
    }

    // Obtener elementos de submenú
    getSubmenuItems(parentId) {
        return this.menuData.menu.filter(item => item.padre === parentId);
    }

    // Agregar nuevo elemento al menú
    addMenuItem(itemData) {
        // Validar ID único
        if (this.menuData.menu.some(item => item.id === itemData.id)) {
            this.showMessage('Error: El ID debe ser único', 'error');
            return false;
        }

        // Validar enlace
        if (!this.isValidLink(itemData.enlace)) {
            this.showMessage('Error: El enlace no es válido', 'error');
            return false;
        }

        // Agregar el nuevo elemento
        this.menuData.menu.push(itemData);
        saveMenuData(this.menuData);
        
        // Re-renderizar el menú
        this.renderMenu();
        
        this.showMessage('Elemento agregado correctamente', 'success');
        return true;
    }

    // Validar enlace
    isValidLink(link) {
        // Validación básica - puede extenderse según necesidades
        return link && link.startsWith('/') && link.length > 1;
    }

    // Configurar event listeners
    setupEventListeners() {
        // Formulario para agregar elementos
        this.formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit();
        });

        // Botón para restablecer menú
        document.getElementById('reset-menu').addEventListener('click', () => {
            if (confirm('¿Estás seguro de que quieres restablecer el menú a su estado original?')) {
                this.menuData = resetMenuData();
                this.renderMenu();
                this.showMessage('Menú restablecido correctamente', 'success');
            }
        });

        // Botón para exportar JSON
        document.getElementById('export-json').addEventListener('click', () => {
            exportMenuData();
            this.showMessage('JSON exportado correctamente', 'success');
        });

        // Toggle menú móvil
        this.mobileToggle.addEventListener('click', () => {
            this.navElement.classList.toggle('active');
        });

        // Cerrar mega menús al hacer scroll
        window.addEventListener('scroll', () => {
            this.closeAllMenus();
        });
    }

    // Cerrar todos los menús
    closeAllMenus() {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
    }

    // Manejar envío del formulario
    handleFormSubmit() {
        const formData = {
            id: parseInt(document.getElementById('menu-id').value),
            nombre: document.getElementById('menu-name').value.trim(),
            enlace: document.getElementById('menu-link').value.trim(),
            padre: document.getElementById('menu-parent').value ? 
                   parseInt(document.getElementById('menu-parent').value) : null,
            icono: document.getElementById('menu-icon').value.trim() || null
        };

        if (this.addMenuItem(formData)) {
            this.formElement.reset();
        }
    }

    // Configurar menú para móviles
    setupMobileMenu() {
        // Toggle para submenús en móviles
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                const navLink = e.target.closest('.nav-link.has-submenu');
                if (navLink) {
                    e.preventDefault();
                    const navItem = navLink.parentElement;
                    navItem.classList.toggle('active');
                }
            }
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && 
                !e.target.closest('.main-nav') && 
                !e.target.closest('.mobile-menu-toggle')) {
                this.navElement.classList.remove('active');
            }
        });
    }

    // Mostrar mensajes al usuario
    showMessage(message, type) {
        // Remover mensajes anteriores
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type} fade-in`;
        messageDiv.textContent = message;

        const adminPanel = document.querySelector('.admin-panel');
        adminPanel.insertBefore(messageDiv, adminPanel.firstChild);

        // Auto-remover después de 5 segundos
        setTimeout(() => {
            if (messageDiv.parentElement) {
                messageDiv.remove();
            }
        }, 5000);
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new DynamicMenu();
});

// Manejar cambios de tamaño de ventana para responsive
window.addEventListener('resize', () => {
    const navElement = document.getElementById('main-nav');
    // Cerrar todos los submenús en móvil cuando se cambie a escritorio
    if (window.innerWidth > 768) {
        document.querySelectorAll('.nav-item.active').forEach(item => {
            item.classList.remove('active');
        });
        navElement.classList.remove('active');
    }
});