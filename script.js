const misFotos = [
    { archivo: 'food1.jpg', titulo: 'Hambuguesa c pap', desc: 'Descripción de tu proyecto artístico.', clase: 'tall' },
    { archivo: 'food2.jpg', titulo: 'Título de Obra 2', desc: 'Exploración de luz y sombra.', clase: 'wide' },
    { archivo: 'food3.jpg', titulo: 'Título de Obra 3', desc: 'Dirección creativa y estilismo.', clase: '' },
    { archivo: 'food4.jpg', titulo: 'Título de Obra 4', desc: 'Proyecto editorial.', clase: '' },
    { archivo: 'food5.jpg', titulo: 'Título de Obra 5', desc: 'Fotografía de producto.', clase: 'wide' },
    { archivo: 'food6.jpg', titulo: 'Título de Obra 1', desc: 'Descripción de tu proyecto artístico.', clase: 'tall' },
    { archivo: 'food7.jpg', titulo: 'Título de Obra 2', desc: 'Exploración de luz y sombra.', clase: 'wide' },
    { archivo: 'food8.jpg', titulo: 'Título de Obra 3', desc: 'Dirección creativa y estilismo.', clase: '' },
    { archivo: 'food9.jpg', titulo: 'Título de Obra 4', desc: 'Proyecto editorial.', clase: '' },
    { archivo: 'food10.jpg', titulo: 'Título de Obra 5', desc: 'Fotografía de producto.', clase: 'wide' },
    { archivo: 'food11.jpg', titulo: 'Título de Obra 1', desc: 'Descripción de tu proyecto artístico.', clase: 'tall' },
    { archivo: 'food12.jpg', titulo: 'Título de Obra 2', desc: 'Exploración de luz y sombra.', clase: 'wide' },
    { archivo: 'music1.jpg', titulo: 'Título de Obra 3', desc: 'Dirección creativa y estilismo.', clase: '' },
    { archivo: 'music2.jpg', titulo: 'Título de Obra 4', desc: 'Proyecto editorial.', clase: '' },
    { archivo: 'music3.jpg', titulo: 'Título de Obra 5', desc: 'Fotografía de producto.', clase: 'wide' },
    { archivo: 'music4.jpg', titulo: 'Título de Obra 1', desc: 'Descripción de tu proyecto artístico.', clase: 'tall' },
    { archivo: 'music5.jpg', titulo: 'Título de Obra 2', desc: 'Exploración de luz y sombra.', clase: 'wide' },
    { archivo: 'music6.jpg', titulo: 'Título de Obra 3', desc: 'Dirección creativa y estilismo.', clase: '' }, 
    { archivo: 'music7.jpg', titulo: 'Título de Obra 4', desc: 'Proyecto editorial.', clase: '' },
    { archivo: 'music8.jpg', titulo: 'Título de Obra 5', desc: 'Fotografía de producto.', clase: 'wide' },
    { archivo: 'retrato1.jpg', titulo: 'Título de Obra 1', desc: 'Descripción de tu proyecto artístico.', clase: 'tall' },
    { archivo: 'retrato2.jpg', titulo: 'Título de Obra 2', desc: 'Exploración de luz y sombra.', clase: 'wide' },
    { archivo: 'retrato3.jpg', titulo: 'Título de Obra 3', desc: 'Dirección creativa y estilismo.', clase: '' },
    { archivo: 'retrato4.jpg', titulo: 'Título de Obra 4', desc: 'Proyecto editorial.', clase: '' },
    { archivo: 'retrato5.jpg', titulo: 'Título de Obra 5', desc: 'Fotografía de producto.', clase: 'wide' },
    { archivo: 'retrato6.jpg', titulo: 'Título de Obra 1', desc: 'Descripción de tu proyecto artístico.', clase: 'tall' },
    { archivo: 'retrato7.jpg', titulo: 'Título de Obra 2', desc: 'Exploración de luz y sombra.', clase: 'wide' },
    { archivo: 'foto-semana.jpg', titulo: 'Título de Obra 3', desc: 'Dirección creativa y estilismo.', clase: '' },
    { archivo: 'landscape.jpg', titulo: 'Título de Obra 4', desc: 'Proyecto editorial.', clase: '' },
    { archivo: 'retrato10.jpg', titulo: 'Título de Obra 5', desc: 'Fotografía de producto.', clase: 'wide' }
];

function generarGaleriaDinamica() {
    const contenedor = document.getElementById('dynamic-gallery');
    if (!contenedor) return; 
    contenedor.innerHTML = "";
    misFotos.forEach(foto => {
        const item = document.createElement('div');
        item.className = `collage-item ${foto.clase}`;
        item.onclick = () => openModal(`assets/${foto.archivo}`, foto.titulo, foto.desc);
        item.innerHTML = `<img src="assets/${foto.archivo}" alt="${foto.titulo}" loading="lazy">`;
        contenedor.appendChild(item);
    });
}

function inicializarHeroAleatorio() {
    const bgContainer = document.getElementById('hero-bg-container');
    if (!bgContainer) return;
    bgContainer.innerHTML = "";
    const seleccionadas = [...misFotos].sort(() => 0.5 - Math.random()).slice(0, 5);
    seleccionadas.forEach((foto, index) => {
        const img = document.createElement('img');
        img.src = `assets/${foto.archivo}`;
        img.className = 'bg-slide';
        if (index === 0) img.classList.add('active'); 
        bgContainer.appendChild(img);
    });
    let current = 0;
    const slides = bgContainer.querySelectorAll('.bg-slide');
    if (slides.length > 1) {
        setInterval(() => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 4500);
    }
}

window.openModal = function(src, title, desc, isVideo = false) {
    const modal = document.getElementById("myModal");
    const mediaContainer = document.getElementById("modal-media");
    if (!modal) return;
    mediaContainer.innerHTML = isVideo ? 
        `<video controls autoplay loop src="${src}" style="width:100%; max-height:75vh;"></video>` : 
        `<img src="${src}" style="max-width:100%; max-height:75vh; object-fit:contain;">`;
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-desc").innerText = desc;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
};

window.closeModal = function() {
    const modal = document.getElementById("myModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded'); // Activa animación de nombre
    generarGaleriaDinamica();
    inicializarHeroAleatorio();
});