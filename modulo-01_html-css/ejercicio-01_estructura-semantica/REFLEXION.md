# REFLEXION — Ejercicio 1.1: Estructura Semántica HTML

> **Instrucciones:** Completá este archivo DESPUÉS de terminar tu solución. Escribí con tus propias palabras. Respuestas copiadas de internet o generadas por IA sin elaboración propia no son válidas.
>
> Tiempo esperado para completar esta reflexión: 20–30 minutos.

---

## Sección 1 — Explicación de mi solución

*Describí en 150–250 palabras qué hace tu archivo HTML y cuáles fueron las decisiones de estructura que tomaste. No copies el código, explicá el razonamiento.*

> ✏️ **Tu respuesta aquí: El archivo HTML estructura un artículo de blog sobre la historia y evolución de la World Wide Web. Su propósito principal es organizar esta información cronológica de forma clara para navegadores, motores de búsqueda y tecnologías de asistencia, sin depender del diseño visual.**

**Las decisiones de estructura priorizan la separación de responsabilidades y el valor semántico. Se dividió la página en tres grandes bloques globales utilizando <header>, <main> y <footer>, sumando un menú <nav> accesible. El contenido central se aisló dentro de <main> y se encapsuló en un <article> independiente, garantizando que el texto sea completamente autónomo y reutilizable. Para fragmentar las diferentes etapas históricas, se implementaron bloques <section> con una jerarquía estricta de encabezados (<h2>), lo que facilita la navegación y el indexado de Google. Además, se incluyó un <aside> para contenido complementario relacionado. Finalmente, reemplazamos contenedores genéricos por etiquetas nativas específicas como <time> para fechas estandarizadas, <figure> para vincular imágenes con leyendas, y <address> para validar autorías.**
>
> [Escribí tu explicación]

---

## Sección 2 — Preguntas conceptuales

Respondé cada pregunta. Las respuestas deben ser tuyas. Podés investigar, pero explicá con tus palabras.

### 2.1 — ¿Cuál es la diferencia entre `<section>` y `<article>`? ¿Cuándo usarías cada uno?

> ✏️ **Tu respuesta: La funcion de la etiqueta section es agrupar contenido relacionado bajo un mismo tema, mientras que un article debe usarse si tiene sentido leerlo totalmente aislado del resto de la página.**

---

### 2.2 — ¿Por qué es importante el atributo `datetime` en la etiqueta `<time>`? ¿Quién lo usa?

> ✏️ **Tu respuesta: Es importante porque traduce las fechas en un formato universal facil de entender. Es utilizado por buscadores de interner (como Google), agendas y calendarios, lectores de pantalla, etc.**

---

### 2.3 — Tu página tiene `<header>` en dos lugares: uno para la página y uno dentro del `<article>`. ¿Eso es válido? ¿Por qué?

> ✏️ **Tu respuesta: Es completamente válido, el header basicamente es el encabezado o introducción de un bloque, no significa "la parte de arriba de la pantalla". Osea funciona como un encabezado local.**

---

### 2.4 — Un motor de búsqueda como Google lee tu HTML. ¿Qué ventaja le da usar etiquetas semánticas versus usar solo `<div>` con clases?

> ✏️ **Tu respuesta: Le estas dando a los motores de búsqueda una estructura fácil de entender que prioriza la importancia entre etiquetas. Al entenderte tan fácil y rápido, Google sabe exactamente qué información ofrecerle a la gente que busca cosas en internet, y te premia posicionando tu página más arriba en los resultados. Si armas todo con div, los motores de busquedas no saben qué es el título, qué es el menú o qué es publicidad; todo le parece igual de (poco) importante.**

---

### 2.5 — Encontrá **un error semántico** en el siguiente fragmento y explicá cómo lo corregirías:

```html
<div class="navigation">
  <div class="nav-item"><a href="/home">Inicio</a></div>
  <div class="nav-item"><a href="/about">Nosotros</a></div>
</div>

<div class="main-content">
  <div class="post-title">Mi primer artículo</div>
  <div class="post-body">
    <p>Contenido del artículo...</p>
  </div>
</div>
```

