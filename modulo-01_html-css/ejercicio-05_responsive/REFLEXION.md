# REFLEXION — Ejercicio 1.5: Diseño Responsive

> **Instrucciones:** Reemplazá `[NÚMERO]` y `[NOMBRE]` con el número y nombre del ejercicio correspondiente. Completá este archivo DESPUÉS de terminar tu solución. Escribí con tus propias palabras.

---

## Sección 1 — Explicación de mi solución

*Describí en 150–250 palabras qué hace tu solución y cuáles fueron las decisiones principales que tomaste.*

> ✏️ **Tu respuesta aquí: En este ejercicio transformé la grilla estática del magazine en una página totalmente responsive aplicando la estrategia de "Mobile-First". La decisión principal fue cambiar mi forma de pensar el código: en lugar de empezar diseñando para monitores grandes y luego achicar todo, escribí el CSS base pensando únicamente en celulares. Por defecto, todo el sitio se apila en una sola columna usando Flexbox básico y los tamaños de letra son más chicos. A medida que la pantalla se agranda, fui agregando `media queries` con `min-width`. En el breakpoint de 640px (tablets) hice que el menú de hamburguesa desaparezca y se muestren los enlaces en fila. Finalmente, en el breakpoint de 1024px (escritorio), reemplacé la estructura de una columna por el CSS Grid complejo que habíamos armado en el ejercicio anterior. También ajusté la legibilidad del texto con `max-width` y `line-height` diferentes según el tamaño de la pantalla, para que leer el artículo sea cómodo en cualquier dispositivo.**

---

## Sección 2 — Preguntas conceptuales

*Las preguntas conceptuales específicas de este ejercicio están en el `SPEC.md`. Respondé cada una aquí.*

### 2.1 — ¿Por qué en la estrategia Mobile-First se usan media queries con `min-width` en lugar de `max-width`?

> ✏️ **Tu respuesta: Porque la idea es que el código CSS principal (el que está suelto arriba de todo) sea el del celular. A partir de ahí, usamos `min-width` para decirle al navegador: "cuando la pantalla mida como mínimo 640px, agregá estos estilos extra". Es decir, vamos sumando diseño y complejidad a medida que la pantalla crece, en lugar de arrancar con algo complejo y tratar de esconder cosas al achicar.**

### 2.2 — ¿Cómo funciona técnicamente el menú hamburguesa usando solo CSS sin JavaScript?

> ✏️ **Tu respuesta: Tu respuesta: Funciona gracias al truco del "Checkbox Hack". Se pone un `<input type="checkbox">` oculto y un `<label>` con el icono de la hamburguesa. Como están vinculados, al tocar el icono marcamos el checkbox. En el CSS usamos el selector de hermanos (`~` o `+`) para decirle que cuando ese checkbox tenga el estado `:checked`, cambie el menú de `display: none` a `display: flex` para que aparezca en pantalla.**

### 2.3 — ¿Por qué es importante poner un límite de ancho (ej: `max-width: 65ch`) a los párrafos en la versión de escritorio?

> ✏️ **Tu respuesta: Porque si dejamos que un párrafo ocupe todo el ancho de un monitor grande, la línea de texto se vuelve larguísima. Cuando el usuario termina de leer esa línea y tiene que mover los ojos hacia la izquierda para encontrar el principio de la siguiente, se pierde. Limitarlo a unos 65-70 caracteres por línea hace que la lectura sea mucho más rápida y menos cansadora.**

---

## Sección 3 — Decisiones técnicas

### 3.1 — ¿Qué fue lo más difícil de este ejercicio y cómo lo resolviste?

> ✏️ **Tu respuesta: Lo que más me costó entender fue el truco del menú de hamburguesa sin usar JavaScript. Al principio no lograba que el menú apareciera al hacer clic porque estaba ubicando mal la etiqueta `<nav>` en el HTML. Lo resolví dándome cuenta de que el menú (`nav`) tiene que estar exactamente en el mismo nivel (ser hermano) del `checkbox` oculto en el código HTML para que el selector `~` del CSS lo pueda encontrar y afectar.**

### 3.2 — ¿Qué cambiarías si tuvieras que hacerlo de nuevo?

> ✏️ **Tu respuesta: Le agregaría transiciones suaves (`transition` en CSS). Como el ejercicio pedía lo funcional, cuando agrandás la pantalla o tocás el menú, las cosas aparecen o cambian de golpe. Si lo hiciera de nuevo, investigaría cómo hacer que el menú hamburguesa se deslice desde arriba o que las tarjetas se reacomoden de forma un poco más fluida y profesional.**

### 3.3 — ¿Qué alternativas consideraste y por qué las descartaste?

> ✏️ **Tu respuesta: Al principio consideré hacer dos archivos CSS totalmente separados (uno `mobile.css` y otro `desktop.css`) para no mezclar el código y cargarlos según la pantalla en el HTML. Lo descarté porque me di cuenta de que iba a terminar repitiendo un montón de colores, tipografías y estilos base en los dos archivos. Poner todo en el mismo archivo usando media queries mantiene el código centralizado y evita la repetición.**

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
