---
id: ecommerce-pedidos-woocommerce
title: Pedidos en WooCommerce
sidebar_label: Pedidos en WooCommerce
---
***

*Asumiremos que ya sabes como ingresar al panel de control de WordPress y tienes acceso a tu cuenta de administrador de tienda.(Si no sabes como iniciar sesión consulta nuestro articuo sobre como [Accesar a WordPress](/docs/ecommerce-acceso-al-panel-wordpress))*  


Recuerda que los pedidos se crean cuando un cliente completa el proceso de compra. Estos solamente son visibles por el administrador de la página y cada pedido tiene asignado un único número identificador o ID.
**Debemos seguir los siguientes pasos para acceder a la información de los pedidos:**
### 1. Ingresar a panel de pedidos  
- Una vez que has iniciado sesión. En el panel de administración izquierdo de WordPress buscamos el apartado de "WooCommerce" y pasamos el mouse encima para desplegar las opciones.
- Seleccionamos Pedidos  
    - Si no tienes ningún pedido, al dar clic puedes crear uno para familiarizarte con las herramientas.
    - Si ya tienes pedidos, verás una lista típica de WordPress con la información más importante de los pedidos a simple vista.
- Para acceder a las herramientas de gestión de pedidos debemos hacer clic sobre el ID del pedido, generalmente se ve así: #12304.

<img src="/static/img/pedidosUsuarios/pedidos1.png" width="100%"/>  

### 2. Administrar pedidos
Como vemos en la siguiente imágen tenemos múltiples secciones describiremos las funciones de cada una a continuación. 

<img src="/static/img/pedidosUsuarios/pedidos2.png" width="100%"/>  

#### Detalles del pedido
En esta sección podemos ver información general de nuestro pedido como la dirección de facturación, la dirección de envío, la fecha de creación del pedido y la hora. Posiblemente uno de los campos más importantes es el “Estado”, ya que de eso dependerá si el envío procede

#### Estados disponibles
- **Pendiente de pago**  
    El estado pendiente de pago y el estado en espera suelen confundirse a menudo, aunque en seguida verás que son muy diferentes. Y se confunden porque, cuando buscas información, la definición que se suele dar para ambos es la misma: los pedidos en estos estados están pendientes o en espera de que se realice el pago.

- **Procesando**  
    Una vez se ha producido el pago, el estado del pedido pasa a procesando, bien sea de forma manual o automática, según hemos visto en la sección anterior. Cuando el pedido llega a este estado, las unidades de producto correspondientes al pedido ya se han descontado del stock.

- **En espera**  
    Si por ejemplo el método de pago es la transferencia bancaria, el pedido se quedará en estado de espera (el circulito gris con la línea horizontal). Está en espera de que yo realice el pedido, el gestor de la tienda lo comprueba, y manualmente lo valida y le cambia el estado (generalmente a procesando).

- **Completando**  
   Si todo va bien, el pedido pasará a continuación a completo. ¿Cuándo? Pues bien cuando lo hayamos despachado para envío (si hay envío) o cuando lo tengamos listo para recoger, si el cliente escogió la opción de recogida local.
- **Cancelado**  
    Suele pasar cuando el usuario elige pagar mediante PayPal pero, una vez en la web del procesador, pincha en el enlace “Cancelar y volver a” .
   
- **Reembolsado** 
    Se reembolsa el pedido según las necesidades de la tienda o cliente.

- **Fallido**  
    Este estado tiene que ver con el procesamiento del pago, y normalmente nos encontraremos con la exclamación blanca sobre fondo amarillo cuando el pago mediante tarjeta de crédito ha dado error por cualquier motivo.

#### Acciones del Pedido  
Existe también la sección de acciones del pedido, en esta parte podemos reenviar el correo de confirmación al cliente, también podemos enviar los detalles del pedido al cliente.
La última opción "Generar permisos de descarga" sirve solo para pedidos que tengan productos descargables

#### Notas del pedido  
Luego tenemos una herramienta que se usa muy poco, pero que es extremadamente útil. Las notas del pedido.
Las notas pueden ser de dos tipos:  
- Privadas (aparecen en gris). Estas son para los administradores de la tienda, y los clientes no las pueden ver. Se usan  para aclaraciones internas.  
- Al cliente (aparecen en lila). Estas son notas que el cliente recibirá por mail. Se usan para comunicarnos con el cliente y tener constancia de todas ellas. Por ejemplo, si un pedido se va a retrasar un poco, podemos enviarle una nota (correo) a través de esta opción.

<img src="/static/img/pedidosUsuarios/pedidos3.png" width="80%"/>  

####  Productos del pedido
A continuación tenemos el listado de artículos que contiene el pedido en sí. Es lo equivalente al carrito que ha llenado el cliente.
Aparte de poder ver toda la información, si el producto no está completado, podremos editar lo que queramos usando el icono del lápiz. En cualquier momento podríamos:  
- Aumentar o disminuir el número de unidades pedidas.
- Añadir o quitar productos.
- Modificar el precio final.
- Añadir una cuota (cualquier recargo o incremento).
- Realizar un reembolso (total o parcial).

¡Listo! A grandes rasgos esta es la información que puedes administrar respecto a los pedidos que llegan a tu tienda con WooCommerce, puede que te interese leer nuestro articulo sobre los [Ajustes Generales de WooCommerce](/docs/ecommerce-ajustes-generales)