---
id: doc4
title: Como rastrear tu stock de productos de WooCommerce con Megaventory
sidebar_label: Como rastrear tu stock de productos de WooCommerce con Megaventory
---
## Introcucción
***

Si tu negocio depende de la plataforma WooCommerce, integrarla con Megaventory te traerá un inventario superior y la administración de pedidos mientras mantienes tus productos y clientes sincronizados a través de WooCommerce y Megaventory sobre múltiples ubicaciones de inventario físico en tiempo real.

La extensión de Administración de Inventario de Megaventory por Megaventory actualiza tu eshop de WooCommerce para que puedas manejar los pedidos de tus clientes más eficientemente. Esencialmente, sincroniza las órdenes entrantes de WooCommerce con Megaventory donde puedes rastrear en que etapa se encuentran (verificado, enviado, facturado, cerrado).

Megaventory rastrea los niveles de inventario de tus productos de WooCommerce y sincroniza esa información para que pueda ser mostrada en el frontend de la tienda para la referencia de tus clientes. Del mismo modo, las devoluciones pueden ser manejadas a través de Megaventory y la información relevante puede ser mostrada en el backend de WooCommerce para el bien de tus clientes. Producto, cliente, envío y otra información es sincronizada en tiempo real a través de los dos servicios por medio de esta extensión de Administración de Inventario de Megaventory.

Traducción realizada con la versión gratuita del traductor www.DeepL.com/Translator

## ¿Cómo puede funcionar el plugin Megaventory para ti?
***
### Con Megaventory tu sitio WooCommerce puede ser actualizado de las siguientes maneras:

- Podrás mostrar en tiempo real la disponibilidad de tus productos en tu frontend de WooCommerce basado en los niveles de stock reales.
- Puedes conectar más de un almacén, tienda u otro tipo de localizaciones a tu disposición y la representación del stock en el frontend de WooCommerce será correcta.
- Una vez que una orden llega a WooCommerce tendrás la capacidad de procesarla correctamente desde la verificación hasta el envío y el cierre en el backend de Megaventory asegurando un enfoque de mejores prácticas en el funcionamiento de tu eshop.
- Mucha de la información en un sistema se sincroniza automáticamente con el otro según sea necesario, ahorrándote un tiempo significativo que de otra manera estarías gastando haciendo dobles entradas.
- Las funcionalidades adicionales como la agrupación, las devoluciones, etc. también se manejan sin problemas.

### Cómo funciona el plugin

La extensión Megaventory Inventory Management creará una sección adicional en tu panel de administración de WooCommerce desde donde podrás gestionar el plugin. Para poder utilizar el plugin Megaventory Inventory Management, es necesario introducir algunos ajustes iniciales y realizar una sincronización inicial con tu cuenta Megaventory (ambas tareas únicas).

Después de una sincronización exitosa, accederás a Megaventory para completar y gestionar tus pedidos o entrarás en WooCommerce para la funcionalidad habitual. En cualquier caso, se elimina la doble entrada y cualquier información relevante que pueda ser sincronizada es transferida en segundo plano por el plugin.

### Ejemplos de caso de uso

Los casos típicos de uso de la extensión Megaventory Inventory Management son para las tiendas electrónicas de WooCommerce que han experimentado un crecimiento significativo (muchos pedidos por día) y necesitan ayuda para rastrear el estado de cada pedido y la ubicación de sus productos asociados. La gestión de productos físicos es la utilidad principal de la extensión Megaventory Inventory Management (pero también se admiten servicios).

Ejemplos típicos de uso del plugin son los negocios minoristas o mayoristas que manejan ropa, electrónica, hardware, muebles, etc. - estos son sólo algunos de los verticales soportados. Las empresas que necesitan realizar un seguimiento de la fabricación también pueden beneficiarse de las funciones de seguimiento de la producción (que también se aplican en los escenarios en los que es necesario agrupar/ensamblar productos).

## Cuenta y precios
***

