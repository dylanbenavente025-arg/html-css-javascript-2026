# REFLEXION — Ejercicio [NÚMERO]: [NOMBRE]

> **Instrucciones:** Reemplazá `[NÚMERO]` y `[NOMBRE]` con el número y nombre del ejercicio correspondiente. Completá este archivo DESPUÉS de terminar tu solución. Escribí con tus propias palabras.

---

## Sección 1 — Explicación de mi solución

*Describí en 150–250 palabras qué hace tu solución y cuáles fueron las decisiones principales que tomaste.*

> ✏️ **Tu respuesta aquí: En este ejercicio armé un sistema de diseño escalable utilizando variables nativas de CSS (Custom Properties). La decisión principal fue dividir la arquitectura del proyecto en tres archivos separados para mantener el orden: `tokens.css` (donde guardé puros datos como paletas de colores, tamaños y espacios), `base.css` (para resetear el navegador y definir la tipografía global) y `components.css` (para armar las tarjetas, botones y formularios usando estrictamente las variables creadas). Para implementar el modo oscuro, configuré el archivo de tokens para que, cuando la etiqueta `<html>` reciba el atributo `data-theme="dark"`, los colores principales y de fondo cambien sus valores automáticamente. Finalmente, usé un script muy cortito de JavaScript para que el botón alterne ese atributo en el HTML y, además, guarde la elección del usuario en la memoria del navegador (`localStorage`) para que el tema no parpadee ni se pierda al recargar la página.**

---

## Sección 2 — Preguntas conceptuales

*Las preguntas conceptuales específicas de este ejercicio están en el `SPEC.md`. Respondé cada una aquí.*

### 2.1 — ¿Cuál es la principal ventaja de usar variables CSS (`:root`) en lugar de escribir los colores a mano en cada clase?

> ✏️ **Tu respuesta: La mayor ventaja es la facilidad de mantenimiento. Si el cliente el día de mañana quiere cambiar el color "primario" de azul a rojo, solo tengo que modificar una sola línea de código en el `:root`. Si los hubiera escrito a mano, tendría que usar "Buscar y Reemplazar" en cientos de líneas, arriesgándome a romper algo.**

### 2.2 — ¿Por qué las variables nativas de CSS son mejores que las variables de SASS para hacer un modo oscuro?

> ✏️ **Tu respuesta: Porque las variables de SASS dejan de existir una vez que el código se compila; se transforman en colores fijos en el archivo final. En cambio, las variables nativas de CSS (Custom Properties) siguen vivas en el navegador. Esto permite que JavaScript o pseudo-clases las modifiquen en tiempo real sin tener que recargar hojas de estilo diferentes.**

### 2.3 — ¿Para qué usamos `localStorage` en el script del cambio de tema?

> ✏️ **Tu respuesta: Lo usamos para darle persistencia a la decisión del usuario. Si la persona elige el tema oscuro y navega a otra página de nuestro sitio o cierra la pestaña, el `localStorage` recuerda su elección. Al volver a entrar, el script lee ese dato guardado y aplica el modo oscuro automáticamente.**

---

## Sección 3 — Decisiones técnicas

### 3.1 — ¿Qué fue lo más difícil de este ejercicio y cómo lo resolviste?

> ✏️ **Tu respuesta: Curiosamente, lo más difícil no fue la lógica del tema oscuro, sino un problema de rutas y nombres de archivos. Al separar el CSS en varias partes, la página me cargaba totalmente en blanco. Mirando la consola de desarrollo del navegador encontré un error de "MIME type", y me di cuenta de que había escrito mal el nombre del archivo `components.css` en la etiqueta `<link>` del HTML. Corregir esa letra hizo que todo funcionara perfecto.**

### 3.2 — ¿Qué cambiarías si tuvieras que hacerlo de nuevo?

> ✏️ **Tu respuesta: Intentaría implementar el requerimiento opcional de crear un tercer tema (por ejemplo, un modo "sepia" o de "alto contraste"). Ahora que entiendo cómo el archivo de variables reasigna los colores dependiendo del atributo `data-theme` que tenga el HTML, agregar un tercer esquema de colores sería bastante directo y sumaría mucha accesibilidad.**

### 3.3 — ¿Qué alternativas consideraste y por qué las descartaste?

> ✏️ **Tu respuesta: Al momento de hacer el cambio de tema, pensé en crear dos archivos CSS completamente distintos (`claro.css` y `oscuro.css`) y usar JavaScript para "desenchufar" uno y "enchufar" el otro en el `<head>`. Lo descarté porque las variables CSS nativas son el estándar actual de la industria, hacen que el cambio sea instantáneo (sin tener que descargar otro archivo) y permiten que las transiciones de color sean animadas y suaves.**

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
