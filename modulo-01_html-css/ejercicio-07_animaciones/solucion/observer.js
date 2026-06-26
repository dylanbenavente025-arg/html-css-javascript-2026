// Seleccionamos todos los elementos que queremos observar
const elementosAnimables = document.querySelectorAll('.animar');

// Creamos el vigía
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        // Si el elemento asoma en la pantalla...
        if (entrada.isIntersecting) {
            // Le clavamos la clase visible para disparar el CSS
            entrada.target.classList.add('visible');
            
            // Opcional: Dejamos de observarlo para que solo se anime una vez
            observador.unobserve(entrada.target);
        }
    });
}, { threshold: 0.15 }); // 15% del elemento tiene que ser visible para dispararse

// Le decimos al vigía a quiénes mirar
elementosAnimables.forEach(elemento => {
    observador.observe(elemento);
});