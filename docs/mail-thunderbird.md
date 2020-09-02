---
id: mail-thunderbird
title: Configuración de la cuenta de correo electrónico privada en Thunderbird
sidebar_label: Thunderbird
---
Este tutorial le ayudará a agregar o reconfigurar una cuenta de correo electrónico privada en Thunderbird

**NOTA**: En este artículo, usamos la dirección 1p.web@conektica.com como ejemplo. 

Siga estos pasos para agregar una nueva cuenta de correo electrónico: 

1. Vaya a **Archivo** > **Nuevo** > **Cuenta de correo** existente: 

<div class="w-70">

![Imagen 1](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/ThunderBird/W1.png)

</div>

2. En la ventana **Configurar una dirección de correo existente**, introduzca los siguientes detalles: 

**Su nombre**: el nombre que desea que vean los destinatarios de sus correos electrónicos 

**Dirección de correo electrónico**: su dirección de correo electrónico privada completa 

**Contraseña**: contraseña de su cuenta de correo electrónico privada

Asegúrate de no tener espacios en blanco. 

3. Una vez que hayas completado todos los campos, haz clic en **Continuar**: 

<div class="w-70">

![Imagen 2](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/ThunderBird/W2.png)

</div>

4. Verá la **configuración encontrada en el proveedor de correo electrónico**. 
Compruebe de que su configuración de entrada y salida se haya detectado correctamente y coincida con la que puede ver en la siguiente captura de pantalla: 

<div class="w-70">

![Imagen 3](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/ThunderBird/W3.png)

</div>

Haga clic en **Hecho** si es lo mismo. 


Si no ve el mensaje **Configuración encontrada en el proveedor de correo electrónico** o si la configuración no se detectó correctamente por algún motivo, puede completar los dos primeros pasos y continuar configurando Thunderbird **manualmente** de esta manera: 

1. Una vez completados los dos primeros pasos, verá la ventana de configuración manual (en caso de que Thunderbird no detecte la configuración automáticamente) o tendrá que hacer clic en **Configuración manual** para ver esa ventana: 

<div class="w-70">

![Imagen 4](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/ThunderBird/W3.1.png)

</div>

2. En la siguiente pantalla, seleccione **POP3** o **IMAP** de la lista de tipos de cuenta, e introduzca sus datos de la siguiente manera: 

Para el protocolo **IMAP** utilice los siguientes ajustes: 

**Servidor de entrada y salida**: conektica.com

**Protocolo**: IMAP **Puerto**: 993 **SSL**: SSL/TLS **Autenticación**: Contraseña normal

**Protocolo**: SMTP **Puerto**: 465 **SSL**: SSL/TLS **Autenticación**: Contraseña normal 

<div class="w-70">

![Imagen 5](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/ThunderBird/W4.png)

</div>

Para el protocolo **POP3** utilice los siguientes ajustes: 

**Servidor de entrada y salida**: conektica.com 

**Protocolo**: POP3 **Puerto**: 995 **SSL**: SSL/TLS **Autenticación**: Contraseña normal

**Protocolo**: SMTP **Puerto**: 465 **SSL**: SSL/TLS **Autenticación**: Contraseña normal 

<div class="w-80">

![Imagen 6](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/ThunderBird/W5.png)

</div>

Como alternativa, puede utilizar los siguientes ajustes para el protocolo IMAP: 

**Protocolo**: IMAP **Puerto**: 143 **SSL**: Ninguno **Autenticación**: Contraseña normal 

**Protocolo**: SMTP **Puerto**: 587 **SSL**: Ninguno **Autenticación**: Contraseña normal 

Para el protocolo POP3: 

**Protocolo**: POP3 **Puerto**: 995 **SSL**: SSL/TLS **Autenticación**: Contraseña normal 

**Protocolo**: SMTP **Puerto**: 587 **SSL**: Ninguno **Autenticación**: Contraseña normal

**NOTA**: si aparece la ventana Agregar excepción de seguridad, haga clic en el botón Confirmar excepción de seguridad. 


**Configuración avanzada** 
 
Una vez que su cuenta haya sido creada, podrá elegir configuraciones adicionales para el servidor de entrada/salida **IMAP** o **POP3**. 

1. Haga clic con el botón derecho del ratón en su cuenta en la lista de cuentas: 

<div class="w-60">

![Imagen 7](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/ThunderBird/W6.png)

</div>

2. Para administrar el servidor entrante, vaya a **Configuración del servidor**:

<div class="w-80">

![Imagen 8](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/ThunderBird/W7.png)

</div>

3. Si necesita cambiar la configuración del servidor de salida, seleccione Servidor de salida (SMTP):

<div class="w-80">

![Imagen 9](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/ThunderBird/W8.png)

</div>

Aquí puede encontrar la configuración actual de las cuentas que tiene y hacer clic en Editar... para hacer cambios en la siguiente ventana: 

<div class="w-50">

![Imagen 10](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/ThunderBird/W9.png)

</div>

¡Buenas noticias! Ya está todo listo. 



