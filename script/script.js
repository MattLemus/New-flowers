/* =========================================
   1. LÓGICA DEL MENÚ (COMENTADA POR AHORA)
   Descomenta esto cuando hayamos creado el menú móvil en HTML
   ========================================= */

/* const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.style.display =
            mobileMenu.style.display === "flex" ? "none" : "flex";
    });
}
*/

/* =========================================
   2. TU INVENTARIO DE PRODUCTOS
   ========================================= */
const productos = [
    {
        id: "precio-001", 
        nombre: "Ramo Amor",
        imagen: "assets/1.png", 
        etiqueta: "Top Vendido"
    },
    {
        id: "precio-002",
        nombre: "Caja Girasoles",
        imagen: "assets/2.png",
        etiqueta: "" 
    },
    {
        id: "precio-003",
        nombre: "Tulipanes Mix",
        imagen: "assets/3.png",
        etiqueta: ""
    },
    {
        id: "precio-004",
        nombre: "Orquídea",
        imagen: "assets/5.png",
        etiqueta: ""
    }
];

/* =========================================
   3. LA FÁBRICA (RENDERIZADO)
   ========================================= */
const contenedor = document.getElementById("contenedor-productos");

function renderizarProductos() {
    // Verificamos que el contenedor exista para evitar errores
    if (!contenedor) return; 

    contenedor.innerHTML = ""; // Limpia el contenedor

    productos.forEach(producto => {
        const tarjeta = `
            <article class="product-card">
                <div class="image-container">
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="product-img" loading="lazy">
                    ${producto.etiqueta ? `<span class="badge">${producto.etiqueta}</span>` : ''}
                </div>
                <div class="product-info">
                    <h3>${producto.nombre}</h3>
                    <p class="price" id="${producto.id}">Cargando...</p>
                    <a href="https://wa.me/593997035437?text=Hola,%20me%20interesa%20el%20${producto.nombre}" 
                       class="btn-add" target="_blank">
                       <i class="ph ph-whatsapp-logo"></i> Pedir
                    </a>
                </div>
            </article>
        `;
        contenedor.innerHTML += tarjeta;
    });
}

// Ejecutar cuando carga la página
document.addEventListener("DOMContentLoaded", renderizarProductos);
