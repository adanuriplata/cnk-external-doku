---
id: ecommerce-gestion-de-productos
title: La gestión de productos en el mercado de WooCommerce
sidebar_label: La gestión de productos en el mercado de WooCommerce
---
Los desarrolladores que venden en el Mercado WooCommerce pueden editar las páginas de los productos, acceder a información como datos de uso y ventas, además de administrar las revisiones de sus productos.

## Gestión de los productos
***

La mayor parte del trabajo de gestión de productos se puede hacer desde la pantalla de **Todas las extensiones**. Para llegar allí:

- Acceda al **panel de control de vededores**
- Ir a **Extensiones > Todas las extensiones**
- Selecciona la extensión en la que quieres trabajar

Esto te llevará a la descripción del producto, que incluye:

- **El nombre:** El nombre del producto, tal como aparece en la página del producto. Ten en cuenta que esto puede ser diferente de la ficha del producto o de la URL.
- **Suscripción de un solo sitio:** El precio base para una suscripción de un solo sitio del producto.
- **Última actualización:** La fecha en que se subió la última versión y un enlace al registro de cambios.
- **Categorías:** Las categorías en las que se encuentra el producto.
- **Descripción corta:** El eslogan del producto, más sobre esto [aquí](https://docs.woocommerce.com/document/marketing-product-pages-writing/#product-card).

### Aquí va una imagen

Desde allí, puedes ver información sobre el uso, subir una nueva versión o editar la página del producto.

### Editar las páginas de productos

Para **editar una página de producto**, selecciona Editar página de producto en la descripción del producto.

### Aquí va una imagen

Para obtener más información sobre cómo sacar el máximo provecho de las páginas de sus productos, [lea los lineamientos para escribir contenido de marketing](https://docs.woocommerce.com/document/marketing-product-pages-writing/).

### Understanding product statistics

En el resumen del producto, la pestaña **Estadísticas** incluye información de uso para ayudar a los desarrolladores a saber qué versiones de las tecnologías pertinentes se utilizan con un producto determinado.

### Aquí va una imagen

Estas estadísticas provienen del WooCommerce Tracker y están basadas en tiendas que permiten el seguimiento del uso. Los desarrolladores pueden usar esta información para tomar decisiones sobre qué versiones de WordPress, WooCommerce y PHP soportar.

### Subir nuevas versiones

Para subir una nueva versión, selecciona la pestaña **Versiones**. Verás todas las versiones que has subido anteriormente, incluyendo los aspectos destacados de cada versión.

### Aquí va una imagen

Selecciona **Agregar versión** para subir una versión actualizada:

- **Selecciona el archivo .zip** que quieres subir desde tu ordenador
- **Añade el número de versión**
- Haga clic en **Enviar nueva versión**

Una vez enviado, haremos pruebas básicas en el archivo subido. Todos los Vendor Admins recibirán una notificación por correo electrónico durante el proceso, incluyendo:

- **Confirmación:** Los administradores de vendedores recibirán un correo electrónico cuando se envíe una nueva versión, confirmando que está en la cola. No se necesita ninguna acción aquí.
- **Rechazado:** Si una versión falla en alguna parte de nuestras pruebas automatizadas, los administradores recibirán un correo electrónico informándoles, incluyendo el error específico. Los desarrolladores deben tratar de resolver el error y enviar una nueva versión cuando esté lista.
- **En vivo:** Si una versión pasa las pruebas automatizadas, se desplegará automáticamente y se pondrá a disposición de los clientes. No es necesario realizar ninguna acción.

## Formatear el registro de cambios

Cuando se sube una versión, WooCommerce.com busca un formato específico para el registro de cambios. El nombre del archivo debe ser `changelog.txt` y debe tener el siguiente formato:

### Aquí va una imagen

En el formato de la fecha, el espacio entre el `-` y la palabra `versión` es muy importante colocarlo.

#### Errores comunes

Si una carga falla, hay algunos errores comunes que deberías comprobar primero.

**El nombre del archivo:** WooCommerce.com busca un nombre específico para tu archivo .zip y la carpeta principal dentro de él. Verás el nombre esperado cuando intentes subir un producto:

### Aquí va una imagen

**Que un changelog este presente** - un archivo llamado changelog.txt debe estar presente para servir como un registro de lo que ha cambiado de versión a versión.

El **formato changelog** - [más sobre cómo debería verse aquí]().

## Comprender la venta de productos

Los vendedores tienen acceso a informes sobre el rendimiento de sus productos, incluyendo:

- Ganancias: **Nuevas ventas**, **ventas de renovación** y cantidad de **reembolso**.
- Comisiones: La **cantidad ganada por el Vendedor** de todas las ventas.
- Suscripciones: Total de **suscripciones activas**, incluyendo las nuevas y las renovadas este mes, así como **la tasa de reembolso y la tasa de renovación.**

Para encontrar esta información, ingrese al **Tablero de Vendedor** y vaya a **Extensiones > Informe de Ventas.**

### Aquí va una imagen

Los datos están disponibles a partir de noviembre de 2017.

## Viendo las reseñas

Los clientes que han comprado un producto pueden dejar una calificación y revisión. Cuando hay un mínimo de 10 valoraciones, las reseñas se muestran en la página del producto, y las valoraciones son visibles en la página del producto, en la página de la categoría y en los resultados de la búsqueda. [Lea los puntos a tomar en cuenta sobre clasificaciones y reseñas](https://docs.woocommerce.com/document/ratings-and-reviews/).

Tanto si son las revisiones pública o no, los Administradores de Ventas pueden ver las revisiones de sus propios productos accediendo al **Tablero de Vendedores** y luego yendo a **Extensiones > Revisiones**.

### Aquí va una imagen

## Links relevantes
[Cómo conseguir ayuda](https://docs.woocommerce.com/document/how-to-get-help/)



