---
id: ecommerce-subir-productos-csv
title: Subir productos de forma masiva a WooCommerce
sidebar_label: Subir productos de forma masiva a WooCommerce
---
***
## Crear un archivo CSV en Excel

Al parecer necesitas ayuda para subir muchos productos a tu sitio, **¡Estás en el lugar indicado!**.  
En otros artículos te enseñamos como subir productos individuales a tu sitio, sin embargo eso es solamente útil cuando tienes pocos productos, para subir productos de forma masiva necesitamos crear un archivo CSV separado por comas, nosotros te entregamos una plantilla CSV para hacer más fácil el proceso, sin embargo necesitas llenar el archivo correctamente con tu información para que todo funcione.  

Este tutorial te ayudará a agregar productos a WooCommerce por medio de Wordpress con un archivo CSV, en esta ocasión usamos Excel para editar nuestro archivo pero se puede hacer en cualquier programa para manejar hojas de cálculo.  

### Columnas
Llenar la información correcta en la columna que le corresponde es muy importante, describiremos cada una de las columnas a continuación y explicaremos como llenarlas correctamente. **Es muy importante que no le demos ningún tipo de formato a las celdas como puede ser Moneda, Fecha, Hora, Contabilidad etc.**

![csv](/static/img/SubirCSV/csv.png)

#### Categories
En la columna de categoría podemos ingresar una o más categorías para nuestros productos, también podemos agregar subcategorías señalándolas con un signo de “mayor que” por ejemplo: Ropa > Mujer.  Esto indica que el producto pertenece a la categoría Ropa y a la subcategoría Mujer, si queremos que el artículo pertenezca a distintas categorías y subcategorías, debemos separarlas por comas. (Es muy importante tener cuidado con la ortografía, mayúsculas y minúsculas) si tenemos errores de dedo, o no escribimos las categorías de forma exacta podríamos tener categorías duplicadas. Por ejemplo si escribimos la categoría Ropa y ropa, se generan dos categorías diferentes y es algo que en general deseamos evitar.

![csv](/static/img/SubirCSV/csv2.png)

**En este ejemplo en la parte superior se ven diferentes celdas con títulos:**

- Subcategorías dentro de una categoría 

<img src="https://github.com/Conektica/cnk-external-doku/blob/master/static/img/WooCommerce2/Y1.png?raw=true" width="50%"/>  

- Combinación de categorías separadas por una coma sin subcategorías

<img src="https://github.com/Conektica/cnk-external-doku/blob/master/static/img/WooCommerce2/Y2.png?raw=true" width="50%"/>  

- Combinación de categorías y subcategorías dentro del mismo producto

<img src="https://github.com/Conektica/cnk-external-doku/blob/master/static/img/WooCommerce2/Y3.png?raw=true" width="50%"/>  


#### Brand
En esta columna podemos asignar una marca a nuestro producto y funciona de manera muy similar a las categorías, separamos por comas si deseamos ingresar más de una marca para el mismo producto. 

<img src="/static/img/SubirCSV/csv3.png" width="30%"/>  

#### SKU
Antes que nada es importante saber que es el SKU, el SKU es una clave de identificación única para los productos y NO debe repetirse de ninguna forma, cada producto debe tener su propia clave de identificación, ya que lo utilizaremos más adelante para otros propósitos. Sin embargo el SKU suele utilizarse a nivel empresa para manejar inventarios cuando se tienen demasiados productos y dependen totalmente de como manejas tu inventario. 

<img src="/static/img/SubirCSV/csv4.png" width="30%"/>  

#### Name
En esta columna pondremos el nombre del producto, de preferencia el nombre del producto también debe ser único y corto, si queremos dar más detalles del producto sin extendernos demasiado tenemos la columna de descripción corta más adelante.

<img src="/static/img/SubirCSV/csv5.png" width="30%"/>  

#### Description
En esta columna debemos escribir una descripción larga y detallada del producto, cualquier información adicional que se quiera dar sobre el producto se hace aquí, no se pueden hacer saltos de línea, debemos respetar el formato de la casilla y solamente escribir la descripción del producto. Todo lo que se escriba en esta casilla será visible para el cliente.

<img src="/static/img/SubirCSV/csv6.png" width="60%"/>  


