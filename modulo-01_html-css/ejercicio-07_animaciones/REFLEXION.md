# REFLEXION — Ejercicio [NÚMERO]: [NOMBRE]

> **Instrucciones:** Reemplazá `[NÚMERO]` y `[NOMBRE]` con el número y nombre del ejercicio correspondiente. Completá este archivo DESPUÉS de terminar tu solución. Escribí con tus propias palabras.

---

## Sección 1 — Explicación de mi solución

*Describí en 150–250 palabras qué hace tu solución y cuáles fueron las decisiones principales que tomaste.*

> ✏️ **Tu respuesta aquí: Para esta landing page decidí implementar un sistema de animaciones enfocado 100% en el rendimiento y la fluidez. En lugar de usar librerías pesadas, armé las animaciones directamente con `@keyframes` en CSS. La decisión más importante fue usar la API de `IntersectionObserver` en JavaScript con apenas unas 10 líneas de código; este script solo actúa como un "vigía" que le avisa al HTML cuándo un elemento entra en la pantalla agregándole la clase `.visible`. Todo el trabajo pesado visual lo hace el CSS. Para lograr que los elementos de las tarjetas aparezcan uno por uno (escalonados), en lugar de crear muchas clases CSS distintas, usé variables nativas (`--delay`) directamente en el HTML. Además, me aseguré de incluir la media query `prefers-reduced-motion` para apagar todas las animaciones automáticamente si el sistema operativo del usuario así lo requiere por motivos de salud o accesibilidad.**

---

## Sección 2 — Preguntas conceptuales

*Las preguntas conceptuales específicas de este ejercicio están en el `SPEC.md`. Respondé cada una aquí.*

### 2.1 — ¿Por qué es fundamental animar usando `transform` y `opacity` en lugar de propiedades como `margin`, `top` o `width`?

> ✏️ **Tu respuesta: Porque propiedades como el ancho o los márgenes obligan al navegador a recalcular el tamaño y la posición de toda la página en cada fotograma (un proceso llamado *reflow*), lo que hace que la animación se vea trabada. En cambio, `transform` y `opacity` son procesadas directamente por la placa de video, logrando animaciones ultra fluidas a 60 fps sin esfuerzo.**

### 2.2 — ¿Por qué usamos `IntersectionObserver` en lugar del clásico evento de scroll (`window.addEventListener('scroll')`)?

> ✏️ **Tu respuesta: El evento de scroll es muy costoso para el rendimiento de la página porque se dispara cientos de veces por segundo cada vez que el usuario mueve la rueda del mouse. El `IntersectionObserver` es una herramienta moderna nativa del navegador que vigila los elementos de forma asíncrona y solo gasta recursos en el milisegundo exacto en el que el elemento asoma en la pantalla.**

### 2.3 — ¿Para qué sirve la directiva `@media (prefers-reduced-motion: reduce)`?

> ✏️ **Tu respuesta: Es una regla de accesibilidad clave. Sirve para detectar si el usuario configuró su celular o computadora para reducir el movimiento en pantalla. Al incluirla, le decimos al CSS que desactive las transiciones y animaciones, evitando causar mareos o problemas de salud a personas con trastornos vestibulares.**

---

## Sección 3 — Decisiones técnicas

### 3.1 — ¿Qué fue lo más difícil de este ejercicio y cómo lo resolviste?

> ✏️ **Tu respuesta: Lo que más me costó fue el loader (el círculo de carga inicial). Como lo animé con `infinite` para que girara para siempre, se quedaba pegado en la parte de arriba de la página ocupando espacio y molestando al leer. Lo resolví agregándole una animación extra al contenedor padre que, después de un par de segundos, le baja la opacidad a 0, colapsa su altura y lo oculta del todo para que deje de estorbar.**

### 3.2 — ¿Qué cambiarías si tuvieras que hacerlo de nuevo?

> ✏️ **Tu respuesta: Me gustaría implementar el bonus opcional del efecto "typewriter" (máquina de escribir) usando steps() en los @keyframes para el título principal. Creo que le daría un toque mucho más dinámico y tecno al Hero Section en lugar de hacer que las palabras simplemente aparezcan con un fade in. No lo implementé ahora porque me costó un poco entender cómo calcular la cantidad exacta de pasos (steps) según las letras del texto, pero es algo que sin duda sumaría en el futuro.**

### 3.3 — ¿Qué alternativas consideraste y por qué las descartaste?

> ✏️ **Tu respuesta: Al principio estuve a punto de descargar una librería famosa que se llama *Animate.css* para ahorrarme escribir todos los `@keyframes` a mano. La terminé descartando (además de porque el SPEC lo prohibía) porque me iba a obligar a cargar cientos de animaciones que no iba a usar, cuando en realidad solo necesitaba tres efectos muy simples (fade, slide up y slide side).**

---

## Sección 4 — Declaración de uso de IA

```
[ ] Resolví el ejercicio completamente sin ayuda de IA
[ ] Usé IA para entender algún concepto, pero escribí el código yo
[x] Usé IA para generar un borrador que luego modifiqué y entendí
[ ] Usé IA extensamente y completé la reflexión para entender lo que hice
```

*Si usaste IA, describí brevemente cómo:*

> ✏️ **Tu respuesta (opcional si no usaste IA):**

---

## Sección 5 — Autoevaluación

En una escala del 1 al 5, ¿cuánto entendés ahora el concepto central de este ejercicio?

```
[ ] 1 — Muy poco, necesito repasar
[x] 2 — Entiendo lo básico
[ ] 3 — Lo entiendo bien
[ ] 4 — Lo entiendo bien y puedo explicárselo a otro
[ ] 5 — Podría dar una clase sobre esto
```
