---
id: doc26
title: Subir productos a WooCommerce por medio de Wordpress
sidebar_label: Subir Productos a WooCommerce
---
Este tutorial le ayudará a agregar productos a WooCommerce por medio de Wordpress, se va a utilizar un **archivo CSV** que va ser editable en **Excel** o en **Google Docs** en esta ocasión se utilizará Excel.

Siga estos pasos:

1. Crear un archivo CSV en Excel.

![Imagen 1](https://github.com/adanuriplata/cnk-external-doku/blob/master/static/img/WooCommerce/WP1.png?raw=true)

En este ejemplo en la parte superior se van a tener diferentes celdas con los títulos: 

**Categories**

Son las categorías a las cuales pertenece el producto


**Brand**

La marca del producto

**SKU**

dichos números no deben repetirse

**Name**

Nombre final del producto visible al público

**Description**

Descripción larga del producto

**Short Description**

Descripción corta que se va a mostrar a un lado de los productos

**Images**

La URL de la imagen del producto, es importante poner el URL completo de la imagen y respetar el dominio. Se recomienda nombrar a la imagen con su correspondiente SKU

**Attribute 1 name**

Nombre del atributo del producto

**Attribute 1 value(s)**

Valor de atributo del producto 

**Price**

El precio del producto, por defecto WooCommerce agrega el simbolo **$**

**Imágenes con URL**

1. Buscar TinyPNG y abrir la liga que se señala en la siguiente imágen
![TinyPNG](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO1.png)

2. Seleccionar las imágenes que desea comprimir
![TinyPNG](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO2.png)

3. Arrastrar las imagenes hacia el recuadro **Drop your .png or .jpg file**
![TinyPNG](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO3.png)

4. Una vez que se haya completado el proceso dar clic en **Download all**
![TinyPNG](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO4.png)

5. Un archivo .zip se descargará automáticamente, una vez ahí debe sar clic derecho y seleccionar **Extraer aquí**
![TinyPNG](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO5.png)

![TinyPNG](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO6.png)

5. A continuación debe seleccionar las imágenes que desea utilizar en su archivo CSV 
![TinyPNG](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO7.png)


**NOTA:** Para obtener el URL de la imagen puede dar clic en **Medios** y seleccionar la imagen de la cual quiera saber el URL y del lado inferior derecho aparecerá el URL 

![Imagen extra1](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/Extra1.png)

![Imagen extra2](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/Extra2.png)

2. Una vez que tiene listo su archivo CSV se va a dirigir a **Archivo >> Guardar como** 

![Imagen 2](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP2.png)

3. En la ventana **Guardar como** va a designar en donde quiere guardar su archivo, el **nombre del archivo es a su elección** sin embargo hay que verificar que el **formato en el que se esta guardando es CSV**.

![Imagen 3](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP3.png)

4. Para asegurarse de la compatibilidad de clic en la opción **Herramientas >> Opciones web...**

![Imagen 4](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP4.png)

5. En la ventana de Opciones Web de clic en el apartado Codificaciones y se debe asegurarse de que en **Guardar este documento como:**  se encuentre Unicode (UTF-8) finalmente de clic en **Aceptar**

![Imagen 5](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP5.png)

6. Una vez que se aseguro de la compatibilidad, se regresará a la ventana Guardar como y de clic en **Guardar**

![Imagen 6](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP6.png)

7. Una vez que se tiene el archivo CSV con el formato correcto va a iniciar sesión en su panel de WordPress

![Imagen 7](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP8.png)

8. Dentro del panel debe acceder a la opción de **Herramientas >> Importar**

![Imagen 8](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP9.png)

9. En la página **Importar** busque la opción **Productos de WooCommerce (CSV)** y de clic en **Ejecutar importador**

![Imagen 9](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP10.png)

10. Una vez que se ejecuto el importador de clic en **Seleccionar archivo** donde deberá seleccionar el archivo CSV creado anteriormente 

![Imagen 10](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP11.png)

11. Cuando lo haya seleccionado de clic en **Continuar**

**NOTA:** La opción "Los productos existentes con el mismo ID o SKU serán actualizados. Los productos que no existan serán omitidos", es opcional. 

![Imagen 11](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP12.png)

12. En el panel **Mapeo de columnas** deberá relacionar las columnas con los nombres de las columnas (en nuestro ejemplo se mostraría de la siguiente forma):

![Imagen 12](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP13.png)

**NOTA:** En caso de que el Precio no lo tome directamete de clic en las opciones desplegables y elija alguna opción (en nuestro caso utilizaremos Precio de oferta:)

![Imagen 13](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP14.png)

13. Finalmente de clic en **Ejecutar Importador** continue por el siguiente filtro **Importar** y estarán listos sus productos

![Imagen 15](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP15.png)

![Imagen 15.1](https://github.com/adanuriplata/cnk-external-doku/blob/master/static/img/WooCommerce1/Importaci%C3%B3n.png?raw=true)

14. Para comprobar que los prooductos fueron importados correctamente vaya a el apartado **Productos**

![Imagen 15](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP16.png) 

**Video Tutorial General**

<iframe src="https://player.vimeo.com/video/430499151" width="640" height="343" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

**Video Tutorial para documento CSV**

<iframe src="https://player.vimeo.com/video/430535208" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

**Video Tutorial para las optimizar imagenes en archivo CSV**

<iframe src="https://player.vimeo.com/video/430533447" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>






¡Buenas noticias! Ya está todo listo. 