> ✏️ **Tu respuesta: Claramente se observa que se comete el error de anidar demasiados DIVs. Pero el error más grave ahí es usar <div class="post-title"> en lugar de una etiqueta de encabezado (<h1> o <h2>) para el título, o <div class="navigation"> en lugar de un <nav> para el menú.**
Correción:
```
<nav>
  <ul>
    <li><a href="/home">Inicio</a></li>
    <li><a href="/about">Nosotros</a></li>
  </ul>
</nav>

<main>
  <article>
    <h1>Mi primer artículo</h1>
    <p>Contenido del artículo...</p>
  </article>
</main>
```

---

## Sección 3 — Decisiones técnicas

### 3.1 — ¿Qué etiqueta usaste para el logo y por qué? ¿Hay alternativas?

> ✏️ **Tu respuesta: Usé la etiqueta <img> colocada directamente dentro del <header> principal. La elegi porque con la etiqueta <img>, podemos aprovechar el atributo obligatorio alt ("texto alternativo"). Esto es fundamental para la accesibilidad y el diseño responsivo. Alternativas: Se puede crear un logo de texto puro con una etiqueta <h1> o se puede optar por la eitqueta <svg> que pega directamente el código vectorial del logo elegido, entre otras opciones**

---

### 3.2 — ¿Elegiste `<ul>` u `<ol>` para tu lista? ¿Por qué esa y no la otra?

> ✏️ **Tu respuesta: Elegi <ul> ya que el orden de los factores no era tan importante y <ol> debe utilizarse cuando el orden es muy importante. Aclración: En la sección específica de "Las etapas de la Web" usé <ul> para mostrar un listado con viñetas. Sin embargo, ese bloque en particular podría haber llevado un <ol>, ya que relata una secuencia histórica y cronológica exacta (Web 1.0, luego 2.0, luego 3.0).**

---

### 3.3 — Si alguien accede a tu página solo con un lector de pantalla (sin ver el HTML), ¿podría navegar y entender el contenido? ¿Qué cambiarías para mejorar la experiencia?

> ✏️ **Tu respuesta: Podría navegar y entender el contenido muy facilmente, aunque no sera atractiva visualmente. Agregaría un poco de css y javascript para hacer la página mas atractiva a nivel visual, y para usuarios no videntes agregaría la posibilidad skipear el contenido hasta llegar a la zona de su interes**

---

## Sección 4 — Declaración de uso de IA

Marcá con una `x` lo que corresponda:

```
[ ] Resolví el ejercicio completamente sin ayuda de IA
[ ] Usé IA para entender algún concepto, pero escribí el código yo
[x] Usé IA para generar un borrador que luego modifiqué y entendí
[ ] Usé IA extensamente y completé la reflexión para entender lo que hice
```

*Si usaste IA, describí brevemente cómo:*

> ✏️ **Tu respuesta (opcional si no usaste IA): Utilice IA para poder cumplir estrictamente con los requerimientos del ejercicio y para hacer un boceto que luego modifique. Como mi conocimiento de Desarrollo Web es intermedio-bajo utilice a la IA como un maestro particular que haga seguimiento de lo que estoy haciendo y me explique con detalle que hace cada cosa**

---

## Sección 5 — Autoevaluación

En una escala del 1 al 5, ¿cuánto entendés ahora el concepto de HTML semántico?

```
[ ] 1 — Muy poco, necesito repasar
[ ] 2 — Entiendo lo básico
[x] 3 — Lo entiendo bien
[ ] 4 — Lo entiendo bien y puedo explicárselo a otro
[ ] 5 — Podría dar una clase sobre esto
```

*¿Qué parte te resultó más difícil?*

> ✏️ **Tu respuesta: Me costo un poco interpretar bien que etiqueta era la más adecuada segun el contexto**
