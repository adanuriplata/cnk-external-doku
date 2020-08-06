---
id: ecommerce-optimizarImagenes
title: Optimizar imagenes para un CSV
sidebar_label: Optimizar imagenes para un CSV
---
***

Seguramente tus imágenes tendrán tamaños y formatos diferentes pero nosotros necesitamos que sean lo más similar posible. Sigue los siguientes pasos para asegurar imágenes óptimas.

1. Exportar o editar todas las imágenes para que tengan el mismo tamaño, recomendamos 800 x 800 px y en formato jpg.

2. Guardamos todas las imágenes en la misma carpeta y les cambiamos el nombre por el de su SKU, *por esta razón es importante tener una clave de identificación única para cada producto*, ya que las imágenes tomarán el nombre del producto para evitar confusiones y asegurar que los productos se suban correctamente. 
Si un producto tiene más de una imagen debemos agregar un conteo al SKU. Por ejemplo, si el SKU es PLY-01 la imágen principal se llamará PLY-01.jpg y la segunda imágen se llamará PLY-02.jpg (Tener cuidado con el formato de la imágen, debe respetarse el: .png o .jpg).  

**A continuación se hace una explicación de como optimizar las imágenes que utilizará:**

#### Buscar TinyPNG y abrir la liga que se señala en la siguiente imagen
<img src="https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO1.png" width="80%"/>  

#### Seleccionar las imágenes que desea comprimir
![TinyPNG](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO2.png)

#### Arrastrar las imágenes hacia el recuadro **Drop your .png or .jpg file**
![TinyPNG](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO3.png)

#### Una vez que se haya completado el proceso dar click en **Download all**
![TinyPNG](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO4.png)

#### Un archivo .zip se descargará automáticamente, una vez ahí debe dar clic derecho y seleccionar **Extraer aquí**
![TinyPNG](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO5.png)

![TinyPNG](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO6.png)

#### Debe seleccionar las imágenes que desea utilizar en su archivo CSV 
![TinyPNG](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO7.png)

<img src="/static/img/SubirCSV/csv12.png" width="100%"/>  

#### Arrastre las imágenes hacia el panel **Media de WordPress**
Ahora que tenemos listas nuestras imágenes debemos subirlas a nuestra página web WordPress. 
En el panel izquierdo de nuestro WordPress encontraremos la opción de “Medios” al hacer clic podemos ver todas las imágenes que han sido cargadas en nuestro sitio. 

<img src="https://static.conektica.com/static/img/SubirCSV/csv13.png" width="75%"/>  

**Una vez que tenga sus imágenes cargadas debe continuar a colocar el URL en el documento CSV**  
Ya que todo esto es parte de nuestro proceso para subir imágenes de forma masiva necesitamos el URL de las imágenes que acabamos de subir a nuestro WordPress, para obtener los URL hacemos clic sobre la miniatura de la imágen y aparecerán las especificaciones de la imágen.  
En la parte inferior derecha vemos el URL donde está guardada nuestra imágen. Debemos seleccionar y copiar ese link en la casilla de “Images” de nuestro archivo CSV (Puedes seleccionarlo y oprimir Ctrl + C, Ctrl + V).

<img src="https://static.conektica.com/static/img/SubirCSV/csv14.png" width="100%"/>  

Tenemos que escribir el link de las imágenes una por una en nuestro archivo CSV con el producto que le corresponde y una vez copiemos todos debe verse algo así:

<img src="https://static.conektica.com/static/img/SubirCSV/csv15.png" width="70%"/>  