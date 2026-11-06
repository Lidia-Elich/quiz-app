## Descripción
Este proyecto es un juego de preguntas y respuestas con varios niveles de dificultad, cada uno de ellos con un cronómetro y un número diferente de preguntas.

Con este proyecto he querido seguir aprendiendo y desarrollando mis conocimientos de HTML, CSS y JavaScript, poniendo en práctica conceptos como la manipulación del DOM, eventos, funciones, arrays, almacenamiento de datos con localStorage, temporizadores y diseño responsive.

Soy consciente de que un juego de este tipo puede seguir creciendo y que se le pueden añadir muchas más funcionalidades. Mi intención es continuar mejorándolo a medida que vaya adquiriendo nuevos conocimientos y experiencia en programación.

## Funcionalidades
- Registro del nombre del jugador.
- Selección de nivel de dificultad: fácil, medio y difícil.
- Diferente número de preguntas y tiempo según el nivel elegido.
- Cronómetro durante la partida.
- Respuestas con feedback visual:
  - Verde cuando la respuesta es correcta.
  - Rojo cuando la respuesta es incorrecta.
- Contador de preguntas.
- Cálculo de aciertos y fallos.
- Pantalla final con el resultado de la partida.
- Ranking de jugadores.
- Registro del número de partidas jugadas y de la mejor puntuación obtenida en cada nivel.
- Almacenamiento de datos mediante `localStorage`.
- Diseño responsive adaptado a ordenador, tablet y móvil.
- Animaciones en tarjetas, respuestas y resultados.

## Tecnologías utilizadas
- **HTML5** para crear la estructura y las distintas pantallas del juego.
- **CSS3** para los estilos, diseño responsive, colores según el nivel y animaciones.
- **JavaScript** para toda la lógica del juego:
  - Gestión de preguntas y respuestas.
  - Cambio entre pantallas.
  - Selección de niveles.
  - Cronómetro.
  - Cálculo de resultados.
  - Ranking de jugadores.
  - Manipulación del DOM.
- **localStorage** para guardar las estadísticas de los jugadores en el navegador.

## Cómo usar el proyecto
1. Introduce tu nombre.
2. Selecciona uno de los tres niveles disponibles: fácil, medio o difícil.
3. Lee las reglas y comienza la partida.
4. Responde a las preguntas antes de que termine el tiempo.
5. Al finalizar, consulta tu puntuación y el resultado de la partida.
6. Accede al ranking para ver tu mejor puntuación y el número de partidas jugadas.
7. Puedes volver a jugar y probar otro nivel cuando quieras.

## Cómo ejecutar el proyecto
No es necesario instalar ninguna dependencia.

1. Descarga o clona el repositorio.
2. Abre la carpeta del proyecto.
3. Abre el archivo `index.html` en el navegador.

El proyecto está desarrollado únicamente con HTML, CSS y JavaScript.

## Mejoras futuras
- Separar la pantalla actual de resultados en dos apartados diferentes:
  - **Marcador personal**, donde cada jugador pueda consultar sus propios datos, como número de partidas jugadas, aciertos, fallos y mejores puntuaciones.
  - **Ranking general**, accesible desde el marcador, donde se puedan consultar los resultados de otros jugadores.

- Sustituir el almacenamiento actual mediante `localStorage` por una **base de datos**, de forma que los nombres, partidas y resultados puedan guardarse de manera permanente y consultarse desde cualquier navegador o dispositivo.

- Conectar el juego con un backend que permita gestionar esos datos y crear un ranking real entre distintos usuarios.

## Estado del proyecto
La versión actual del proyecto está terminada y es completamente funcional.

El juego incluye distintos niveles de dificultad, cronómetro, resultados, ranking, almacenamiento local, diseño responsive y animaciones.

Aunque esta versión está finalizada, el proyecto seguirá evolucionando a medida que vaya adquiriendo nuevos conocimientos y pueda incorporar nuevas funcionalidades.
