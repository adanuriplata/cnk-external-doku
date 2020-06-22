(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{102:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(6),o=(a(0),a(155)),c={id:"doc26",title:"Subir productos a WooCommerce por medio de Wordpress",sidebar_label:"Subir Productos a WooCommerce"},l={id:"doc26",title:"Subir productos a WooCommerce por medio de Wordpress",description:"Este tutorial le ayudar\xe1 a agregar productos a WooCommerce por medio de Wordpress, se va a utilizar un archivo CSV que va ser editable en Excel o en Google Docs en esta ocasi\xf3n se utilizar\xe1 Excel.",source:"@site/docs/doc26.md",permalink:"/cnk-external-doku/docs/doc26",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc26.md",sidebar_label:"Subir Productos a WooCommerce",sidebar:"someSidebar",previous:{title:"Configuraci\xf3n de la cuenta de correo electr\xf3nico privada para Google Mail Fetcher",permalink:"/cnk-external-doku/docs/doc25"},next:{title:"Acceso al panel de administraci\xf3n Wordpress",permalink:"/cnk-external-doku/docs/doc27"}},i=[],b={rightToc:i};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Este tutorial le ayudar\xe1 a agregar productos a WooCommerce por medio de Wordpress, se va a utilizar un ",Object(o.b)("strong",{parentName:"p"},"archivo CSV")," que va ser editable en ",Object(o.b)("strong",{parentName:"p"},"Excel")," o en ",Object(o.b)("strong",{parentName:"p"},"Google Docs")," en esta ocasi\xf3n se utilizar\xe1 Excel."),Object(o.b)("p",null,"Siga estos pasos:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Crear un archivo CSV en Excel.")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/adanuriplata/cnk-external-doku/blob/master/static/img/WooCommerce/WP1.png?raw=true",alt:"Imagen 1"}))),Object(o.b)("p",null,"En este ejemplo en la parte superior se van a tener diferentes celdas con los t\xedtulos: "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Categories: "),"Son las categor\xedas a las cuales pertenece el producto, por ejemlo:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Subcategor\xeda dentro de una categor\xeda ")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/Conektica/cnk-external-doku/blob/master/static/img/WooCommerce2/Y1.png?raw=true",alt:"Images"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Combinaci\xf3n de categor\xedas separadas por una coma sin subcategor\xedas")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/Conektica/cnk-external-doku/blob/master/static/img/WooCommerce2/Y2.png?raw=true",alt:"Images"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Combinaci\xf3n de categor\xedas y subcategor\xedas dentro del mismo producto")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/Conektica/cnk-external-doku/blob/master/static/img/WooCommerce2/Y3.png?raw=true",alt:"Images"}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Brand:")," La marca del producto"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"SKU:")," N\xfamero identificador del producto, dichos n\xfameros no deben repetirse"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Name:")," Nombre final del producto visible al p\xfablico"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description:")," Descripci\xf3n larga del producto"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Short Description:")," Descripci\xf3n corta que se va a mostrar a un lado de los productos"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Images:")," Se recomienda nombrar a la imagen de igual forma que su correspondiente SKU"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/Conektica/cnk-external-doku/blob/master/static/img/WooCommerce2/Y4.png?raw=true",alt:"Images"}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Attribute 1 name:")," Nombre del atributo del producto"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Attribute 1 value(s):")," Valor de atributo del producto solo o separado por una coma"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/Conektica/cnk-external-doku/master/static/img/WooCommerce2/Y5.png",alt:"Images"}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Price:")," El precio del producto, por defecto WooCommerce agrega el signo ",Object(o.b)("strong",{parentName:"p"},"$")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Im\xe1genes con URL:")," "),Object(o.b)("p",null,"A continuaci\xf3n se hace una explicaci\xf3n de como optimizar las im\xe1genes que utilizar\xe1:"),Object(o.b)("p",null,"Buscar TinyPNG y abrir la liga que se se\xf1ala en la siguiente imagen\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO1.png",alt:"TinyPNG"}))),Object(o.b)("p",null,"Seleccionar las im\xe1genes que desea comprimir\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO2.png",alt:"TinyPNG"}))),Object(o.b)("p",null,"Arrastrar las im\xe1genes hacia el recuadro ",Object(o.b)("strong",{parentName:"p"},"Drop your .png or .jpg file"),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO3.png",alt:"TinyPNG"}))),Object(o.b)("p",null,"Una vez que se haya completado el proceso dar clic en ",Object(o.b)("strong",{parentName:"p"},"Download all"),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO4.png",alt:"TinyPNG"}))),Object(o.b)("p",null,"Un archivo .zip se descargar\xe1 autom\xe1ticamente, una vez ah\xed debe dar clic derecho y seleccionar ",Object(o.b)("strong",{parentName:"p"},"Extraer aqu\xed"),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO5.png",alt:"TinyPNG"}))),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO6.png",alt:"TinyPNG"}))),Object(o.b)("p",null,"Debe seleccionar las im\xe1genes que desea utilizar en su archivo CSV\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO7.png",alt:"TinyPNG"}))),Object(o.b)("p",null,"Arrastre las im\xe1genes hacia el panel ",Object(o.b)("strong",{parentName:"p"},"Media de WordPress")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO8.png",alt:"TinyPNG"}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Una vez que tenga sus im\xe1genes cargadas debe continuar a colocar el URL en el documento CSV")),Object(o.b)("p",null,"Para obtener el URL de la imagen puede dar clic en ",Object(o.b)("strong",{parentName:"p"},"Medios")," y seleccionar la imagen de la cual quiera saber el URL y del lado inferior derecho aparecer\xe1 el URL "),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/Extra1.png",alt:"Imagen extra1"}))),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/Extra2.png",alt:"Imagen extra2"}))),Object(o.b)("p",null,"Copie el URL con todos los directorios hasta la \xfaltima diagonal omitiendo el SKU de la imagen"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO9.png",alt:"Imagen extra 3"}))),Object(o.b)("p",null,"En ",Object(o.b)("strong",{parentName:"p"},"Im\xe1genes con URL")," va a utilizar la funci\xf3n =CONCATENAR(URL, SKU) o si tiene configuraci\xf3n en ingl\xe9s =CONCATENATE(URL, SKU), solo para la primera imagen."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO10.png",alt:"Imagen extra 4"}))),Object(o.b)("p",null,"Una vez que se aplico la funci\xf3n a la primera celda va a seleccionarla y desplazar hacia abajo dependiendo de el n\xfamero de im\xe1genes que quiera con su URL "),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO11.png",alt:"Imagen extra 5"}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTA:")," En caso de que quiera dos im\xe1genes para un mismo producto realice el mismo procedimiento con los URL separados por una ",Object(o.b)("strong",{parentName:"p"},",")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce1/CO12.png",alt:"Imagen extra 6"}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Listo sus im\xe1genes est\xe1n listas para utilizarlas ! Puede continuar con el tutorial ")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Una vez que tiene listo su archivo CSV se va a dirigir a ",Object(o.b)("strong",{parentName:"li"},"Archivo >> Guardar como")," ")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP2.png",alt:"Imagen 2"}))),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"En la ventana ",Object(o.b)("strong",{parentName:"li"},"Guardar como")," va a designar en donde quiere guardar su archivo, el ",Object(o.b)("strong",{parentName:"li"},"nombre del archivo es a su elecci\xf3n")," sin embargo hay que verificar que el ",Object(o.b)("strong",{parentName:"li"},"formato en el que se esta guardando es CSV"),".")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP3.png",alt:"Imagen 3"}))),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Para asegurarse de la compatibilidad de clic en la opci\xf3n ",Object(o.b)("strong",{parentName:"li"},"Herramientas >> Opciones web..."))),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP4.png",alt:"Imagen 4"}))),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"En la ventana de Opciones Web de clic en el apartado Codificaciones y se debe asegurarse de que en ",Object(o.b)("strong",{parentName:"li"},"Guardar este documento como:"),"  se encuentre Unicode (UTF-8) finalmente de clic en ",Object(o.b)("strong",{parentName:"li"},"Aceptar"))),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP5.png",alt:"Imagen 5"}))),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Una vez que se aseguro de la compatibilidad, se regresar\xe1 a la ventana Guardar como y de clic en ",Object(o.b)("strong",{parentName:"li"},"Guardar"))),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP6.png",alt:"Imagen 6"}))),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"Una vez que se tiene el archivo CSV con el formato correcto va a iniciar sesi\xf3n en su panel de WordPress")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP8.png",alt:"Imagen 7"}))),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},"Dentro del panel debe acceder a la opci\xf3n de ",Object(o.b)("strong",{parentName:"li"},"Herramientas >> Importar"))),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP9.png",alt:"Imagen 8"}))),Object(o.b)("ol",{start:9},Object(o.b)("li",{parentName:"ol"},"En la p\xe1gina ",Object(o.b)("strong",{parentName:"li"},"Importar")," busque la opci\xf3n ",Object(o.b)("strong",{parentName:"li"},"Productos de WooCommerce (CSV)")," y de clic en ",Object(o.b)("strong",{parentName:"li"},"Ejecutar importador"))),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP10.png",alt:"Imagen 9"}))),Object(o.b)("ol",{start:10},Object(o.b)("li",{parentName:"ol"},"Una vez que se ejecuto el importador de clic en ",Object(o.b)("strong",{parentName:"li"},"Seleccionar archivo")," donde deber\xe1 seleccionar el archivo CSV creado anteriormente ")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP11.png",alt:"Imagen 10"}))),Object(o.b)("ol",{start:11},Object(o.b)("li",{parentName:"ol"},"Cuando lo haya seleccionado de clic en ",Object(o.b)("strong",{parentName:"li"},"Continuar"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTA:"),' La opci\xf3n "Los productos existentes con el mismo ID o SKU ser\xe1n actualizados. Los productos que no existan ser\xe1n omitidos", es opcional. '),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP12.png",alt:"Imagen 11"}))),Object(o.b)("ol",{start:12},Object(o.b)("li",{parentName:"ol"},"En el panel ",Object(o.b)("strong",{parentName:"li"},"Mapeo de columnas")," deber\xe1 relacionar las columnas con los nombres de las columnas (en nuestro ejemplo se mostrar\xeda de la siguiente forma):")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP13.png",alt:"Imagen 12"}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTA:")," En caso de que el Precio no lo tome directamete de clic en las opciones desplegables y elija alguna opci\xf3n (en nuestro caso utilizaremos Precio de oferta:)"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP14.png",alt:"Imagen 13"}))),Object(o.b)("ol",{start:13},Object(o.b)("li",{parentName:"ol"},"Finalmente de clic en ",Object(o.b)("strong",{parentName:"li"},"Ejecutar Importador")," continue por el siguiente filtro ",Object(o.b)("strong",{parentName:"li"},"Importar")," y estar\xe1n listos sus productos")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP15.png",alt:"Imagen 15"}))),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/adanuriplata/cnk-external-doku/blob/master/static/img/WooCommerce1/Importaci%C3%B3n.png?raw=true",alt:"Imagen 15.1"}))),Object(o.b)("ol",{start:14},Object(o.b)("li",{parentName:"ol"},"Para comprobar que los productos fueron importados correctamente vaya a el apartado ",Object(o.b)("strong",{parentName:"li"},"Productos"))),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/adanuriplata/cnk-external-doku/master/static/img/WooCommerce/WP16.png",alt:"Imagen 15"}))," "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Video Tutorial General")),Object(o.b)("iframe",{src:"https://player.vimeo.com/video/430499151",width:"640",height:"343",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Video Tutorial para documento CSV")),Object(o.b)("iframe",{src:"https://player.vimeo.com/video/430535208",width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Video Tutorial para optimizar im\xe1genes a utilizar en archivo CSV")),Object(o.b)("iframe",{src:"https://player.vimeo.com/video/430533447",width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0}),Object(o.b)("p",null,"\xa1Buenas noticias! Ya est\xe1 todo listo. "))}s.isMDXComponent=!0},155:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(a),u=r,d=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return a?n.a.createElement(d,l(l({ref:t},b),{},{components:a})):n.a.createElement(d,l({ref:t},b))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<o;b++)c[b]=a[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);