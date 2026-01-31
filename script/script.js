

const DATOS_CSV = `
ID,FOTO REFERENCIAL,NOMBRE,PRECIO,CATEGORIA
precio-70,,Ramo Girasoles,50,"amor, ramo"
precio-8,,Ramo Princesa,45,"cumpleanos, ramo, rosas"
precio-9,,Caja Corazón,25,"amor, caja, rosas"
precio-69,,Caja Mixta Rosa,50,"caja, mix"
precio-7,,Caja Corona Roja,50,"amor, caja, rosas"
precio-68,,Caja Mixta Lila,25,"caja, mix"
precio-67,,Buchón Rojo,50,"amor, rosas, ramo"
precio-65,,Arco Globos,120,globos
precio-64,,Conos Gerberas,4,"especiales, mix, ramo"
precio-66,,Fresas con Globo,30,"amor, frutales, cumpleanos"
precio-63,,Ramo Rosas Lila,35,"especiales, mix, ramo"
precio-60,,Globos Techo,75,globos
precio-62,,Ramo Corazón,35,"especiales, mix, ramo"
precio-6,,Caja Flores Globo,30,"cumpleanos, caja, mix"
precio-61,,Fresas con Números,35,"amor, caja, rosas, frutales"
precio-58,,Caja Mixta Pastel,25,"especiales, mix, caja"
precio-59,,Lirios Mix,30,"especiales, ramo, mix"
precio-57,,Caja Lirios Mix,30,"especiales, mix, caja"
precio-55,,Desayuno con Flores,25,"caja, frutales, mix"
precio-56,,Caja Regalo Papá,25,"caja, cumpleanos"
precio-54,,Caja Rosas Globo,35,"cumpleanos, mix, caja"
precio-53,,Ramo Lirios Rosa,7,"especiales, ramo, mix"
precio-52,,Corazón con Luces,45,"amor, rosas"
precio-50,,Caja Lirios Roja,60,"especiales, mix, amor"
precio-51,,Corazón Ferrero,25,"amor, rosas"
precio-5,,Caja Rosas Amarillas,25,"mix, caja"
precio-44,,Ramo Hortensias Fucsia,25,"ramo, mix, amor"
precio-48,,Caja Rosas Mariposa,25,"especiales, caja, mix"
precio-49,,Ramo Rosas Pastel,30,"ramo, mix, amor"
precio-46,,Caja Rosas Multicolor,30,"amor, caja, rosas"
precio-47,,Caja con Rosas y Ferreros,70,"amor, caja, rosas"
precio-43,,Ramo Corona Roja,30,"amor, ramo, rosas"
precio-45,,Ramo Fresas,30,"amor, frutales, ramo"
precio-42,,Ramo Propuesta,30,"amor, rosas, ramo"
precio-41,,Caja Globo Pastel,35,"caja, mix"
precio-39,,Caja Lila Mix,25,"caja, mix, amor"
precio-4,,Ramo Snoopy,40,"ramo, mix, cumpleanos"
precio-40,,Ramo Oso Rosa,35,"amor, ramo"
precio-35,,Caja Azul Mini,20,"mix, caja"
precio-38,,Ramo Cono Rosa,30,"ramo, mix, amor"
precio-37,,Ramillete Gerbera,5,"mix, ramo"
precio-36,,Trio Globos Pastel,45,"caja, mix, cumpleanos"
precio-33,,Globo Burbuja Lila,40,"caja, rosas, cumpleanos"
precio-34,,Lirios en Caja,35,"caja, mix, amor"
precio-32,,Bolso Floral,15,"mix, caja, amor"
precio-29,,Box Graduación,40,"caja, mix, cumpleanos"
precio-31,,Cilindro Azul Mix,25,"caja, rosas, amor"
precio-30,,Buchón Girasol,45,"ramo, rosas, amor"
precio-3,,Ramo Hot Wheels,25,"ramo, mix"
precio-28,,Caja Estrella Rosa,25,"caja, mix, cumpleanos"
precio-27,,Bouquet Lirios,20,"ramo, mix"
precio-25,,Corazón Pedestal Bicolor,70,condolencias
precio-26,,Parante Lirios,70,condolencias
precio-24,,Corazón Pedestal Girasol,60,condolencias
precio-23,,Parante Lágrima,70,condolencias
precio-14,,Caja Oso Lirios,45,"caja, mix, amor"
precio-12,,Ramo Corazón Gigante,70,"ramo, rosas, amor"
precio-11,,Ramo Naranja Mix,20,"ramo, mix"
precio-16,,Ramo Corona Mix,25,"ramo, mix, amor, cumpleanos"
precio-2,,Caja Rosas Dos Tonos,25,"caja, rosas"
precio-22,,Corazón Blanco,70,condolencias
precio-21,,Lazo Floral,70,condolencias
precio-18,,Corazón Kinder,40,"amor, rosas"
precio-10,,Caja Stitch,45,"cumpleanos, caja, mix"
precio-19,,Ramo Rojo Girasol,25,"ramo, rosas, mix"
precio-20,,Bolso Fresas,20,"frutales, caja"
precio-17,,Corazón Bicolor Ferrero,50,"amor, caja, rosas"
precio-15,,Caja Sulley,30,"rosas, caja, amor"
precio-13,,Ramo Estrella,30,"mix, ramo"
precio-1,,Caja Lotso,50,"amor, caja, mix"
precio-71,,Arreglo Fúnebre,,condolencias
precio-72,,Ramo Pastel,30,sanvalentin
precio-73,,Ramo Ferrero,25,sanvalentin
precio-74,,Ramo Lila,25,sanvalentin
precio-75,,Ramo Corazón,25,sanvalentin
precio-76,,Ferrero Love,50,sanvalentin
precio-77,,Caja Cumpleaños,30,sanvalentin
precio-78,,Caja Amor,45,sanvalentin
precio-79,,Globo Rosas,40,sanvalentin
precio-80,,Globo Elefante,35,sanvalentin
precio-81,,Corazón Globos,50,sanvalentin
precio-82,,Corazón Girasol,25,sanvalentin
precio-83,,Pack Osito,30,sanvalentin
precio-84,,Corazón Gigante60,60,sanvalentin
precio-85,,Ramo Frutal,25,sanvalentin
precio-86,,Ramo Rocher,25,sanvalentin
precio-87,,Caja Festiva,30,sanvalentin
precio-88,,Corazón Mixto,30,sanvalentin
precio-89,,Detalle Cumple,45,sanvalentin
precio-90,,Corazón Dulce,40,sanvalentin
precio-91,,Caja Pastel,25,sanvalentin
precio-92,,Corazon Rosas,30,sanvalentin
precio-93,,Ramo Lirios,20,sanvalentin
precio-94,,Caja Bicolor,20,sanvalentin
precio-95,,Corazón Nube,50,condolencias
precio-96,,Cilindro Mix,25,cumpleanos
precio-97,,Corazón Sol,35,"amor, sanvalentin"
precio-98,,Ramo Solar,35,sanvalentin
precio-99,,Mix Girasol,30,sanvalentin
precio-100,,Ramo Central,20,sanvalentin
`; 
// ^^^ PEGA TUS DATOS ARRIBA ENTRE LAS COMILLAS ^^^


