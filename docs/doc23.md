---
id: doc23
title: Configuración de la cuenta de correo electrónico privada en Thunderbird
sidebar_label: Thunderbird
---
Los clientes de correo electrónico, como Thunderbird, te permiten revisar fácilmente tus correos electrónicos que no van a la interfaz web. Este tutorial te ayudará a configurar tu cuenta de correo electrónico privada en Thunderbird.

El servicio de Correo Electrónico Privado soporta la función de autoconfiguración, que permite configurar la cuenta de correo electrónico automáticamente en Thunderbird. 

**NOTA**: antes de configurar la cuenta de correo electrónico de esta manera, asegúrate de que ya tienes los registros DNS requeridos y el buzón creado.

Usaremos una cuenta de correo de prueba conektica.com en este tutorial. Para configurar la cuenta de correo electrónico automáticamente, debes hacer lo siguiente: 

1. Vaya a **Archivo** > **Nuevo** > **Cuenta de correo** existente: 

![Imagen 1]()

2. En la ventana **Configuración de la cuenta de correo**, introduzca los siguientes detalles: 

**Su nombre**: el nombre que desea que vean los destinatarios de sus correos electrónicos 

**Dirección de correo electrónico**: su dirección de correo electrónico privada completa 

**Contraseña**: contraseña de tu cuenta de correo electrónico privada

Asegúrate de no tener espacios en blanco. 

**NOTA**: si por casualidad no recuerdas tu contraseña, puedes restablecerla fácilmente usando el siguiente tutorial. 

3. Una vez que hayas completado todos los campos, haz clic en **Continuar**: 

![Imagen 2]()

4. Verá la **configuración en el mensaje del proveedor de correo electrónico**. 
Asegúrate de que tu configuración de entrada y salida se haya detectado correctamente y coincida con la que puedes ver en la siguiente captura de pantalla: 

![Imagen 3]()

Haga clic en **Hecho** si es lo mismo. 


Si no ves el mensaje **Configuración encontrada en el proveedor de correo electrónico** o si la configuración no se detectó correctamente por algún motivo, puedes completar los dos primeros pasos y continuar configurando Thunderbird **manualmente** de esta manera: 

1. Una vez completados los dos primeros pasos, verá la ventana de configuración manual (en caso de que Thunderbird no detecte la configuración automáticamente) o tendrá que hacer clic en **Configuración manual** para ver esa ventana: 

![Imagen 4]()

2. En la siguiente pantalla, seleccione **POP3** o **IMAP** de la lista de tipos de cuenta, e introduzca sus datos de la siguiente manera: 

Para el protocolo **IMAP** utilice los siguientes ajustes: 

**Servidor de entrada y salida**: conektica.com

**Protocolo**: IMAP **Puerto**: 993 **SSL**: SSL/TLS **Autenticación**: Contraseña normal
**Protocolo**: SMTP **Puerto**: 465 **SSL**: SSL/TLS **Autenticación**: Contraseña normal 

![Imagen 5]()

Para el protocolo **POP3** utilice los siguientes ajustes: 

**Servidor de entrada y salida**: conektica.com 

**Protocolo**: POP3 **Puerto**: 995 **SSL**: SSL/TLS **Autenticación**: Contraseña normal
**Protocolo**: SMTP **Puerto**: 465 **SSL**: SSL/TLS **Autenticación**: Contraseña normal 

![Imagen 6]()

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

![Imagen 7]()

2. Para administrar el servidor entrante, ve a **Configuración del servidor**:

![Imagen 8]()

3. Si necesita cambiar la configuración del servidor de salida, seleccione Servidor de salida (SMTP):

![Imagen 9]()

Aquí puedes encontrar la configuración actual de las cuentas que tienes y hacer clic en Editar... para hacer cambios en la siguiente ventana: 

![Imagen 10]()

Eso es todo!



