---
id: ecommerce-crear-productos-woocommerce
title: Crear productos con WooCommerce
sidebar_label: Crear productos con WooCommerce
---
***

**¡Parece que llegó el momento de crear nuevos productos para tu tienda en línea!**  
A continuación te mostramos como crear los dos tipos de productos principales en tu tienda con WooCommerce de forma individual. Los productos simples, a grandes rasgos tiene solamente un precio, categoría y descripciones, mientras que los productos variables pueden tener diversas características adicionales como el precio, las imagenes etc. y básicamente toda la información del producto puede variar en función de esas características.

## Ingresar al panel de productos
Lo primero que vamos a tratar en esta guía, es la forma de introducir o administrar nuestros productos en la tienda. Esto lo podemos realizar buscando en el menú lateral principal de WordPress, el bloque “**Productos**”, hacemos clic en “Todos los productos”

![panelProductos](/static/img/ProductosWoocommerce/productosPanel.png)  
**Nota:** Podemos editar los productos existentes, borrarlos o bien, ingresar nuevos.

**¿Qué podemos encontrar?**  
Veremos un listado detallado de los productos que has creado (publicados o no), organizados por fecha de creación, del más reciente al más antiguo. Es posible utilizar los filtros para encontrar un producto o serie de productos que nos interese. 
Como podemos ver, un aspecto importante es la disponibilidad de cada producto, en verde si Hay existencia, en rojo si se encuentra AGOTADO y no podrá ser comprado hasta cambiar su estado a disponible. 


## Crear productos simples

1. Para agregar productos nuevos lo primero que debemos hacer es acceder a la opción de “Añadir nuevo”, podremos añadir la información de nuestro producto como el nombre, categoría, imágenes y SEO.  
(Está es la forma correcta de agregar productos individuales, no deben agregarse productos individuales por medio de csv)

2. Como vemos en la parte superior izquierda podemos agregar el nombre de nuestro producto nuevo y en el más grande una descripción larga del producto.

3. Para poner precio a nuestro producto debemos buscar la sección de “Datos del producto” que se encuentra más abajo en la sección, debemos asegurarnos que el producto se encuentre en “Producto simple”, introducimos el precio. Es importante no confundir el precio normal y el rebajado, el precio normal se verá subrayado si hay algún valor en el precio rebajado.

![productosSimples](/static/img/ProductosWoocommerce/productosSimples.png)

4. Al final del panel derecho encontraremos el lugar para agregar nuestra imagen principal y también imágenes a la galería en caso de que tengamos muchas imágenes. Si dejamos vacía la opción de “Imagen del producto” y ponemos varias imágenes en “Galería del producto” la primera imagen cargada será la principal.

<img src="/static/img/ProductosWoocommerce/panelEtiquetas.png" width="35%"/>  

5. También podemos agregar categorías y subcategorías a nuestro producto. En el panel derecho tenemos los botones de “Vista previa” y “Publicar”, si no estamos seguros de los cambios podemos previsualizar y una vez que estamos seguros publicamos el artículo.

![productos](/static/img/ProductosWoocommerce/productos.png)

## Crear productos variables

Crear un producto variable es muy similar a crear uno simple, la diferencia es que en el apartado de “Datos del producto” seleccionaremos “Producto variable”.  
**Si no sabes como crear el producto revisa la primera parte de “Crear productos simples".**

![productoVariable](/static/img/ProductosWoocommerce/productoVariable.png)

Una vez ya tenemos seleccionado “Producto variable” haremos clic en la ventana de “Atributos”, elegimos la opción de “Atributo de producto personalizado” y después “Añadir”.

![productosVariables2](/static/img/ProductosWoocommerce/productosVariables2.png)

Cuando hacemos clic en “Añadir” veremos dos cuadros de texto (Nombre y Valores) el Nombre se refiere al tipo de variación, ejemplos serían: Talla, color, tamaño, presentación.  
Y el apartado de Valores se refiere a los elementos que conforman el atributo, por ejemplo para el Nombre: Color, todos los colores serían posibles valores y se separan con una barra vertical “|” (normalmente esta barra se escribe con la tecla a la izquierda del número uno)  

![productosVariables3](/static/img/ProductosWoocommerce/productosVariables3.png)  
**Nota:** Una vez tenemos el nombre y valor del atributo, marcamos como activa la casilla “Usado para variaciones” y guardamos.

Cuando ya tenemos los atributos listos vamos a la pestaña de variaciones y elegimos la opción de “Crear variaciones para todos los atributos” y hacemos clic en “Ir” . Esto va a generar las combinaciones de producto posibles según los atributos que creaste.

Por ejemplo, si tienes el atributo color con 3 colores, entonces tienes 3 productos diferentes pero si tienes color y Talla (talla con 2 valores como grande y mediano) entonces al combinarlos tendrás 6 productos distintos, que son el resultado de la combinación de cada variación. 

![productosVariables4](/static/img/ProductosWoocommerce/productosVariables4.png)  

Si queremos modificar cada uno de los productos variables hacemos clic sobre el ID, como #3008 y podremos ingresar imágenes individuales para cada variación, peso y precio así como información diferente a la del producto principal.

Al final damos clic a guardar cambios y en publicar el producto en la tienda

![productosVariables5](/static/img/ProductosWoocommerce/productosVariables5.png)  

Si haz seguido todos los pasos tu producto debe estar correctamente configurado ¡Felicidades!, es importante mencionar que esta no es la mejor forma de crear productos si lo que quieres es crearlos de forma masiva, si deseas mostrar muchos productos en tu tienda puede interesarte nuestro articulo sobre como [Subir productos de forma masiva](/docs/ecommerce-subir-productos-csv)