# REFLEXION — Ejercicio 1.2: Formularios Accesibles

> **Instrucciones:** Reemplazá `[NÚMERO]` y `[NOMBRE]` con el número y nombre del ejercicio correspondiente. Completá este archivo DESPUÉS de terminar tu solución. Escribí con tus propias palabras.

---

## Sección 1 — Explicación de mi solución

*Describí en 150–250 palabras qué hace tu solución y cuáles fueron las decisiones principales que tomaste.*

> ✏️ **Tu respuesta aquí: 
Esta solución implementa un formulario de contacto web priorizando estrictamente la accesibilidad y la validación nativa, prescindiendo por completo de JavaScript. La estructura principal se organizó utilizando etiquetas semánticas como `<form>`, `<fieldset>` y `<legend>` para agrupar lógicamente los datos personales y los detalles de la consulta, lo cual es fundamental para que los lectores de pantalla contextualicen la información y no lean campos aislados.

Una decisión clave en la arquitectura del HTML fue vincular explícitamente cada `<label>` con su `input` correspondiente mediante los atributos `for` e `id`. Esto mejora significativamente el área de interacción táctil y asegura que las tecnologías de asistencia anuncien correctamente cada campo. Además, se implementaron validaciones HTML5 (`required`, `pattern`, `type="email"`) combinadas con atributos ARIA (`aria-required`, `aria-describedby`) para vincular los mensajes de error al campo específico. 

En cuanto a la capa de presentación (CSS), opté por un enfoque rústico pero altamente funcional. Utilicé pseudo-clases CSS (`:focus`, `:valid`, `:invalid`) para dar retroalimentación visual inmediata. Para evitar que los campos se marcaran como inválidos al cargar la página por primera vez, implementé el selector `:not(:placeholder-shown)`, asegurando que el error de validación solo aparezca una vez que el usuario haya interactuado con el formulario, cumpliendo así con los estándares WCAG sin romper la restricción de no usar JS.**

---

## Sección 2 — Preguntas conceptuales

*Las preguntas conceptuales específicas de este ejercicio están en el `SPEC.md`. Respondé cada una aquí.*

### 2.1 — [Pregunta del SPEC]

> ✏️ **Tu respuesta: El `placeholder` es temporal y desaparece en cuanto el usuario empieza a escribir, lo que genera pérdida de contexto y problemas cognitivos. El `<label>` explícito con `for` asegura que el texto esté siempre visible y, a nivel código, vincula la etiqueta con el input. Esto permite que los lectores de pantalla anuncien correctamente qué dato se solicita y amplía el área de clic (al tocar el texto, se activa el campo).**

### 2.2 — [Pregunta del SPEC]

> ✏️ **Tu respuesta: `required` es un atributo funcional nativo de HTML5 que bloquea activamente el envío del formulario si el campo está vacío, mostrando una alerta del navegador. Por otro lado, `aria-required="true"` no tiene ningún efecto funcional sobre el envío; es una capa de semántica adicional y exclusiva para que las tecnologías de asistencia (como lectores de pantalla) informen al usuario mediante voz que ese campo es de llenado obligatorio.**

### 2.3 — [Pregunta del SPEC]

> ✏️ **Tu respuesta: Forzar el orden con un `tabindex` positivo rompe el flujo natural de navegación del documento (que es de arriba hacia abajo y de izquierda a derecha). Si se modifica el HTML en el futuro, el salto del tabulador se vuelve impredecible y confuso para usuarios que no usan mouse. Lo correcto es dejar que el orden visual del código dicte el orden del tabulador implícito.**

---

## Sección 3 — Decisiones técnicas

### 3.1 — ¿Qué fue lo más difícil de este ejercicio y cómo lo resolviste?

> ✏️ **Tu respuesta: El mayor desafío técnico fue lograr que los mensajes de error y los bordes rojos de validación no aparecieran apenas se carga la página vacía, considerando la restricción estricta de no utilizar JavaScript. Lo resolví aplicando lógica a través de CSS puro, combinando la pseudo-clase `:invalid` con `:not(:placeholder-shown)`. De esta manera, el navegador solo evalúa y muestra el estado de error si el campo dejó de mostrar el placeholder (es decir, si el usuario interactuó con él).**

### 3.2 — ¿Qué cambiarías si tuvieras que hacerlo de nuevo?

> ✏️ **Tu respuesta: Me enfocaría en mejorar un poco más el diseño visual. Como me concentré tanto en que el formulario cumpla con todas las reglas de accesibilidad obligatorias y que funcione bien, el estilo quedó bastante básico.**

### 3.3 — ¿Qué alternativas consideraste y por qué las descartaste?

> ✏️ **Tu respuesta: Al principio pensé en agrupar las distintas partes del formulario (como los "Datos Personales") metiendo todo adentro de etiquetas <div> comunes y poniéndoles un título normal. Pero lo descarté porque me di cuenta de que, para una persona ciega que usa un lector de pantalla, un <div> es una caja que no significa nada. Terminé usando <fieldset> y <legend> porque son las etiquetas que ya vienen preparadas en HTML específicamente para agrupar formularios de forma correcta y accesible.**

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
