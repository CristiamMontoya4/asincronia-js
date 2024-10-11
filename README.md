# asincronia-js
Curso para hacer uso del asincronismo de javascript

## COnceptos

Conceptos fundamentales antes de crear el proyecto:++ .

Web APIs JavaScript del lado del cliente: setTimeout, XMLHttpRequest, File Reader, DOM. Node: fs, https.
API: El término API es una abreviatura de “Application Programming Interface” (Interfaz de programación de aplicaciones en español). Es un conjunto de rutinas que provee acceso a funciones de un determinado software.
Hoisting: Sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código en tiempo de compilación.
XML: Lenguaje de marcado creado para la transferencia de información, legible tanto para seres humanos como para aplicaciones informáticas, y basado en una sencillez extrema y una rígida sintaxis. Así como el HTML estaba basado y era un subconjunto de SGML, la reformulación del primero bajo la sintaxis de XML dio lugar al XHTML; XHTML es, por tanto, un subconjunto de XML.
DOM: El DOM permite acceder y manipular las páginas XHTML como si fueran documentos XML. De hecho, DOM se diseñó originalmente para manipular de forma sencilla los documentos XML.
Events: Comportamientos del usuario que interactúa con una página que pueden detectarse para lanzar una acción, como por ejemplo que el usuario haga click en un elemento (onclick), que elija una opción de un desplegable (onselect), que pase el ratón sobre un objeto (onmouseover), etc.
Compilar: Compilar es generar código ejecutable por una máquina, que puede ser física o abstracta como la máquina virtual de Java.
Transpilar: Transpilar es generar a partir de código en un lenguaje código en otro lenguaje. Es decir, un programa produce otro programa en otro lenguaje cuyo comportamiento es el mismo que el original. . . 🛠️ ++Crear e inicializar un Proyecto:++ .
Tener instalado ++Visual Studio Code++. .
Abrir la terminal (en Linux al presionar las teclas ++Ctrl + Alt + T++). .
Para conocer donde estamos ubicados se escribe ++pwd++ y se da ENTER. .
Para ver las carpetas y archivos del lugar donde estamos, se escribe ++ls++ y se da ENTER. .
Para crear una carpeta se escribe ++mkdir nombre-de-la-carpeta++ y se da ENTER. .
Para entrar a una carpeta se escribe ++cd nombre-de-la-carpeta++ y se da ENTER. .
Si se quiere ir a la carpeta contenedora de la carpeta actual que estamos, se escribe ++cd ..++ y se da ENTER. .
En linux para no escribir los comando de mkdir y cd, se escribe ++take nombre-de-la-carpeta++ y se da ENTER. .
Para crear un archivo se escribe ++touch nombre-del-archivo-extensión++ y se da ENTER. .
Para limpiar la pantalla en la terminal se escribe ++clear++ y se da ENTER. .
Si solo se quiere mover el scroll se presionan las teclas ++Ctrl + Alt + l++ .
Para iniciar el repositorio se escribe ++git init++ y se da ENTER. .
Vamos a inicializar el proyecto con npm, se escribe ++npm init++ y se da ENTER. .
Aparece el nombre del proyecto, si no se quiere modificar el nombre, se da ENTER. .
Aparece la versión del proyecto, si no se quiere modificar el número, se da ENTER. .
Aparece la descripción del proyecto, si se quiere modificar dejar vacío, se da ENTER. .
Lo mismo, dejar vacío: entry point, test command, git repository. .
En keywords se escribe las palabras claves como ++javascript++ y se da ENTER. .
En la licencia por defecto aparece la ISC, pero la más común es la ++MIT++ para compartir y poder comercializar después el producto. .
Por último, aparecen los datos ingresados (guardados en el archivo package.json) y si no hay que modificar, se escribe ++yes++ y se da ENTER. .
Para entrar al editor VSC se escribe ++code .++ y se da ENTER. .
Una vez dentro de VSC, en el panel izquierdo aparece el archivo package.json, crear una nueva carpeta llamada ++src++ donde contendrá nuestro código. .
Crear el archivo ++.gitignore++ (estará fuera de la carpeta src). En los sistemas Unix, dado que el archivo empieza con un punto, al abrir un explorador de archivos los toma como archivos ocultos y no son visibles. El contenido del archivo queda:
```
     /node_modules/

```
Para guardar los cambios de un archivo, presionar las teclas ++Ctrl + S++ .
Muy importante instalar ++la extensión Code Runner++, presionar las teclas ++Ctrl + P++ y pegar: ++ext install formulahendry.code-runner++ y dar ENTER. Lo instala automáticamente (fuente: aquí).