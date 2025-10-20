// Clase principal para gestionar el menú dinámico
class DynamicMenu {
    constructor() {
        this.menuData = getMenuData();
        this.navElement = document.getElementById('main-nav');
        this.formElement = document.getElementById('menu-form');
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
            icon.className = `icon ${item.icono}`;
            link.appendChild(icon);
        }

        const text = document.createTextNode(item.nombre);
        link.appendChild(text);

        // Verificar si tiene submenú
        const submenuItems = this.getSubmenuItems(item.id);
        if (submenuItems.length > 0) {
            link.classList.add('has-submenu');
            const submenu = this.createSubmenu(submenuItems);
            li.appendChild(submenu);
        }

        li.appendChild(link);
        return li;
    }

    // Crear submenú recursivo
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
    // Cerrar todos los submenús en móvil cuando se cambie a escritorio
    if (window.innerWidth > 768) {
        document.querySelectorAll('.nav-item.active').forEach(item => {
            item.classList.remove('active');
        });
    }
});