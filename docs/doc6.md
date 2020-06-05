---
id: doc6
title: Configuración de la cuenta de correo electrónico privada en Outlook para iOS
sidebar_label: Outlook para iOS
---
Esta guía proporciona instrucciones sobre cómo configurar tu [buzón de correo electrónico privado Namecheap](https://www.namecheap.com/hosting/email/) en Outlook en un dispositivo iOS.

En caso de que tengas una suscripción Business o Business Office, puedes agregar tu buzón de correo electrónico privado como cuenta de Exchange (ActiveSync) [utilizando esta guía](https://www.namecheap.com/support/knowledgebase/article.aspx/9988/2171/how-to-configure-activesync-exchange-account-in-outlook-for-iphone).

NOTA: Antes de configurar tu cuenta de correo electrónico, comprueba que el nombre de tu dominio tenga los registros [DNS de correo electrónico privado](https://www.namecheap.com/support/knowledgebase/article.aspx/1337/2179/how-to-start-using-namecheap-private-email) correctos y que se haya [creado el buzón](https://www.namecheap.com/support/knowledgebase/article.aspx/1049/2215/how-to-create-namecheap-private-email-mailbox). 


1. Abre Outlook en tu dispositivo. 

![Primera Imagen](https://github.com/adanuriplata/cnk-external-doku/blob/master/static/img/OutlookiOS/1.1P.PNG?raw=true)

**NOTA:** Si ya tiene añadida su cuenta de correo electrónico a Outlook, haga clic en el icono **Añadir cuenta**. También puede ir a la opción **Configuración >> Añadir cuenta**: 

![Segunda Imagen](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/OutlookiOS/1P.png)

2. Escriba la dirección de correo electrónico completa de la cuenta de correo electrónico que desea agregar (estamos usando 1p.web@conektica.com como ejemplo) y presione Agregar cuenta: 

![Tercera Imagen](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/OutlookiOS/2P.PNG)

3. A continuación, se le redirigirá a la página **Seleccione su proveedor de correo electrónico** donde debe seleccionar **IMAP**: 

![Cuarta Imagen](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/OutlookiOS/5P.PNG)

**IMPORTANTE:** Outlook para iOS no soporta cuentas POP3. 

4. En la siguiente página, por favor, rellene los detalles requeridos: 
- Contraseña: la contraseña de la cuenta de correo electrónico.
- Nombre para mostrar: los destinatarios lo verán como el nombre del remitente.
- Descripción: la descripción de su cuenta de correo electrónico (sólo usted la verá).

Ahora seleccione **Usar la configuración avanzada:**

![Quinta Imagen](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/OutlookiOS/6P.PNG) 

Ahora se tendrá que entrar en la configuración del IMAP: 

**Servidor de correo entrante IMAP:**
- **Nombre de host IMAP:** conektica.com:993 para SSL/TLS (o mail.conektica.com:143 para SSL).
- **Nombre de usuario IMAP:** su cuenta de correo electrónico completa (por ejemplo, 1p.web@conektica.com).
- **Contraseña IMAP:** la contraseña del buzón.

![Sexta Imagen](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/OutlookiOS/7P.PNG)

**Servidor de correo saliente SMTP:**
- **Nombre de host SMTP:** conektica.com:465 para SSL/TLS (o mail.conektica.com:26 para SSL).
- **Nombre de usuario SMTP:** su cuenta de correo electrónico completa (por ejemplo, 1p.web@conektica.com).
- **Contraseña SMTP:** la contraseña del buzón de correo.

Compruebe todos los ajustes y, a continuación, haga clic en **Iniciar sesión:**

![Séptima Imagen](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/OutlookiOS/8P.PNG)

5. ¡Felicidades, el proceso ha terminado! Ya puedes empezar a administrar tu cuenta de correo electrónico privada en Outlook:

![Octava Imagen](https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/OutlookiOS/9P.PNG)

Eso es todo !











