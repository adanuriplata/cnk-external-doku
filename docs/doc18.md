---
id: doc18
title: Configuración de la cuenta de correo electrónico privada en Outlook 2019
sidebar_label: Outlook 2019
---
Este tutorial le ayudará a agregar o reconfigurar una cuenta de correo electrónico privada en Microsoft Outlook 2019.

**NOTA**: En este artículo, usamos la dirección 1p.web@conektica.com como ejemplo. 

Siga estos pasos para agregar una nueva cuenta de correo electrónico:

1. Abra Microsoft Outlook 2019 en su dispositivo. 
2. Si aún no ha añadido ningún correo, se mostrará la página de información de la cuenta. Haga clic en el botón **+ Añadir cuenta**. 
Si ya tiene correo configurados, vaya a la pestaña **Archivo** >> **Información** >> **Información de la cuenta** y haga clic en el botón **+ Añadir cuenta**:

![Imagen 1]()
![Imagen 2]()

3. Escriba su dirección de correo electrónico y haga clic en **Conectar**:

![Imagen 3]()

Haga caso omiso de las advertencias que puedan aparecer y proceda al siguiente paso.

4. Escriba la contraseña que utiliza para esta dirección de correo electrónico y haga clic en **Conectar**:

![Imagen 4]()

Si no puede proceder, es posible que tenga que repetir el proceso utilizando la configuración manual. Las instrucciones detalladas se encuentran a continuación.

5. Seleccione la opción Cambiar la configuración de la cuenta y haga clic en **Siguiente**. En la página siguiente, seleccione la opción **POP o IMAP**:

**POP3** significa Post Office Protocol, y fue diseñado como una forma sencilla de acceder a un servidor de correo electrónico remoto. El POP funciona descargando los correos electrónicos del servidor de correo de su proveedor y luego marcándolos para ser borrados allí. Esto significa que sólo puedes leer esos mensajes de correo electrónico en ese cliente de correo, en ese ordenador. No podrá acceder a ningún correo electrónico descargado previamente desde cualquier otro dispositivo, o con cualquier otro cliente de correo electrónico, o a través de un webmail.

**IMAP** significa Protocolo de Acceso a Mensajes de Internet, y fue diseñado específicamente para eliminar las limitaciones del POP. IMAP le permite acceder a sus correos electrónicos desde cualquier cliente, y cualquier dispositivo, e iniciar sesión en el correo web en cualquier momento, hasta que los elimine. También puede utilizar diferentes dispositivos y clientes de correo electrónico/correo web para acceder al mismo buzón y comprobar, enviar y recibir correo electrónico, lo cual no está disponible con la conexión POP3.

6. Si elige la configuración de la cuenta **IMAP**, introduzca los siguientes datos del servidor:
- **Servidor de correo entrante**: conektica.com (el mismo para todas las cuentas)
- **Puerto de correo entrante**: 993 
- **Método de encriptación**: SSL/TLS 
- **Requiere el inicio de sesión mediante la autenticación de contraseña segura (SPA)**: debe estar desmarcado

- **Servidor de correo saliente**: conektica.com (el mismo para todas las cuentas)
- **Puerto de correo saliente**: 465 
- **Método de encriptación**: SSL/TLS 
- **Requiere el inicio de sesión mediante la autenticación de contraseña segura (SPA)**: debe estar desmarcado


![Imagen 5]()

7. Si elige la configuración de la cuenta **POP**, introduzca los siguientes datos del servidor:
- **Servidor de correo entrante**: conektica.com (el mismo para todas las cuentas)
- **Puerto de correo entrante**: 995 
- **Este servidor requiere una conexión encriptada (SSL/TLS)**: debe ser comprobada
- **Requiere el inicio de sesión mediante la autenticación de contraseña segura (SPA)**: debe estar desmarcado

- **Servidor de correo saliente**: conektica.com (el mismo para todas las cuentas)
- **Puerto de correo saliente**: 465 
- **Método de encriptación**: SSL/TLS
- **Requiere el inicio de sesión mediante la autenticación de contraseña segura (SPA)**: debe estar desmarcado

![Imagen 6]()

8. Una vez que todos los detalles estén completos, haga clic en **Siguiente**.

9. Después de eso, escriba su contraseña para esta cuenta de correo electrónico privada y haz clic en **Conectar**:

![Imagen 7]()


10. Si todos los ajustes son correctos, recibirá el siguiente mensaje. 

![Imagen 8]()

Haga clic en **Hecho** para completar la configuración.

Para comprobar o actualizar la configuración de una cuenta de correo electrónico existente, siga estos pasos:

1. Abra Microsoft Outlook 2019 en su dispositivo. 

2. Vaya a la pestaña **Archivo** >> **Información** >> **Información de la cuenta** y haga clic en **Configuración de la cuenta**:

![Imagen 9]()

3. Selecciona el correo en cuestión y haz clic en **Reparar**:

![Imagen 10]()

4. En la siguiente ventana, haz clic en **Opciones avanzadas**, marca **Déjame reparar mi cuenta manualmente** y haz clic en **Reparar**:

![Imagen 11]()

5. En la siguiente página, verá la configuración del servidor de entrada y salida.
Asegúrate de que todos ellos estén configurados correctamente. Si alguna información está configurada incorrectamente, actualícela para las configuraciones de **correo entrante y saliente**:

![Imagen 12]()

6. Una vez actualizados todos los detalles de la conexión saliente, haga clic en **Reparar**:

![Imagen 13]()

Eso es todo!


