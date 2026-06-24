const btnToggle = document.getElementById('toggle-tema');
const htmlElement = document.documentElement;

// 1. Al cargar la página, revisamos si el usuario ya había elegido un tema
const temaGuardado = localStorage.getItem('temaElegido');
if (temaGuardado) {
    htmlElement.setAttribute('data-theme', temaGuardado);
}

// 2. Evento al hacer clic en el botón
btnToggle.addEventListener('click', () => {
    // Averiguamos qué tema está activo ahora mismo
    const temaActual = htmlElement.getAttribute('data-theme');
    let nuevoTema = 'dark';
    
    if (temaActual === 'dark') {
        nuevoTema = 'light';
    } else if (!temaActual && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Si no hay atributo pero el sistema del usuario es oscuro, pasamos a claro
        nuevoTema = 'light';
    }

    // Aplicamos el nuevo tema al HTML
    htmlElement.setAttribute('data-theme', nuevoTema);
    
    // Guardamos la decisión en el navegador
    localStorage.setItem('temaElegido', nuevoTema);
});

// localStorage sirve para: guardar datos en la memoria del navegador del usuario de forma persistente, permitiendo que la página recuerde si eligió el modo oscuro incluso si cierra la pestaña y vuelve a entrar mañana.