**El plugin de Gestión de Inventario Megaventory en sí es gratuito pero debe ser usado junto con una suscripción a la cuenta Megaventory. Después de que la extensión ha sido instalada en WooCommerce, los comerciantes necesitan registrarse para su cuenta separada de Megaventory [aquí](https://megaventory.com/#signupform). La cuenta Megaventory se proporciona por una cuota de suscripción mensual - los detalles sobre las tasas están disponibles [aquí](https://megaventory.com/#pricing)**.**

**El [precio](https://megaventory.com/#pricing) de Megaventory es el siguiente:**

- **Pro (5 Usuarios, 10k Transacciones, 20 Localidades, 20k Productos, 20k Clientes, 2 Horas de Entrenamiento, 5 Integraciones Diferentes): USD 150 / mes con + USD 50 / mes / usuario extra (hasta 35) y + USD 50 / mes / extra 10K Transacciones (hasta 100K)**
- **Enterprise (cualquier cosa más alta que los límites superiores de Pro): Cotización personalizada**

## Cómo configurar la integración de WooCommerce - Megaventory
***

#### Requerimientos

Antes de iniciar el proceso de integración asegúrese de que se cumplan los siguientes requisitos:

Asegúrate de que todos los productos de WooCommerce tienen un SKU y una breve descripción. Los productos sin un SKU y una corta descripción serán ignorados por el plugin.

El plugin trata dos productos con el mismo SKU como el mismo producto. Si hay algún producto diferente con SKU que coincida, sus detalles serán sobrescritos. Antes de comenzar el proceso, por favor asegúrese de que todos los productos diferentes tienen SKUs únicos.

Todas las variaciones de productos necesitan SKUs únicos para estar correctamente sincronizados con Megaventory. Estos SKUs deben ser diferentes entre sí y con el SKU del producto base.

Asegúrate de que no hay impuestos con el mismo nombre y tasa (permitido en WooCommerce, pero no en Megaventory). Cuando el plugin está activo impide a los usuarios editar los nombres y las tasas. Si quieres hacer algún cambio, hazlo antes de comenzar la integración.

Asegúrate de que no haya cupones con el mismo nombre (permitido en WooCommerce, complicado en Megaventory) ya que esto puede causar problemas de sincronización después.

### Preparando las cosas

Si ya has configurado WooCommerce, empieza desde el paso 3.

1. Configura un sitio web de WordPress.
1. Descarga la extensión WooCommerce de la tienda de plugins de WordPress, añádela a tu sitio web (wordpress.org/plugins/woocommerce) y actívalo.
3. Añade el plugin Megaventory a tu sitio web.
4. Ve a la página de Plugins en tu sitio web de WordPress.
5. Presiona el botón Agregar Nuevo. Si no tienes el archivo zip ve al paso f.

### Aqui va una imagen
6. Presiona Upload Plugin

### Aquí va una imagen
7. Presiona Elegir Archivo, busca Megaventory-Wordpress.zip y presiona Instalar Ahora.

### Aquí va una imagen
8. Después de una instalación exitosa, presione Activar Plugin. Vaya al paso i.

### Aquí va una imagen
9. Buscar Megaventory

### Aquí va una imagen
10. Presiona Instalar.
11. Presione Activar.
12. Deberías ser redirigido a la página de Plugins y ver el siguiente mensaje:

### Aquí va una imagen

13. Entra en tu cuenta de Megaventory como administrador.

14. Ve a Mi Perfil.

### Aquí va una imagen 
15. Ve a Integración de Cuentas y habilita la integración de WooCommerce.

### Aquí va una imagen

16. Haz clic en Guardar.

17. Nuevamente, ve a Mi perfil y genera la clave de la API haciendo clic en la llave azul.

### Aquí van dos imagenes

18. El campo API Key debe contener ahora una secuencia de letras, números y el signo "@". Cópialo al portapapeles y pulsa Actualizar para guardar los cambios.

### Aquí va una imagen

19. Vuelve a tu cuenta de WordPress y abre la configuración del plugin Megaventory.

### Aquí va una imagen

20. Pegue su clave API en el campo clave API de Megaventory y confirme haciendo clic en Actualizar.

### Aquí va una imagen

21. Puede aparecer el siguiente error:

### Aquí va una imagen

22. Este error no aparece si la moneda principal de Megaventory y la moneda de WooCommerce son la misma. Si el error anterior no aparece, salta al paso 24.

23. Para resolver el error anterior ve a la configuración de WooCommerce:

### Aquí va una imagen

24. En las opciones de moneda elija la correspondiente a la moneda principal de su cuenta Megaventory.

### Aquí va una imagen

25.  Para comprobar cuál es tu moneda principal en Megaventory, ve a Configuración y elige Monedas.

### Aquí va una imagen

26. Ahora deberías ver este mensaje:

### Aquí va una imagen

Ve al plugin de Megaventory y presiona Inicializar. Esto puede tomar unos minutos dependiendo del número de registros en Megaventory y WooCommerce. No interrumpas este proceso. Si el proceso se interrumpe, repite este paso hasta que tenga éxito.

### Resultados de la inicialización

El proceso de inicialización logra lo siguiente:

1. Encuentra productos que coincidan en WooCommerce y Megaventory (basado en SKU) y los asocia como el mismo producto
2. Encuentra clientes coincidentes en WooCommerce y Megaventory (basado en su nombre y correo electrónico) y los asocia como la misma persona/cuenta.
3. Asocia los impuestos coincidentes entre Megaventory y WooCommerce (los que tienen el mismo nombre y tasa) y crea nuevos impuestos en Megaventory si es necesario.
4. Crea un cliente invitado en Megaventory al cual se le asignarán todos los pedidos hechos por clientes sin cuenta

Este paso no crea ningún producto o cliente nuevo, sino que permite la sincronización de los productos y clientes que ya existen tanto en Megaventory como en WooCommerce.

## ¿Qué entidades clave están sincronizadas entre WooCommerce y Megaventory?
***

### Orden (WooCommerce) - Orden de Venta (Megaventoria)

Los pedidos están sujetos a una sincronización continua, lo que significa que cada vez que se hace un pedido en WooCommerce se refleja en Megaventory (como un pedido de venta). Cada pedido se realiza con la moneda principal y se añade a Megaventory cuando se finaliza, independientemente del tipo de pago.

Todos los pedidos de WooCommerce que son hechos por usuarios anónimos (aquellos que no tienen una cuenta) son atribuidos al Cliente Invitado en Megaventory.

Cada pedido almacena la siguiente información:

- referencia a la cuenta del cliente
- número de orden
- comentario
- moneda
- dirección de facturación
- SKUs y cantidades
- precios*
- impuestos**
- descuento**

*WooCommerce almacena 2 tipos de precios - el habitual y el de venta. Megaventory es capaz de almacenar sólo uno a la vez (por defecto), por lo tanto cada orden puesta en Megaventory contiene el precio final, relevante para cada producto determinado en el lado de WooCommerce.

**Tanto los impuestos como los descuentos se simplifican en el sistema de Megaventory. Ver los capítulos relevantes para más información.

### Productos (WooCommerce, Megaventory)

Los productos están sujetos a una sincronización continua. Los productos se sincronizan sólo desde WooCommerce a Megaventory. Cada producto se almacena:

- SKU,
- Imagen (o url de la imagen),
- acciones,
- precio(s),
- una descripción corta y larga,
- tamaño y dimensiones,
- categoría(s).

Cuando un producto es creado en WooCommerce, el plugin busca un duplicado con el mismo SKU en Megaventory y los enlaza entre sí. Si el producto no se encuentra, entonces se crea primero usando los detalles proporcionados en la interfaz de WooCommerce. Si un producto con la misma SKU pero con detalles diferentes es encontrado en Megaventory, esos detalles son anulados!

La sincronización continua de Megaventory a WooCommerce ocurre solo para los productos vinculados y afecta los niveles de stock y los detalles de los productos. Cualquier producto nuevo creado en Megaventory no se sincroniza con WooCommerce.

Cada producto agregado a WooCommerce debe también cumplir con los requerimientos de Megaventory para ser sincronizado exitosamente. Sus requerimientos incluyen:

- SKU está presente, máximo 100 caracteres.
- La descripción corta está presente, máximo 400 caracteres.
- La descripción larga no supera los 400 caracteres.

### Categorías

Las categorías se crean si es necesario, al crear o actualizar productos. Los productos de WooCommerce pueden tener muchas categorías, pero ninguna categoría es más importante que otras. Megaventory sólo asigna una categoría por producto. Durante la sincronización Megaventory elige una categoría (la primera categoría en orden alfabético) para asociar el producto.

### Impuestos

Durante la sincronización inicial, el plugin intenta encontrar los impuestos de Megaventory y WooCommerce con el mismo nombre y tasa y los tratará como la misma entidad. Tener muchos impuestos de WooCommerce con los mismos nombres y tasas puede causar problemas.

Después, durante la continua sincronización, la creación o actualización de impuestos en Megaventory será ignorada por el plugin. La sincronización continua solo ocurre de WooCommerce a Megaventory. Los nuevos impuestos creados en WooCommerce también son creados en Megaventory.

Cuando el plugin está activo, evita que los usuarios editen los impuestos en WooCommerce . Si necesitas cambiar un impuesto, la mejor práctica es borrarlo y crear uno nuevo.

Megaventory solo aplica un impuesto por producto. En caso de que más de un impuesto se aplique a un producto en un pedido de WooCommerce, Megaventory creará un nuevo **impuesto compuesto** con una tasa correspondiente a la tasa de los impuestos aplicados al producto en cuestión.

**Tenga en cuenta que a veces cuando se hacen cambios en los impuestos en WooCommerce, el sistema puede parecer que está atascado. En tal caso, simplemente actualiza la página. Todos los cambios se aplicarán correctamente.**

### Cupones

Un cupón en WooCommerce es una entidad muy desarrollada y personalizable. Debido a las diferencias entre los sistemas, algunos casos especiales no se pueden mapear directamente en Megaventory. Para permitir la plena funcionalidad de WooCommerce hay disponibles métodos alternativos para lograr el mismo efecto.

1. Los cupones en WooCommerce deducen una cantidad fija o un porcentaje del total del pedido. Esto se recrea en Megaventory de la siguiente manera:

- Los cupones de porcentaje se colocan en Megaventory como descuentos.
- Los cupones fijos se aplican directamente en el precio del producto en un pedido de venta, y se mencionan en las etiquetas.

2. Los cupones en WooCommerce pueden ser combinados (es decir, se puede aplicar más de un cupón a un mismo pedido y se sumarán sus tarifas). Esto se recrea en Megaventory con el uso de **descuentos compuestos** - el plugin crea un nuevo descuento en Megaventory, que tiene una tasa igual a todos los cupones aplicados.

Nota: Todos los impuestos/descuentos compuestos tienen un nombre de la concatenación, separado por "-", del nombre del impuesto/descuento individual.

Ejemplo de un descuento compuesto que consiste en Free987, an30 y nuevos cupones de descuento es Free987-an30-newdcount.

3. Los cupones pueden ser borrados de WooCommerce, pero no de Megaventory. Una vez que un cupón es creado y borrado en WooCommerce, sólo estará disponible como borrador debido a los choques con Megaventory.

  4. La tarifa de los cupones de precio fijo puede ser actualizada en WooCommerce.

  5. La tasa de los cupones de porcentaje no puede ser actualizada.

  6. Todos los cupones se sincronizan continuamente desde WooCommerce a Megaventory. El usuario también puede replicar manualmente (en WooCommerce) todos los porcentajes de descuento presentes en Megaventory usando un botón en el plugin Megaventory.

  Los cupones que no sigan ninguna de las pautas especificadas anteriormente sólo pueden existir como borradores en WooCommerce (para permitir su edición).

  ## ¿Cómo funciona la sincronización entre WooCommerce y Megaventory?
  ***

Hay dos tipos de sincronización entre WooCommerce y Megaventory.

### Sincronización inicial

La sincronización inicial que debe hacerse inmediatamente después de la integración y que en la mayoría de los casos no será necesaria nunca más. A veces, también puede utilizarse para recuperarse de fallos del sistema. Este proceso recrea todos los productos, clientes, impuestos, cupones que no existían en Megaventory, pero que están presentes en WooCommerce. También actualiza algunos detalles de todos los productos y clientes (los campos exactos se especifican a continuación). Las instrucciones para ejecutar la sincronización inicial se encuentran más adelante en esta sección.

### Sincronización continua

La sincronización continua, que no requiere ninguna acción o paso adicional, sino que ocurre en segundo plano. Se puede dividir en dos categorías:

#### Megaventoria a WooCommerce - realizado periódicamente.

- Productos - cambiar los detalles de los productos de Megaventory impone los mismos cambios en los correspondientes productos de WooCommerce. Borrar un producto de Megaventory también borra su equivalente de WooCommerce. Crear nuevos productos en Megaventory no resulta en ningún cambio en la base de datos de los productos de WooCommerce.
- Stock - si los niveles de stock de cualquier producto cambian, la información se pasa a WooCommerce.
- Estado del pedido - si el estado del pedido se cambia en Megaventory, también se actualiza en WooCommerce automáticamente. El plugin no sincroniza las devoluciones y los reembolsos - estos tienen que ser resueltos manualmente.

#### WooCommerce a Megaventory - desencadenada por la introducción de cambios en WooCommerce y realizada de inmediato.

- Productos - crear, actualizar o borrar productos en WooCommerce resulta en que esos cambios se realicen inmediatamente en Megaventory también. (No se aconseja borrar productos en WooCommerce, especialmente si el stock de ese producto en Megaventory no es cero. Se sugiere ocultar (despublicar) los productos y borrarlos en Megaventory después de que el stock se agote).
- Clientes - crear, actualizar clientes en WooCommerce resulta en que esos cambios se realicen inmediatamente en Megaventory también.
- Cupones - creando, actualizando, usando cupones en WooCommerce resulta en crear, actualizar descuentos en Megaventory. En casos específicos, este proceso puede crear nuevos descuentos que no existen en WooCommerce, pero que son necesarios para proceder (más sobre eso en la sección de Cupones).
- Impuestos - crear impuestos en WooCommerce crea los impuestos correspondientes en Megaventory. Actualizar los impuestos no está permitido.
- Pedidos - cualquier pedido realizado en WooCommerce crea los correspondientes pedidos de venta en Megaventory.

### ¿Qué tipos de sincronizaciones iniciales se pueden lanzar manualmente?

Hay tres acciones de sincronización inicial:

- Importando clientes de WooCommerce a Megaventory.
- Importando productos de WooCommerce a Megaventory.
- Importando solo descuentos porcentuales de WooCommerce a Megaventory.

Todo lo anterior está disponible en la sección de Inicialización en la configuración del plugin Megaventory.

### Aquí va una imagen

**Se recomienda ejecutar las tres sincronizaciones inmediatamente después de la integración y antes de tomar cualquier otra medida. Tenga en cuenta que los tres pasos pueden tardar algún tiempo en completarse, y no deben interrumpirse.**

## Solución de problemas usando WooCommerce con Megaventory en la interfaz de WooCoommerce

Puedes solucionar cualquier problema que surja en la conexión WooCommerce - Megaventory en la interfaz de WooCommerce

Para ello, debes entrar en el panel de administración de Megaventory en WooCommerce haciendo clic en un enlace de la barra lateral.

### Aquí va una imagen 

En la parte superior del panel de administración, se pueden ver tres secciones: estado, configuración e inicialización.

### Aquí va una imagen

La sección Status indica el estado del plugin:

La conexión indica si se pudo establecer una conexión con los servidores de Megaventory. Si este elemento indica un problema, asegúrese de que sus servidores están en línea. Si es así, entonces el problema probablemente se encuentra en el lado del Megaventory y deberías contactar con nuestro soporte.

Clave indica si la clave de la API es correcta.

Currency indica si las principales monedas de Megaventory y WooCommerce coinciden.

Iniciado indica si el plugin ha sido iniciado.

Si alguno de estos elementos no indica éxito, el plugin se detiene completamente hasta que los problemas se resuelvan. Los problemas deben ser atendidos empezando desde el principio de la lista - por ejemplo, los problemas con la conexión también causarán que otros estados indiquen fracaso (sin conexión, no hay manera de comprobar si la clave API es correcta, o si las monedas coinciden). Ocuparse del problema de arriba a menudo resolverá los problemas de abajo.

Las siguientes secciones pueden ayudar a identificar la causa de cualquier problema que surja y cómo abordarlo.

### Interfaz - Registro de errores

### Aquí va una imagen

Debajo de la parte superior de la interfaz, puedes encontrar el registro de errores. Muestra toda la información sobre cuándo y dónde el plugin encontró problemas. La lista está ordenada con los problemas más recientes en la parte superior.

La tabla consta de las siguientes columnas:

_ID_ - el id del mensaje de error

_Megaventory ID_ - El ID de la entidad a la que se refiere el error. 0 o valores negativos significan que este ID no es relevante (por ejemplo, la entidad no existe en Megaventory todavía, o el plugin no encontró ID).

_WooCommerce ID_ - El WooCommerce ID de la entidad a la que se refiere el error. 0 o valores negativos significan que el ID es irrelevante en este caso.

_Creado en_ - Indica cuando el error fue registrado.

_Tipo de error_ - El tipo de error. Hay tres tipos de error:

_Advertencia_ - Notifica explícitamente sobre algunas acciones que ocurren entre bastidores, pero no significa necesariamente que algo haya salido mal.

_Error_ - Esto indica que algo salió mal, lo más común es que una entidad (Cliente, Producto, etc.) no se haya guardado por alguna razón.

_Fatal_ - Esto causa que todo el plugin se detenga, en lugar de afectar sólo a ciertos procesos. En la mayoría de los casos, este tipo de error significa avisos adicionales en la sección de estado de la interfaz.

_Nombre de la entidad_ - el nombre de la entidad a la que se refiere el error. A veces puede estar vacío, cuando el nombre de la entidad no existe, etc.

_Problema_ - la descripción de cuál es el problema; se supone que esta descripción debe describir rápida y exhaustivamente lo que sucedió.

_Mensaje completo_ - la descripción completa del problema.

_Código de error_ - El código del error. Esto está destinado a ser una referencia para los programadores o el equipo de Megaventory.

La mayoría de las veces los errores aparecen porque una entidad (Producto, Cliente, Pedido, etc.) no se sincronizó correctamente debido a detalles incorrectos (nombre demasiado largo, falta de SKU, el producto ya existe, etc.). En la mayoría de los casos, estos problemas requieren una rápida intervención manual.

### Interfaz - Tabla de impuestos

La siguiente tabla está disponible debajo del registro de errores:

### Aquí va una imagen

**Use esta tabla para asegurarse de que los impuestos están correctamente sincronizados:**

Cada impuesto debe ser representado con una fila separada en la tabla

Cada impuesto debe tener una identificación de Megaventory. Si la columna de identificación del Megaventorío está vacía, es cero o tiene un valor negativo, este impuesto no está correctamente sincronizado y causará problemas. Consulte el registro de errores para obtener más información.

## Características de Megaventory
***
Una extensa lista de las características de Megaventory vinculadas por medio de la integración de WooCommerce sigue para referencia.

**Gestión de inventario**

- Múltiples ubicaciones / Almacenes / Tiendas
- Alertas de acciones
- Devoluciones de bienes de clientes / a proveedores
- Disponibilidad de los proveedores y plazos de entrega
- Cambios en el inventario a lo largo del tiempo
- Seguimiento del coste del producto a lo largo del tiempo
- Números de serie
- Transferencia entre localidades

**Cumplimiento de la orden**

- Órdenes de venta de los clientes
- Órdenes de compra a proveedores
- Citas de ventas para clientes
- Proveedores de transporte
- Envío parcial / recepción parcial
- Ventas y compras en consignación
- Ventas y Compras de Dropshipping
- Comprobación de la capacidad de cumplimiento automatizada
- Servicios

**Creación de informes**

- Movimientos de entrada y salida
- Niveles de disponibilidad
- Ganancia bruta
- Valor de inventario
- Inteligencia de negocios lista
- Intercambio de informes a los usuarios
- Recoger y empaquetar las fichas
- Recibos de entrega

**Seguimiento de la fabricación**

- La lista de materiales
- Asignación de componentes a las órdenes de trabajo
- Recepción total/parcial de productos terminados
- Actualizaciones rápidas de fabricación a granel
- Fabricación de niveles múltiples
- Costo del trabajo en proceso
- Costos de mano de obra por orden de trabajo
- Impresiones de la orden de trabajo

**Administración de datos**

- Permisos de usuario sofisticados
- Registros detallados de la actividad del usuario
- Respaldo y restauración en cualquier momento
- Importación y exportación de datos
- Capacidad de datos de perforación
- Múltiples monedas
- Tipos de cambio de divisas
- Reglas de precios
- Gestión de contactos

**Personalización del software**

- Localizado en múltiples idiomas
- Textos personalizables por el usuario
- API rico y sencillo
- Plantillas personalizadas de documentos y facturas
- Numeración automática de facturas personalizada
- Escaneo de códigos de barras / Impresión de códigos de barras
- Acceso directo a los datos mediante tarjetas intuitivas
- Múltiples integraciones

## Contáctenos
***

Siéntase libre de contactarnos a través de los siguientes canales para conocer los desarrollos y actualizaciones más recientes de la aplicación, así como para recibir material útil de la industria:

[Página web](https://megaventory.com)

[Blog](https://blog.megaventory.com)

[Facebook](https://www.facebook.com/megaventorycom/)

[Twitter](https://twitter.com/megaventory)

[LinkedIn](https://www.linkedin.com/authwall?trk=ripf&trkInfo=AQFllBpGIAUHvgAAAXJ2kI_IzGYt87fCNt1B563B6XqzGKMohJ6Cv3hLmE_62E4Tu14PxZYSDQOqUUHcnd6uUdzPfdSy0zJraXlNRsCI7FFnzTmTKz11KvqbrD6Lz72-ocQqMKc=&originalReferer=https://docs.woocommerce.com&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fmegaventory-inc)

También estamos disponibles para una demostración gratuita de la solución y su integración con WooCommerce - ¡sólo reserva una cita [aquí](https://go.oncehub.com/MegaventoryDimitris)!

