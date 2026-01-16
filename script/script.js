/* =========================================
   SCRIPT FINAL (CORRECCIÓN DE COMAS)
   ========================================= */

// URL corregida con el truco &t= para romper caché
const URL_DATOS = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS6ABuvbpPugaqGuN7KtJxGlVDUqiGZ0g5nYdZyHfwp7NnjFq_OgcgioR3M-pjG5_ppEy1UgrrFhsOI/pub?gid=0&single=true&output=csv&t=' + Date.now();

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const respuesta = await fetch(URL_DATOS);
        const texto = await respuesta.text();
        const inventario = procesarCSV(texto);
        renderizarWeb(inventario);
    } catch (error) {
        console.error(error);
        alert("Error cargando: " + error.message);
    }
});

/* --- AQUÍ ESTABA EL PROBLEMA Y ESTA ES LA SOLUCIÓN --- */
function procesarCSV(csv) {
    const productos = [];
    const filas = csv.split('\n');

    for (let i = 1; i < filas.length; i++) {
        const fila = filas[i].trim();
        if (fila) {
            // MAGIA: Esta expresión regular separa por comas PERO ignora las que están dentro de comillas ""
            // Así lee "cumpleanos, ramo" como UN solo dato, no dos.
            const regexCSV = /,(?=(?:(?:[^"]*"){2})*[^"]*$)/;
            const cols = fila.split(regexCSV);
            
            if (cols.length >= 1) {
                const idRaw = cols[0].trim();
                if (!idRaw) continue;

                // Limpiamos las comillas extra que pone Google ("dato" -> dato)
                let etiquetasRaw = cols[4] ? cols[4].replace(/"/g, '').toLowerCase().trim() : "todos";
                
                // Extraemos precio y nombre limpiando comillas también
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
    const grid = document.getElementById("grid-principal"); // Catálogo
    const home = document.getElementById("contenedor-productos"); // Inicio

    // Lógica Home
    if (home) {
        home.innerHTML = "";
        productos.slice(0, 8).forEach(prod => home.innerHTML += htmlTarjeta(prod, ""));
        return;
    }

    // Lógica Catálogo
    if (grid) {
        grid.innerHTML = "";
        productos.forEach(prod => {
            // Convertimos las etiquetas limpias en clases
            const clasesTags = prod.tags.split(',')
                .map(t => `tag-${t.trim()}`)
                .join(' ');

            // Agregamos tag-todos para que el primer botón siempre funcione
            grid.innerHTML += htmlTarjeta(prod, `${clasesTags} tag-todos`);
        });
        iniciarFiltros();
    }
}

function htmlTarjeta(prod, clases) {
    const precioDisplay = prod.precio > 0 ? `$${prod.precio.toFixed(2)}` : 'COTIZAR';
    const btnTexto = prod.precio > 0 ? "Pedir" : "Consultar";
    const clsBtn = prod.precio > 0 ? "" : "btn-cotizar"; 
    
    return `
        <article class="product-card ${clases}">
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
        // Clonamos el nodo para eliminar listeners viejos (limpieza de memoria)
        const nuevoBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(nuevoBtn, btn);
        
        nuevoBtn.addEventListener('click', (e) => {
            const filtroClic = e.target.getAttribute('data-filter');
            
            // CASO A: Clic en "Ver Todo"
            if (filtroClic === 'todos') {
                // Apagar todos los demás
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            } 
            // CASO B: Clic en cualquier otro filtro
            else {
                // 1. Apagar "Ver Todo" si está encendido
                const btnTodos = document.querySelector('.filter-btn[data-filter="todos"]');
                if (btnTodos) btnTodos.classList.remove('active');

                // 2. Toggle (Prender/Apagar) el botón clicado
                e.target.classList.toggle('active');

                // 3. Si no queda ninguno activo, volvemos a encender "Ver Todo"
                const hayActivos = document.querySelectorAll('.filter-btn.active').length > 0;
                if (!hayActivos && btnTodos) {
                    btnTodos.classList.add('active');
                }
            }

            // 4. Ejecutar el filtrado con TODOS los botones que quedaron activos
            aplicarFiltrosCombinados();
        });
    });
}

function aplicarFiltrosCombinados() {
    const tarjetas = document.querySelectorAll('.product-card');
    
    // 1. Obtener lista de filtros activos (Ej: ['amor', 'rosas'])
    const botonesActivos = document.querySelectorAll('.filter-btn.active');
    const filtrosActivos = Array.from(botonesActivos).map(btn => btn.getAttribute('data-filter'));

    // 2. Filtrar
    tarjetas.forEach(card => {
        // Si "todos" está activo, mostramos todo
        if (filtrosActivos.includes('todos')) {
            card.classList.remove('hidden');
            return;
        }

        // Lógica AND: La tarjeta debe tener TODAS las clases activas
        // Verificamos si la tarjeta cumple con CADA UNO de los filtros seleccionados
        const cumpleTodo = filtrosActivos.every(filtro => card.classList.contains(`tag-${filtro}`));

        if (cumpleTodo) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Menú Social
function toggleSocialMenu() {
    const popup = document.getElementById("socialPopup");
    if (popup) popup.classList.toggle("active");
}