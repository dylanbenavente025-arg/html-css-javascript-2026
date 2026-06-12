# REFLEXION — Ejercicio 1.4: Layout con CSS Grid

> **Instrucciones:** Reemplazá `[NÚMERO]` y `[NOMBRE]` con el número y nombre del ejercicio correspondiente. Completá este archivo DESPUÉS de terminar tu solución. Escribí con tus propias palabras.

---

## Sección 1 — Explicación de mi solución

*Describí en 150–250 palabras qué hace tu solución y cuáles fueron las decisiones principales que tomaste.*

> ✏️ **Tu respuesta aquí: Para este ejercicio armé la estructura de un magazine digital usando CSS Grid para el layout principal. La decisión más importante fue usar `grid-template-areas` en el contenedor general. En lugar de andar contando líneas y calculando anchos en píxeles, armé un "mapa" escrito donde definí qué espacio ocupaba el header, el artículo principal, la barra lateral (sidebar) y el footer. Esto me pareció genial porque dejó el código CSS súper fácil de leer. Otra decisión fuerte fue el uso de `repeat(auto-fit, minmax(250px, 1fr))` para la sección de las tarjetas de noticias. Gracias a esta regla matemática nativa de Grid, logré que la galería se adapte automáticamente al tamaño de la pantalla sin tener que escribir ni una sola *media query*. Adentro de las tarjetas, volví a usar Flexbox para cosas puntuales (como tirar el botón de "Leer más" al fondo), demostrando que las dos herramientas se pueden mezclar perfectamente: Grid para el esqueleto grande y Flexbox para los detalles de adentro.**

---

## Sección 2 — Preguntas conceptuales

*Las preguntas conceptuales específicas de este ejercicio están en el `SPEC.md`. Respondé cada una aquí.*

### 2.1 — ¿Para qué sirve usar `grid-template-areas` en lugar de ubicar los elementos por números de líneas?

> ✏️ **Tu respuesta: Sirve para ponerle nombres a las zonas de la grilla (como "header", "sidebar" o "footer") y acomodar los elementos visualmente como si estuvieras dibujando un mapa de texto. Es mucho más intuitivo y fácil de modificar en el futuro que acordarse qué número de fila o columna le tocaba a cada bloque.**

### 2.2 — ¿Cuál es la diferencia técnica entre `auto-fit` y `auto-fill` en una grilla responsiva?

> ✏️ **Tu respuesta: Si la pantalla es muy ancha y hay pocas tarjetas, `auto-fit` estira las tarjetas que existen para que ocupen todo el espacio vacío que sobra. En cambio, `auto-fill` mantiene las tarjetas en su tamaño máximo y deja los huecos en blanco, como si estuviera reservando el lugar para tarjetas invisibles.**

### 2.3 — ¿Por qué usamos Grid para la estructura principal y Flexbox adentro de las tarjetas?

> ✏️ **Tu respuesta: Porque CSS Grid es bidimensional, lo que significa que te permite controlar filas y columnas al mismo tiempo, siendo ideal para armar el esqueleto completo de la página. Flexbox es unidimensional (maneja solo una fila o solo una columna), por lo que es perfecto para alinear cosas chiquitas, como centrar un texto o acomodar los botones adentro de una tarjeta.**

---

## Sección 3 — Decisiones técnicas

### 3.1 — ¿Qué fue lo más difícil de este ejercicio y cómo lo resolviste?

> ✏️ **Tu respuesta: Lo más difícil fue hacer que la primera tarjeta ("CSS Grid a fondo") ocupara dos filas hacia abajo sin que se me rompa el resto de la galería que se armaba sola con el `auto-fit`. Lo resolví agregándole una clase especial a esa tarjeta con la regla `grid-row: span 2`. Al principio pensé que iba a quedar un hueco vacío, pero el navegador automáticamente empujó las otras tarjetas para acomodarlas a su alrededor.**

### 3.2 — ¿Qué cambiarías si tuvieras que hacerlo de nuevo?

> ✏️ **Tu respuesta: Trataría de investigar y aplicar la propiedad `grid-auto-flow: dense` que sugería el bonus del ejercicio. Leí que sirve para que Grid rellene automáticamente los espacios vacíos si te quedan tarjetas de distintos tamaños desacomodadas, pero preferí no meterlo a último momento para no arriesgarme a romper el orden de las noticias que ya funcionaba bien.**

### 3.3 — ¿Qué alternativas consideraste y por qué las descartaste?

> ✏️ **Tu respuesta: Al leer el diseño, pensé en hacer el layout general usando Flexbox, poniendo contenedores gigantes (uno izquierdo para el artículo y uno derecho para el sidebar). Lo descarté enseguida porque iba a tener que crear un montón de `divs` envolventes (wrappers) innecesarios en el HTML para lograr las dos columnas, mientras que con Grid resolví el esqueleto directamente desde el contenedor principal con un par de líneas de CSS.**

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
[ ] 2 — Entiendo lo básico
[x] 3 — Lo entiendo bien
[ ] 4 — Lo entiendo bien y puedo explicárselo a otro
[ ] 5 — Podría dar una clase sobre esto
```
