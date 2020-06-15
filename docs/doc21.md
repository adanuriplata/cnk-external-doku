---
id: doc21
title: Configuración de la cuenta de correo electrónico privada en Sierra/Mojave (SMTP/IMAP)
sidebar_label: Sierra/Mojave (SMTP/IMAP)
---
Este tutorial le ayudará a agregar o reconfigurar una cuenta de correo electrónico privada en Sierra/Mojave (SMTP/IMAP)

**NOTA**: En este artículo, usamos la dirección 1p.web@conektica.com como ejemplo. 

Siga estos pasos para agregar una nueva cuenta de correo electrónico: 

1. En caso de que ya tenga alguna cuenta configurada en su **Correo** - seleccione **Preferencias** en el menú Mail (puede utilizar el atajo **CMD+** , mientras Mail se abre en la pantalla): 

![Imagen 1]()

2. Vaya a la pestaña de **Cuentas** y haga clic en el icono **+**: 

![Imagen 2]()

Si es la primera vez que usa **Mail**, vera la ventana emergente donde puedes añadir la cuenta de correo electrónico. Seleccione la opción **Otra cuenta de correo**... y pulse el botón **Continuar**:

![Imagen 3]()

3. En la ventana de **Agregar una cuenta de correo**, introduzca su nombre completo, dirección de correo electrónico y contraseña de la cuenta de correo electrónico, y luego haga clic en **Iniciar sesión**: 

![Imagen 4]()

4. La aplicación intentará detectar los ajustes automáticamente. Ignore el resultado y rellene estas casillas manualmente. Introduzca los datos de su cuenta: 

- **Dirección de correo electrónico**: dirección de correo electrónico completa
- **Nombre de usuario**: dirección de correo electrónico completa
- **Contraseña**: contraseña de su cuenta de correo electrónico
- **Tipo de cuenta**: POP
- **Servidor de correo entrante**: conektica.com
- **Servidor de correo saliente**: conektica.com

Haga clic en **Iniciar sesión** una vez que los detalles estén completos: 

![Imagen 5]()

5. Puede usar tanto el **correo** como las **notas** aquí. Haga clic en el botón **Hecho** para finalizar la adición de la cuenta a la aplicación Mail: 

![Imagen 6]()

6. Una vez que haga clic en el botón **Hecho**, verá la ventana en blanco sin buzones. Para abrir el árbol de buzones de correo tiene que hacer clic en el botón **Buzones** de correo aquí: 

![Imagen 7]()

Ahora encontrará su **bandeja de entrada** y las carpetas de **envío** en la barra lateral izquierda: 

![Imagen 8]()

7. El siguiente paso es verificar que la configuración del **servidor de correo entrante y saliente** sea correcta. En la pestaña **Cuentas** de la ventana **Preferencias**, haga clic en la sección **Configuración del servidor**: 

![Imagen 9]()

7.1 En la pestaña Configuración del servidor asegúrese de que la opción **Administrar automáticamente la configuración de la conexión** está desmarcada en la sección **Servidor de correo entrante (POP)** para que pueda ver el siguiente menú con los campos **Puerto** y **Autenticación**:

![Imagen 10]()

- **Puerto**: 993 para SSL
- **Usar TLS/SSL**: debería estar habilitado
- **Autenticación**: establecer una contraseña

A continuación, abra **Configuración avanzada de IMAP**: 

![Imagen 11]()

Marque **Permitir autenticación insegura** y haga clic en **Aceptar**:

![Imagen 12]()

7.2 En la pestaña Configuración del servidor asegúrese de que la opción **Administrar automáticamente la configuración de la conexión** está desmarcada en la sección **Servidor de correo saliente (SMTP)** para que pueda ver el siguiente menú con los campos **Puerto** y **Autenticación**:

![Imagen 13]()

- **Puerto**: 465 para SSL 
- **Usar TLS/SSL** : debería estar habilitado
- **Autenticación**: establecer una contraseña

8. Una vez que todo esté hecho, haga clic en **Guardar** y puede empezar a usar la aplicación Mail en su MacOS: 

![Imagen 14]()

¡Buenas noticias! Ya está todo listo. 






