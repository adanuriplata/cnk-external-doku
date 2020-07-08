---
id: mail-outlook-OS
title: Configuración de la cuenta de correo electrónico privada en Outlook para OS X
sidebar_label: Outlook para OS X
---
Este tutorial le ayudará a agregar o reconfigurar una cuenta de correo electrónico privada en Outlook para OS X.

**NOTA**: En este artículo, usamos la dirección 1p.web@conektica.com como ejemplo. 

Siga estos pasos para agregar una nueva cuenta de correo electrónico:

1. Para crear una nueva cuenta, haga clic en la pestaña **Herramientas** > **Cuentas**:

![Imagen 1](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/Outlook%20OS-X/H1.png)

2. En la ventana emergente, haga clic en **+** en la esquina inferior derecha y seleccione **Nueva cuenta**:

![Imagen 2](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/Outlook%20OS-X/H2.png)

3. En la siguiente ventana, introduzca la dirección de correo electrónico. 
Una vez que comience a introducir tu contraseña, aparecerá una lista de configuración: 

![Imagen 3](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/Outlook%20OS-X/H3.png)

Los ajustes deben ser los siguientes: 

**Nombre de usuario**: su dirección de correo electrónico 

**Escriba**: IMAP o POP 

**Servidor de entrada**: conektica.com

**Usar SSL para conectar**: este punto es opcional aunque recomendado 

Después de eso, asegúrese de que está utilizando el **puerto** correcto para el servidor entrante de acuerdo con el tipo de conexión y la presencia de SSL especificado anteriormente. Si es necesario, haga clic en **Anular puerto predeterminado** y especifique el necesario manualmente. 

**IMAP con SSL**: puerto número **993**

**IMAP sin SSL**: número de puerto **143**

**POP con SSL**: puerto número **995**

**Servidor de salida**: conektica.com 

Una vez más, el uso de SSL no es obligatorio, pero se recomienda. 

Si desea utilizar **SSL para el correo saliente**, establezca el puerto en **465**. 
**Sin SSL**, el número de puerto para las conexiones salientes debería ser **587**. 

6. Al hacer clic en Agregar cuenta, será necesario habilitar la autenticación SMTP. 
Para ello, haga clic en **Más opciones** y especifique **Usar información del servidor entrante** en el menú desplegable de **Autenticación** y haga clic en Aceptar: 

![Imagen 4](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/Outlook%20OS-X/H4.png)

7. Si aparece asegúrese de que la opción **Usar siempre una contraseña segura** esté desmarcada. 

¡Buenas noticias! Ya está todo listo. 