---
id: doc26
title: Subir productos a WooCommerce por medio de Wordpress
sidebar_label: Subir Productos a WooCommerce
---
Este tutorial le ayudará a agregar productos a WooCommerce por medio de Wordpress, se va a utilizar un **archivo CSV** que va ser editable en **Excel** o en **Google Docs** en esta ocasión se utilizará excel.

Siga estos pasos:

1. Crear un archivo CSV en Excel.

![Imagen 1]()

**NOTA:** en este ejemplo en la parte superior se van a tener diferentes celdas con los títulos: 

- **Categories:** Son las categorias a las cuales pertenece el producto

- **Brand:** La marca del producto

- **SKU:** Número de identificación de el producto

- **Name:** Nombre final del producto visible al público

- **Description:** Descripción larga del producto

- **Short Description:** Descripción corta que se va a mostrar a un lado de los productos

- **Images:** La URL de la imagen del producto, es importante poner el URL completo de la imagen y respetar el dominio 

- **Attribute 1 name:** Nombre del atributo del producto

- **Attribute 1 value(s):** Valor de atributo del producto 

- **Price:** El precio del producto, por defecto WooCommerce agrega el simbolo **$**

**NOTA:** Para obtener el URL de la imagen puede dar clic en **Medios** y seleccionar la imagen de la cual quiera saber el URL y del lado inferior derecho aparecerá el URL 

![Imagen extra1]()

![Imagen extra2]()

2. Una vez que tiene listo su archivo CSV se va a dirigir a **Archivo >> Guardar como** 

![Imagen 2]()

3. En la ventana **Guardar como** va a designar en donde quiere guardar su archivo, el **nombre del archivo quedá a su elección** sin embargo hay que verificar que el **formato en el que se esta guardando es CSV**.

![Imagen 3]()

4. Para asegurarse de la compatibilidad de clic en la opción **Herramientas >> Opciones web...**

![Imagen 4]()

5. En la ventana de Opciones Web de clic en el apartado Codificaciones y se debe asegurarse de que en **Guardar este documento como:** Unicode (UTF-8) finalmente de clic en **Aceptar**

![Imagen 5]()

6. Una vez que se aseguro de la compatibilidad, se regresara a la ventana Guardar como y de clic en **Guardar**

![Imagen 6]()

7. Una vez que se tiene el archivo CSV con el formato correcto va a iniciar sesión en su panel de WordPress

![Imagen 7]()

8. Dentro del panel debe acceder a la opción de **Herramientas >> Importar**

![Imagen 8]()

9. En la página **Importar** busque la opción **Productos de WooCommerce (CSV)** y de clic en **Ejecutar importador**

![Imagen 9]()

10. Una vez que se ejecuto el importador de clic en **Seleccionar archivo** donde deberá seleccionar el archivo CSV creado anteriormente 

![Imagen 10]()

11. Cuando lo haya seleccionado de clic en **Continuar**

**NOTA:** La opción "Los productos existentes con el mismo ID o SKU serán actualizados. Los productos que no existan serán omitidos", es opcional. 

![Imagen 11]()

12. En el panel **Mapeo de columnas** deberá relacionar las columnas con los nombres de las columnas como se muestra a continuación:

![Imagen 12]()

**NOTA:** En caso de que el Precio no lo tome directamete de clic en las opciones desplegables y elija alguna opción (en nuestro caso utilizaremos Precio de oferta:)

![Imagen 13]()

13. Finalmente de clic en **Ejecutar Importador** continue por el siguiente filtro **Importar** y estarán listos sus productos

![Imagen 14]()

14. Para comprobar que los prooductos fueron importados correctamente vaya a el apartado **Productos**

![Imagen 15]() 

¡Buenas noticias! Ya está todo listo. 





