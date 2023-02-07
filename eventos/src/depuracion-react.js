
/**Depuración de aplicaciones React
Una gran parte del tiempo de un desarrollador típico se dedica a depurar y leer el código existente. De vez en cuando podemos escribir una línea o dos de código nuevo, pero una gran parte de nuestro tiempo se dedica a tratar de averiguar por qué algo está roto o cómo funciona algo. Las buenas prácticas y herramientas para depurar son extremadamente importantes por este motivo.

Por suerte para nosotros, React es una librería extremadamente amigable para los desarrolladores cuando se trata de depurar.

Antes de continuar, recordemos una de las reglas más importantes del desarrollo web.

La primera regla de desarrollo web
Mantenga la consola de desarrollador del navegador abierta en todo momento.

La Consola, en particular, debería estar siempre abierta, a menos que haya una razón específica para ver otra pestaña.

Mantén tu código y la página web abiertos juntos al mismo tiempo, todo el tiempo.

Si su código falla al compilarse y su navegador se ilumina como un árbol de Navidad: 




Mientras que los elementos separados por una coma estarán disponibles en la consola del navegador para una inspección más detallada.

Imprimir en la consola no es de ninguna manera la única forma de depurar nuestras aplicaciones. Puede pausar la ejecución del código de su aplicación en el depurador de la consola de desarrollador de Chrome, escribiendo el comando debugger en cualquier parte de su código.

La ejecución se detendrá una vez que llegue a un punto donde se ejecuta el comando debugger:

Una vez que se descubre la causa del error, puede eliminar el comando debugger y actualizar la página.

El depurador también nos permite ejecutar nuestro código línea por línea con los controles que se encuentran en el lado derecho de la pestaña Source.

También puede acceder al depurador sin el comando debugger agregando puntos de interrupción en la pestaña Source. La inspección de los valores de las variables del componente se puede hacer en la sección Scope:


Se recomienda encarecidamente agregar las herramientas de desarrollo de React para Chrome. Agrega una nueva pestaña Components a las herramientas de desarrollo. La nueva pestaña de herramientas de desarrollador se puede usar para inspeccionar los diferentes elementos de React en la aplicación, junto con su estado y props:


*/