/**
 * 1. BASE DE DATOS Y CONFIGURACIÓN
 */

// --- PANEL DE CONTROL DEL PROYECTO ---
const PROYECTO_MOMENTO_ID = 'velbet'; 
const NOMBRE_PROYECTO_PUBLICO = 'Over the Sun'; 
// -------------------------------------

const misFotos = [
    // 1. FOTO DE LA SEMANA (semana: true)
    { 
        archivo: 'foto-semana.jpg', 
        titulo: 'FOTO SEMANAL', 
        proyecto: 'musica', 
        desc: 'Selección de la semana.', 
        clase: 'wide', 
        semana: true 
    },
    
    // 2. FOTO PARA EL BANNER (portada: true)
    { 
        archivo: 'Velbet1.jpg', 
        titulo: 'Over the Sun', 
        proyecto: 'velbet', 
        desc: 'Estética análoga y sombras profundas.', 
        clase: 'wide',
        portada: true 
    },
    
    // RESTO DE FOTOS (Tus fotos actuales)
    { archivo: 'Velbet1.jpg', titulo: 'Kodak 35mm', proyecto: 'velbet', desc: 'Inspiración Ektachrome.', clase: 'tall' },
    { archivo: 'unperro-1.jpg', titulo: 'Live Session', proyecto: 'musica', desc: 'Captura en vivo.', clase: 'tall' },
    { archivo: 'food1.jpg', titulo: 'Styling', proyecto: 'gastronomia', desc: 'Texturas.', clase: 'wide' },
    { archivo: 'retrato1.jpg', titulo: 'Shadows', proyecto: 'retrato', desc: 'Luz de estudio.', clase: 'tall' },
    { archivo: 'Velbet2.jpg', titulo: 'Sunset Vibes', proyecto: 'velbet', desc: 'Colores cálidos.', clase: 'tall' },
    { archivo: 'Velbet3.jpg', titulo: 'suun', proyecto: 'velbet', desc: 'Color calido.', clase: 'tall' },
    { archivo: 'Velbet4.jpg', titulo: 'pink.', proyecto: 'velbet', desc: 'lentes de cerca.', clase: 'tall' },
    { archivo: 'Velbet5.jpg', titulo: 'geen', proyecto: 'velbet', desc: 'inspiración analoga.', clase: 'tall' },
    { archivo: 'Velbet6.jpg', titulo: 'Close', proyecto: 'velbet', desc: 'close.', clase: 'tall' },
    { archivo: 'Velbet7.jpg', titulo: 'Contraluz', proyecto: 'velbet', desc: 'Contraluz.', clase: 'tall' },
    { archivo: 'Velbet8.jpg', titulo: 'Siemprecool', proyecto: 'velbet', desc: 'Inspiracion moderna', clase: 'tall' },
    { archivo: 'Velbet9.jpg', titulo: 'Busqueda', proyecto: 'velbet', desc: 'Mirada llevadora.', clase: 'tall' },
    { archivo: 'Velbet10.jpg', titulo: 'Iconic', proyecto: 'velbet', desc: 'Texturas y luz.', clase: 'tall' },
    { archivo: 'Velbet11.jpg', titulo: 'Luz natural', proyecto: 'velbet', desc: 'Luz natural.', clase: 'tall' },
    { archivo: 'Velbet12.jpg', titulo: 'Detalles', proyecto: 'velbet', desc: 'Detalles cercanos.', clase: 'tall' },
    { archivo: 'Velbet13.jpg', titulo: 'Cotidiana', proyecto: 'velbet', desc: 'Cotidiana.', clase: 'tall' },
    { archivo: 'food2.jpg', titulo: 'Hicebrake', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' },
    { archivo: 'food3.jpg', titulo: 'Sushicircle', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' },
    { archivo: 'food4.jpg', titulo: 'personalpizza', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' },
    { archivo: 'food5.jpg', titulo: 'Tormentataco', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' },
    { archivo: 'food6.jpg', titulo: 'Diseño', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' },
    { archivo: 'food7.jpg', titulo: 'Hamburguesa1', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' },
    { archivo: 'food8.jpg', titulo: 'Hamburguesa2', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' },
    { archivo: 'food9.jpg', titulo: 'Hamburguesa3', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' },
    { archivo: 'food10.jpg', titulo: 'composision Cenital', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' }, 
    { archivo: 'food11.jpg', titulo: 'Withe', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' },
    { archivo: 'food12.jpg', titulo: 'Torta', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' },
    { archivo: 'food13.jpg', titulo: 'torta2', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' },
    { archivo: 'food14.jpg', titulo: 'licuado', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' },
    { archivo: 'food15.jpg', titulo: 'Café', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' },
    { archivo: 'food16.jpg', titulo: 'Chocolate', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' },
    { archivo: 'food17.jpg', titulo: 'Peruanfood', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' },
    { archivo: 'food18.jpg', titulo: 'Bebida para adultos', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' },
    { archivo: 'food19.jpg', titulo: 'Estilo1', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' },
    { archivo: 'food20.jpg', titulo: 'Estilo2', proyecto: 'gastronomia', desc: 'Estética moderna.', clase: 'wide' },
];

/**
 * 2. FUNCIONES DE CARGA DINÁMICA
 */

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

// A. FOTO DE LA SEMANA (Tamaño Ajustado)
function cargarFotoSemana() {
    const contenedor = document.getElementById('foto-semana-container');
    const tituloSemana = document.getElementById('semana-titulo');
    const descSemana = document.getElementById('semana-desc');
    
    if (!contenedor) return;

    const fotoSemana = misFotos.find(f => f.semana === true);

    if (fotoSemana) {
        contenedor.innerHTML = `
            <img src="assets/${fotoSemana.archivo}" alt="Foto de la semana" 
                 style="width: 100%; height: auto; max-height: 70vh; object-fit: contain; cursor: pointer; display: block;">
        `;
        
        if (tituloSemana) tituloSemana.innerText = fotoSemana.titulo.toUpperCase();
        if (descSemana) descSemana.innerText = fotoSemana.desc;

        contenedor.onclick = () => openModal(`assets/${fotoSemana.archivo}`, fotoSemana.titulo, fotoSemana.desc);
    }
}

// B. GENERADOR DE BOTONES DINÁMICOS (NUEVO: Para Gallery.html)
function generarBotonesFiltro() {
    const filterBar = document.querySelector('.filter-bar');
    if (!filterBar) return; // Si no existe (estamos en index), no hace nada

    // 1. Obtenemos las categorías únicas de tu base de datos
    const proyectosUnicos = [...new Set(misFotos.map(foto => foto.proyecto))];
    
    // 2. Limpiamos y creamos el botón TODO
    filterBar.innerHTML = '';
    const btnTodo = document.createElement('button');
    btnTodo.className = 'highlight-link active-filter'; 
    btnTodo.innerText = 'TODO';
    btnTodo.onclick = () => {
        activarBoton(btnTodo);
        generarGaleria('todos');
    };
    filterBar.appendChild(btnTodo);

    // 3. Creamos botones para cada proyecto encontrado
    proyectosUnicos.forEach(proyecto => {
        if(!proyecto) return; // Evitar vacíos
        const btn = document.createElement('button');
        btn.className = 'highlight-link';
        btn.innerText = proyecto.toUpperCase();
        btn.onclick = () => {
            activarBoton(btn);
            generarGaleria(proyecto);
        };
        filterBar.appendChild(btn);
    });
}

// Ayudante para cambiar estilos al botón activo
function activarBoton(botonActivo) {
    document.querySelectorAll('.filter-bar button').forEach(b => {
        b.classList.remove('active-filter');
        // Restaurar estilo base (opcional, depende de tu css)
        b.style.backgroundColor = 'transparent';
        b.style.color = 'var(--sand-color)'; 
    });
    
    botonActivo.classList.add('active-filter');
    botonActivo.style.backgroundColor = 'var(--sand-color)';
    botonActivo.style.color = '#000';
}

// C. GALERÍA PRINCIPAL (Con lógica de límite para Index)
function generarGaleria(filtro = 'todos', limite = 0) {
    const contenedor = document.getElementById('dynamic-gallery');
    if (!contenedor) return; 
    
    contenedor.innerHTML = "";
    
    // Filtrar
    let lista = filtro === 'todos' ? misFotos : misFotos.filter(f => f.proyecto === filtro);
    
    // Mezclar
    lista = shuffle(lista);

    // Limitar si es necesario (ej: Index)
    if (limite > 0) {
        lista = lista.slice(0, limite);
    }
    
    lista.forEach(foto => {
        const item = document.createElement('div');
        // Las clases 'wide' y 'tall' ayudan al grid a encajar mejor
        item.className = `collage-item ${foto.clase || ''}`;
        item.innerHTML = `<img src="assets/${foto.archivo}" alt="${foto.titulo}" loading="lazy">`;
        item.onclick = () => openModal(`assets/${foto.archivo}`, foto.titulo, foto.desc);
        contenedor.appendChild(item);
    });
}

// D. BANNER DE EXPOSICIÓN
function inicializarBanner() {
    const banner = document.getElementById('momento-banner');
    const tituloElemento = document.getElementById('momento-titulo-texto');
    if (!banner) return;

    // Prioridad: Foto con 'portada: true' del proyecto actual
    let portada = misFotos.find(f => f.proyecto === PROYECTO_MOMENTO_ID && f.portada === true);
    // Fallback: Primera foto del proyecto actual
    if (!portada) {
        portada = misFotos.find(f => f.proyecto === PROYECTO_MOMENTO_ID);
    }

    if (portada) {
        banner.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('assets/${portada.archivo}')`;
    }
    
    if (tituloElemento) {
        tituloElemento.innerText = NOMBRE_PROYECTO_PUBLICO.toUpperCase();
    }
}

// E. PLANTILLA DE PROYECTO ESPECÍFICO
function cargarPlantillaProyecto() {
    const grid = document.getElementById('project-dynamic-grid');
    const tituloElemento = document.getElementById('project-main-title');
    
    if (!grid) return;

    if (tituloElemento) {
        tituloElemento.innerText = NOMBRE_PROYECTO_PUBLICO;
    }
    
    const fotos = misFotos.filter(f => f.proyecto === PROYECTO_MOMENTO_ID);
    
    grid.innerHTML = "";
    fotos.forEach(foto => {
        const img = document.createElement('img');
        img.src = `assets/${foto.archivo}`;
        img.alt = foto.titulo;
        img.onclick = () => openModal(img.src, foto.titulo, foto.desc);
        grid.appendChild(img);
    });
}

/**
 * 3. MODAL Y EFECTOS VISUALES
 */

window.openModal = (src, title, desc) => {
    const modal = document.getElementById("myModal");
    if (!modal) return;

    document.getElementById("modal-media").innerHTML = `<img src="${src}" style="max-height: 80vh; object-fit: contain;">`;
    document.getElementById("modal-title").innerText = title;
    
    const descElemento = document.getElementById("modal-desc");
    if (descElemento) {
        descElemento.innerHTML = `<p style="color:#888">${desc}</p>`;
    }

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
};

window.closeModal = () => {
    const modal = document.getElementById("myModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};

/**
 * 4. INICIALIZACIÓN
 */
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded'); 
    
    cargarFotoSemana(); 
    inicializarBanner();
    cargarPlantillaProyecto();
    generarBotonesFiltro(); // <-- Genera los botones en gallery.html
    
    // --- LÓGICA DE GALERÍA INTELIGENTE ---
    // Detectamos si estamos en el Index buscando el banner de "Muestra Especial"
    const esIndex = document.getElementById('momento-banner');
    
    if (esIndex) {
        // En Index: Máximo 6 fotos
        generarGaleria('todos', 6);
    } else {
        // En Galería: Todas las fotos (0 significa sin límite)
        generarGaleria('todos', 0);
    }
    
    // Lógica del Hero Aleatorio (Solo para Index)
    const heroBg = document.getElementById('hero-bg-container');
    if(heroBg) {
        const slides = shuffle(misFotos).slice(0, 5);
        slides.forEach((f, i) => {
            const img = document.createElement('img');
            img.src = `assets/${f.archivo}`;
            img.className = 'bg-slide' + (i === 0 ? ' active' : '');
            heroBg.appendChild(img);
        });

        let currentSlide = 0;
        setInterval(() => {
            const allSlides = heroBg.querySelectorAll('.bg-slide');
            if (allSlides.length > 0) {
                allSlides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % allSlides.length;
                allSlides[currentSlide].classList.add('active');
            }
        }, 5000);
    }
});