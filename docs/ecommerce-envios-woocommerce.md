---
id: ecommerce-envios-woocommerce
title: Envios en WooCommerce
sidebar_label: Envios en WooCommerce
---
***  
## Opciones de envío
En el panel de administración de wordpress elegimos WooCommerce > Ajustes > Envío para editar todas estas opciones. En esta sección nos saldrán 3 pestañas debajo para editarlo todo: Zonas de Envío, opciones de envío y clases de envío.  

<img src="/static/img/envios/envios1.png" width="100%" />

### Zonas de envío
Una zona de envío es un área geográfica donde podemos especificar uno o más métodos de envío para nuestros productos. En las configuraciones podremos abarcar zonas generales (como continentes o países) hasta zonas más detalladas (especificando nombre de ciudades, códigos postales o reglas específicas).  

#### Editar zonas de envío
 
**Para editar la zona de envío:**  
1. Dentro de la seccion de envios aparece la zona de envío creada por conektica dar click en "Editar"  

<img src="/static/img/envios/envios2.png" width="50%" />

Ahora tendremos campos para editar:  
- Nombre de la zona de envío.
- Regiones de la Zona donde se puede elegir ciudades o CP esto está limitado al pais o paises que se eligieron a la configuración general de woocommerce.
- Metodos de envio.

<img src="/static/img/envios/envios3.png" width="80%" />


2. Ahora se mostrará las opciones donde podremos personalizar el nombre y modificar la configuración, para lo cual damos click en la opción previamente creada por conektica “Gastos de Envío”

3. veremos diferentes campos donde podremos agregar descripción o modificar título en este caso nos enfocaremos en los campos del final de la página.


### Clases de envío  
Estas clases se usan para agrupar productos similares o que necesitan el mismo aumento en la tarifa de envío por elegirlo. Por ejemplo cuando un producto es demasiado grande y necesita un embalaje distinto y por las dimensiones podría aumentar su costo de envío pero solo para ese producto.
 

### Métodos de envío  
Hacemos click en añadir método de envío y por defecto se podrá elegir entre: envío gratuito, precio fijo y recogida en local:

**Precio fijo:** Establecemos el importe del envío que deberá pagar el cliente por defecto en el pedido. Se puede combinar ese precio añadiendo variables como [qty] [cost] o [fee percent]. Por ejemplo podemos poner 4,5*[qty], es decir 4,5€ por cada artículo. Se puede configurar que vaya con IVA o sin.  
**Recogida en local:** Si quiere el cliente que se lo dejemos preparado o guardemos para cuando lo recoja, también se puede poner un precio.    
**Envío gratuito:** Establecemos a partir de qué precio el envío le saldrá gratis al cliente. Se puede hacer por cupones, importe mínimo… Te recuerdo que en este tutorial te enseño cómo mostrar un aviso de cuánto queda para el envío gratuito al cliente

Debemos configurar nuestro método de envío, guardar los cambios y ¡Listo!  
Puede que te interese nuestro articulo sobre [Ajustes generales ecommerce](/docs/ecommerce-ajustes-generales)