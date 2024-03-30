// Función para abrir y cerrar el pop-up
function togglePopUp(galleryItem, popUp, popUpCerrar) {
    galleryItem.addEventListener('click', () => {
        popUp.classList.add('pop-up-abierto');
        popUp.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    popUpCerrar.addEventListener('click', () => {
        popUp.classList.remove('pop-up-abierto');
    });
}

// Iteración para configurar los eventos para cada galería y pop-up
for (let i = 1; i <= 12; i++) {
    const galleryItem = document.querySelector(`.gallery-item${i}`);
    const popUp = document.querySelector(`.pop-up${i}`);
    const popUpCerrar = document.querySelector(`.pop-up-cerrar${i}`);

    togglePopUp(galleryItem, popUp, popUpCerrar);
}