#### Short Description
La descripción corta debe ser rápida, llamativa y relevante, la información más importante de nuestro producto debe mostrarse en esta descripción para captar la atención y aumentar las posibilidades de que el producto sea comprado, el nombre del producto NO es una descripción corta. En muchas ocasiones el nombre y la descripción corta se mostrarán juntas por lo que podría ser redundante tener la misma información en ambos.  

<img src="/static/img/SubirCSV/csv7.png" width="50%"/>  

#### Images
Esta columna es muy importante y debe tenerse mucho cuidado al manerjala, pues de tener incorrectos los links el producto fallará en subirse y serán omitidos.
Lo primero que debemos saber es que tendremos que modificar el tamaño, nombre e incluso formato de nuestras imágenes, *deberás leer nuestro articulo sobre como [Optimizar imagenes para un CSV](/docs/ecommerce-optimizarImagenes) antes de seguir*.

### Guardar el archivo

1. Una vez que tiene listo su archivo CSV se va a dirigir a **Archivo > Guardar como** 

<img src="https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP2.png" width="100%"/>  

2. En la ventana **Guardar como** va a designar en donde quiere guardar su archivo, el **nombre del archivo es a su elección** sin embargo hay que verificar que el **formato en el que se esta guardando es CSV**.

<img src="https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP3.png" width="100%"/>  

3. Para asegurarse de la compatibilidad de clic en la opción **Herramientas >> Opciones web...**

![Imagen 4](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP4.png)

4. En la ventana de Opciones Web de clic en el apartado Codificaciones y se debe asegurarse de que en **Guardar este documento como:**  se encuentre Unicode (UTF-8) finalmente de clic en **Aceptar**

![Imagen 5](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP5.png)

5. Una vez que se aseguro de la compatibilidad, se regresará a la ventana Guardar como y de clic en **Guardar**

![Imagen 6](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP6.png)

## Subir archivo a WooCommerce

1. Una vez que se tiene el archivo CSV con el formato correcto debes iniciar sesión en el panel de WordPress

<img src="https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP8.png" width="50%"/>  

2. Dentro del panel debes acceder a la opción de **Herramientas >> Importar**

<img src="https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP9.png" width="60%"/>  


3. En la página **Importar** busca la opción **Productos de WooCommerce (CSV)** y da clic en **Ejecutar importador**

![Imagen 9](/static/img/SubirCSV/csv16.PNG)

4. Una vez que se ejecuto el importador da clic en **Seleccionar archivo** donde deberás seleccionar el archivo CSV creado anteriormente 

![Imagen 10](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP11.png)

5. En el panel **Mapeo de columnas** deberás relacionar las columnas con los nombres de las columnas (en nuestro ejemplo se mostraría de la siguiente forma):

<img src="https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP13.png" width="70%"/>  

**NOTA:** En caso de que el Precio no lo tome directamete de clic en las opciones desplegables y elija alguna opción (en nuestro caso utilizaremos "Precio de oferta:")

<img src="https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP14.png" width="70%"/>  

6. Finalmente da clic en **Ejecutar Importador** continua por el siguiente filtro **Importar** y estarán listos tus productos

<img src="https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP15.png" width="90%"/>  
<img src="https://github.com/adanuriplata/cnk-external-doku/blob/master/static/img/WooCommerce1/Importaci%C3%B3n.png?raw=true" width="90%"/>  

12. Para comprobar que los productos fueron importados correctamente ve al apartado **Productos**

![Imagen 15](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP16.png) 

*¡Listo!* Si los productos aparecen en la lista quiere decir que los productos fueron cargados correctamente y aparecerán en la tienda, si recibes algún error durante el proceso de carga revisa tu archivo CSV e intenta de nuevo.

Sabemos que todos estos pasos pueden ser dificiles la primera vez, por lo que hemos preparado un par de videos tutoriales sobre este articulo para que puedas consultarlo si tienes dudas o errores durante el proceso de carga de productos.


**Video Tutorial General**

<iframe src="https://player.vimeo.com/video/430499151" width="640" height="343" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

**Video Tutorial para documento CSV**

<iframe src="https://player.vimeo.com/video/430535208" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

**Video Tutorial para optimizar imágenes a utilizar en archivo CSV**

<iframe src="https://player.vimeo.com/video/430533447" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>


**¡Muchas gracias por leer!**





