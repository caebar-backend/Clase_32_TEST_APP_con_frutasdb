## NOTAS SOBRE EL TEST AUTOMATIZADO DE PRUEBAS
### ENDPOINTS EN EL FOCO DEL ANALISIS

#### Primera Prueba: GET a la raíz de la aplicación
- La prueba debe devolver un estado numérico 200
- Además mensaje por consola debe imprimirse

#### Segunda Prueba: GET a la ruta /frutastodas
- La prueba debe devolver un estado numérico 200
- Además debe devolver a todas las frutas en la consola

#### Tercera Prueba: GET a la ruta /frutas/1
- Busqueda de fruta por ID, esta prueba debe fallar porque no existe esta ruta en la aplicación BackEnd.

#### Cuarta Prueba: GET a la ruta /frutas/nombre/manzanas
- La prueba debe devolver un estado numérico 200
- Además debe devolver datos de la busqueda por la consola

#### Quinta Prueba: GET a la ruta /frutas/importe/220
- La prueba debe devolver un estado numérico 200
- Además debe devolver datos de la busqueda por la consola

#### Sexta Prueba: POST a la ruta /frutas/agregar/109
- La prueba debe devolver un estado numérico 201 en primera instancia
- Cuándo se ejecuta nuevamente el test, debe devolver un error,porque ya existe la fruta en la base de datos

#### Séptima Prueba: POST a la ruta /frutas/agregar/108
- La prueba debe devolver un estado numérico 201
- Posteriormente la misma fruta se editará y se eliminará de la base de datos

#### Octava Prueba: PATCH a la ruta /frutas/editar/108
- La prueba debe devolver un estado numérico 200
- Además debe devolver datos de la edición de la fruta por la consola

#### Novena Prueba: DELETE a la ruta /frutas/eliminar/108
- La prueba debe devolver un estado numérico 200
- Además mensaje de confirmación de la eliminación por consola debe imprimirse


