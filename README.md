**Prueba - Cafetería Nanacao**

En esta prueba validaremos nuestros conocimientos de testing unitario a una APIREST con JEST y el paquete supertest. Para lograrlo,necesitarás aplicar los matchers del framework y estudiar con cuidado la composición del servidor de apoyo disponible entre los archivos de esta unidad.

Lee todo el documento antes de comenzar el desarrollo individual, para asegurarte de tener el máximo de puntaje y enfocar bien los esfuerzos.

**Descripción**

La Cafetería Nanacao está abriendo una nueva sucursal en el centro de la ciudad después de tener un gran éxito en su local principal.

Su dueña, Julieta Nanacao, ha solicitado luego de varios fallos repentinos en su sistema de administración, que se desarrollen tests para comprobar que todas las funcionalidades funcionen correctamente.

En este desafío deberás crear tests para probar las diferentes rutas existentes en la API REST de apoyo.

**Requerimientos**

1. Testea que la ruta **GET /cafes** devuelve un status code **200** y el **tipo de dato** recibido es un arreglo con por lo menos **1** objeto. (**3 Puntos**)
1. Comprueba que se obtiene un código **404** al intentar eliminar un café con un **id** que no existe. (**2 Puntos**)
1. Prueba que la ruta **POST /cafes** agrega un nuevo café y devuelve un código **201**. (**2 Puntos**)
1. Prueba que la ruta **PUT /cafes** devuelve un status code **400** si intentas actualizar un café enviando un **id** en los parámetros que sea diferente al id dentro del payload. (**3 Puntos**)

¡Mucho éxito!



|**Consideraciones y recomendaciones**|
| - |
|Consulta la **documentación oficial de JEST** (https://jestjs.io/docs/expect) para conocer todos los matchers que ofrece. Lee detalladamente el código del servidor para comprender cómo funciona cada ruta.|

www.desafiolatam.com
