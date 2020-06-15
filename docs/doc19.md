---
id: doc19
title: Configuración de la cuenta de correo electrónico privada en Outlook para OS X
sidebar_label: Outlook para OS X
---

Como alternativa al software de correo electrónico estándar de Mac OS X, Mail, puede utilizar un Microsoft Outlook para Mac, un cliente de correo electrónico, diseñado por Microsoft especialmente para ordenadores Apple. 
Con la ayuda de este tutorial, podrá configurar Microsoft Outlook para Mac para comprobar los mensajes de su cuenta de correo electrónico privada.

1. Para crear una nueva cuenta, haz clic en la pestaña **Herramientas** > **Cuentas**:

![Imagen 1]()

2. En la ventana emergente, haga clic en **+** en la esquina inferior derecha y seleccione **Nueva cuenta**:

![Imagen 2]()

3. En la siguiente ventana, introduzca una dirección de correo electrónico privada suya. 
Una vez que empieces a introducir tu contraseña, aparecerá una lista de configuración: 

![Imagen 3]()

Los ajustes deben ser los siguientes: 

**Nombre de usuario**: su dirección de correo electrónico 
**Escriba**: IMAP o POP 
**Servidor de entrada**: mail.privateemail.com 
**Usar SSL para conectarse**: este punto es opcional aunque recomendado 

Después de eso, asegúrese de que está utilizando el **puerto** correcto para el servidor entrante de acuerdo con el tipo de conexión y la presencia de SSL especificado anteriormente. Si es necesario, haga clic en **Anular el puerto predeterminado** y especifique el necesario manualmente. 

**IMAP con SSL**: puerto número **993**
**IMAP sin SSL**: número de puerto **143**
**POP con SSL**: puerto número **995**

**Servidor de salida**: mail.privateemail.com 
Una vez más, el uso de SSL no es obligatorio, pero se recomienda. 

Si desea utilizar **SSL para el correo saliente**, establezca el puerto en **465**. 
**Sin SSL**, el número de puerto para las conexiones salientes debería ser **587**. 

6. Al hacer clic en Agregar cuenta, será necesario habilitar la autenticación SMTP. 
Para ello, haz clic en **Más opciones** y especifica **Usar información del servidor entrante** en el menú desplegable de **Autenticación** y haga clic en Aceptar: 

![Imagen 4]()

7. Asegúrese de que la opción Usar siempre una contraseña segura esté desmarcada. 

Eso es todo!