document.addEventListener("DOMContentLoaded", () => {
    try {
        const inventario = procesarCSV(DATOS_CSV);
        renderizarWeb(inventario);
    } catch (error) {
        console.error("Error procesando datos:", error);
    }
    iniciarObservadorEstaticos();
});

function procesarCSV(csv) {
    const productos = [];
    const filas = csv.split('\n');

    for (let i = 1; i < filas.length; i++) {
        const fila = filas[i].trim();
        if (fila) {
            const regexCSV = /,(?=(?:(?:[^"]*"){2})*[^"]*$)/;
            const cols = fila.split(regexCSV);
            
            if (cols.length >= 1) {
                const idRaw = cols[0].trim();
                
                if (!idRaw || idRaw.toLowerCase() === 'id') continue;

                let etiquetasRaw = cols[4] ? cols[4].replace(/"/g, '').toLowerCase().trim() : "todos";
                const nombre = cols[2] ? cols[2].replace(/"/g, '').trim() : "Sin Nombre";
                const precioRaw = cols[3] ? cols[3].replace(/"/g, '').trim() : "0";
                const precio = parseFloat(precioRaw.replace('$','').replace(',','.'));
                const numeroID = idRaw.split('-')[1] || "placeholder";
                
                productos.push({
                    id: idRaw,
                    nombre: nombre,
                    precio: isNaN(precio) ? 0 : precio,
                    tags: etiquetasRaw, 
                    imagen: `assets/${numeroID}.webp` 
                });
            }
        }
    }
    return productos;
}

function renderizarWeb(productos) {
    const gridCatalogo = document.getElementById("grid-principal");
    const gridDecoraciones = document.getElementById("grid-decoraciones");
    const gridSanValentin = document.getElementById("grid-sanvalentin");
    const home = document.getElementById("contenedor-productos");

    const tagsExcluidos = ['condolencias', 'globos', 'decoracion', 'sanvalentin'];

    if (gridSanValentin) {

        const productosSV = productos.filter(p => p.tags.split(',').map(t => t.trim().toLowerCase()).includes('sanvalentin'));
        gridSanValentin.innerHTML = productosSV.map(p => htmlTarjeta(p, "tag-sanvalentin tag-todos")).join('');
        if (typeof iniciarFiltros === 'function') iniciarFiltros();
    }

    if (gridCatalogo) {
        const productosCat = productos.filter(p => {
            const tags = p.tags.split(',').map(t => t.trim().toLowerCase());
            return !tags.some(tag => tagsExcluidos.includes(tag));
        });
        gridCatalogo.innerHTML = productosCat.map(p => htmlTarjeta(p, "tag-todos")).join('');
        if (typeof iniciarFiltros === 'function') iniciarFiltros();
    }

    if (gridDecoraciones) {

        const tagsDecoracion = ['condolencias', 'globos', 'decoracion'];
        
        const productosDecor = productos.filter(p => {
            const tags = p.tags.split(',').map(t => t.trim().toLowerCase());
            return tags.some(tag => tagsDecoracion.includes(tag));
        });
        gridDecoraciones.innerHTML = productosDecor.map(p => htmlTarjeta(p, "tag-todos")).join('');
        if (typeof iniciarFiltros === 'function') iniciarFiltros();
    }


    if (home) {

        home.innerHTML = productos.slice(0, 8).map(p => htmlTarjeta(p, "")).join('');
    }
}

function htmlTarjeta(prod, clasesBase) {
    const precioDisplay = prod.precio > 0 ? `$${prod.precio.toFixed(2)}` : 'COTIZAR';
    const btnTexto = prod.precio > 0 ? "Pedir" : "Consultar";
    const clsBtn = prod.precio > 0 ? "" : "btn-cotizar"; 
    
    const clasesTags = prod.tags.split(',').map(t => `tag-${t.trim()}`).join(' ');

    const clasesFinales = `${clasesBase} ${clasesTags}`;

    return `
        <article class="product-card ${clasesFinales}">
            <div class="image-container">
                <img src="${prod.imagen}" class="product-img" loading="lazy" onerror="this.src='assets/placeholder.webp'">
            </div>
            <div class="product-info">
                <h3>${prod.nombre}</h3>
                <p class="price">${precioDisplay}</p>
                <a href="https://wa.me/593997035437?text=Hola,%20me%20interesa:%20${prod.nombre}" 
                   class="btn-add ${clsBtn}" target="_blank">
                    <i class="ph ph-whatsapp-logo"></i> ${btnTexto}
                </a>
            </div>
        </article>
    `;
}

function iniciarFiltros() {
    const botones = document.querySelectorAll('.filter-btn');
    
    botones.forEach(btn => {
        const nuevoBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(nuevoBtn, btn);
        
        nuevoBtn.addEventListener('click', (e) => {
            const filtroClic = e.target.getAttribute('data-filter');
            
            if (filtroClic === 'todos') {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            } else {
                const btnTodos = document.querySelector('.filter-btn[data-filter="todos"]');
                if (btnTodos) btnTodos.classList.remove('active');
                
                if (e.target.classList.contains('active')) {
                     e.target.classList.remove('active');
                } else {
                     e.target.classList.add('active');
                }
                
                const hayActivos = document.querySelectorAll('.filter-btn.active').length > 0;
                if (!hayActivos && btnTodos) btnTodos.classList.add('active');
            }
            aplicarFiltrosCombinados();
        });
    });

    const params = new URLSearchParams(window.location.search);
    const categoriaURL = params.get('cat');

    if (categoriaURL) {
        const btnObjetivo = document.querySelector(`.filter-btn[data-filter="${categoriaURL}"]`);
        if (btnObjetivo) {

            const btnTodos = document.querySelector('.filter-btn[data-filter="todos"]');
            if (btnTodos) btnTodos.click(); 
            
            btnObjetivo.click();
        }
    }
}

function aplicarFiltrosCombinados() {
    const tarjetas = document.querySelectorAll('.product-card');
    const botonesActivos = document.querySelectorAll('.filter-btn.active');
    const filtrosActivos = Array.from(botonesActivos).map(btn => btn.getAttribute('data-filter'));

    tarjetas.forEach(card => {
        if (filtrosActivos.includes('todos')) {
            card.classList.remove('hidden');
            return;
        }
        const cumpleTodo = filtrosActivos.every(filtro => card.classList.contains(`tag-${filtro}`));
        if (cumpleTodo) card.classList.remove('hidden');
        else card.classList.add('hidden');
    });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) menu.classList.toggle('open');
}
document.querySelectorAll('.mobile-links a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('mobileMenu');
        if (menu) menu.classList.remove('open');
    });
});
function toggleSocialMenu() {
    const popup = document.getElementById("socialPopup");
    if (popup) popup.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
});