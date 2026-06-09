# REFLEXION — Ejercicio 1.3: Flexbox

> **Instrucciones:** Reemplazá `[NÚMERO]` y `[NOMBRE]` con el número y nombre del ejercicio correspondiente. Completá este archivo DESPUÉS de terminar tu solución. Escribí con tus propias palabras.

---

## Sección 1 — Explicación de mi solución

*Describí en 150–250 palabras qué hace tu solución y cuáles fueron las decisiones principales que tomaste.*

> ✏️ **Tu respuesta aquí: En este ejercicio construí una página de galería de proyectos para el portfolio de una agencia de diseño utilizando únicamente Flexbox como herramienta de maquetación. La estructura de la página está dividida de forma clásica: un encabezado fijo arriba que no se mueve al hacer scroll, una sección de presentación o bienvenida, una botonera central para simular los filtros de categorías y, finalmente, la galería principal con seis tarjetas de proyectos. Las decisiones más importantes que tomé se basaron en lograr una estructura elástica y limpia sin enroscarme con el diseño visual. Para armar la grilla de tres tarjetas por fila sin usar CSS Grid, apliqué la propiedad `flex` combinada con una resta matemática (`calc`) para descontar el espacio de separación que definí en el contenedor. Otra decisión clave fue cómo alinear los botones de las tarjetas. Como los textos de las descripciones tienen distintos largos, convertí el contenedor de cada tarjeta en una columna de Flexbox y usé un margen automático arriba del botón. De esta forma, el navegador empuja el botón contra el fondo solo, logrando que visualmente queden todos en la misma línea y la página se vea prolija.**

---

## Sección 2 — Preguntas conceptuales

*Las preguntas conceptuales específicas de este ejercicio están en el `SPEC.md`. Respondé cada una aquí.*

### 2.1 — ¿Qué función cumple la propiedad `flex-wrap: wrap` en el contenedor de la galería?

> ✏️ **Tu respuesta: Permite que los elementos hijos dentro de un contenedor flexible pasen automáticamente a una nueva línea si se quedan sin espacio, evitando que se desborden horizontalmente o se aplasten demasiado.**

### 2.2 — ¿Para qué sirve usar `justify-content: space-between` en el encabezado de la página?

> ✏️ **Tu respuesta: Sirve para distribuir el espacio libre entre los elementos. En este caso, empuja el logo hacia el extremo izquierdo y el menú de navegación hacia el extremo derecho automáticamente, logrando que queden separados en las puntas sin tener que renegar con márgenes fijos en píxeles.**

### 2.3 — ¿Cómo funciona el truco de `margin-top: auto` dentro de una tarjeta con dirección en columna?

> ✏️ **Tu respuesta: Al cambiar la dirección de la tarjeta a columna (`flex-direction: column`), el eje principal pasa a ser vertical. Ponerle un margen automático arriba al botón hace que este ocupe todo el espacio vacío que sobra en la tarjeta, empujándolo directamente hacia el fondo de la caja sin importar si el texto de arriba es largo o corto.**

---

## Sección 3 — Decisiones técnicas

### 3.1 — ¿Qué fue lo más difícil de este ejercicio y cómo lo resolviste?

> ✏️ **Tu respuesta: Lo que más me costó fue calcular el tamaño exacto de las tarjetas para que entren tres por fila de manera prolija y no se rompa todo. Lo resolví usando la función `calc()` en CSS para decirle a las tarjetas que ocupen un tercio del ancho (33.333%) pero restándole los píxeles del espacio intermedio (`gap`) que separaba a las cajas.**

### 3.2 — ¿Qué cambiarías si tuvieras que hacerlo de nuevo?

> ✏️ **Tu respuesta: Intentaría mejorar un poco más el diseño visual y la organización en pantallas medianas. Como estuve muy concentrado en cumplir con todas las reglas obligatorias de Flexbox y lograr que las cajas se alineen bien, el estilo quedó bastante plano y básico. Si lo hiciera de nuevo, probaría reacomodar las tarjetas en dos columnas en tablets para que no quede una lista tan larga hacia abajo.**

### 3.3 — ¿Qué alternativas consideraste y por qué las descartaste?

> ✏️ **Tu respuesta: Al principio intenté separar las tarjetas de la galería poniéndole márgenes a los costados a cada una (margin-right y margin-left) o probando con justify-content: space-around. Lo descarté rápido porque usando márgenes siempre me pasaba del ancho total y la tercera tarjeta se me caía a la fila de abajo, y con el space-around los espacios no quedaban exactos. Terminé usando directamente la propiedad gap en el contenedor principal porque te resuelve las separaciones automáticamente y sin renegar.**

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
