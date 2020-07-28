(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{104:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return i})),o.d(a,"metadata",(function(){return s})),o.d(a,"rightToc",(function(){return c})),o.d(a,"default",(function(){return l}));var n=o(2),r=o(6),t=(o(0),o(168)),i={id:"ecommerce-pedidos-woocommerce",title:"Pedidos en WooCommerce",sidebar_label:"Pedidos en WooCommerce"},s={id:"ecommerce-pedidos-woocommerce",title:"Pedidos en WooCommerce",description:"*",source:"@site/docs/ecommerce-pedidos-woocommerce.md",permalink:"/docs/ecommerce-pedidos-woocommerce",sidebar_label:"Pedidos en WooCommerce",sidebar:"docsEcommerce",previous:{title:"Subir productos de forma masiva a WooCommerce",permalink:"/docs/ecommerce-subir-productos-csv"},next:{title:"Envios en WooCommerce",permalink:"/docs/ecommerce-envios-woocommerce"}},c=[{value:"1. Ingresar a panel de pedidos",id:"1-ingresar-a-panel-de-pedidos",children:[]},{value:"2. Administrar pedidos",id:"2-administrar-pedidos",children:[]}],d={rightToc:c};function l(e){var a=e.components,o=Object(r.a)(e,["components"]);return Object(t.b)("wrapper",Object(n.a)({},d,o,{components:a,mdxType:"MDXLayout"}),Object(t.b)("hr",null),Object(t.b)("p",null,Object(t.b)("em",{parentName:"p"},"Asumiremos que ya sabes como ingresar al panel de control de WordPress y tienes acceso a tu cuenta de administrador de tienda.(Si no sabes como iniciar sesi\xf3n consulta nuestro articuo sobre como ",Object(t.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/ecommerce-acceso-al-panel-wordpress"}),"Accesar a WordPress"),")"),"  "),Object(t.b)("p",null,"Recuerda que los pedidos se crean cuando un cliente completa el proceso de compra. Estos solamente son visibles por el administrador de la p\xe1gina y cada pedido tiene asignado un \xfanico n\xfamero identificador o ID.\n",Object(t.b)("strong",{parentName:"p"},"Debemos seguir los siguientes pasos para acceder a la informaci\xf3n de los pedidos:")),Object(t.b)("h3",{id:"1-ingresar-a-panel-de-pedidos"},"1. Ingresar a panel de pedidos"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},'Una vez que has iniciado sesi\xf3n. En el panel de administraci\xf3n izquierdo de WordPress buscamos el apartado de "WooCommerce" y pasamos el mouse encima para desplegar las opciones.'),Object(t.b)("li",{parentName:"ul"},"Seleccionamos Pedidos  ",Object(t.b)("ul",{parentName:"li"},Object(t.b)("li",{parentName:"ul"},"Si no tienes ning\xfan pedido, al dar clic puedes crear uno para familiarizarte con las herramientas."),Object(t.b)("li",{parentName:"ul"},"Si ya tienes pedidos, ver\xe1s una lista t\xedpica de WordPress con la informaci\xf3n m\xe1s importante de los pedidos a simple vista."))),Object(t.b)("li",{parentName:"ul"},"Para acceder a las herramientas de gesti\xf3n de pedidos debemos hacer clic sobre el ID del pedido, generalmente se ve as\xed: #12304.")),Object(t.b)("img",{src:"/static/img/pedidosUsuarios/pedidos1.png",width:"100%"}),Object(t.b)("h3",{id:"2-administrar-pedidos"},"2. Administrar pedidos"),Object(t.b)("p",null,"Como vemos en la siguiente im\xe1gen tenemos m\xfaltiples secciones describiremos las funciones de cada una a continuaci\xf3n. "),Object(t.b)("img",{src:"/static/img/pedidosUsuarios/pedidos2.png",width:"100%"}),Object(t.b)("h4",{id:"detalles-del-pedido"},"Detalles del pedido"),Object(t.b)("p",null,"En esta secci\xf3n podemos ver informaci\xf3n general de nuestro pedido como la direcci\xf3n de facturaci\xf3n, la direcci\xf3n de env\xedo, la fecha de creaci\xf3n del pedido y la hora. Posiblemente uno de los campos m\xe1s importantes es el \u201cEstado\u201d, ya que de eso depender\xe1 si el env\xedo procede"),Object(t.b)("h4",{id:"estados-disponibles"},"Estados disponibles"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},Object(t.b)("strong",{parentName:"p"},"Pendiente de pago"),Object(t.b)("br",{parentName:"p"}),"\n","El estado pendiente de pago y el estado en espera suelen confundirse a menudo, aunque en seguida ver\xe1s que son muy diferentes. Y se confunden porque, cuando buscas informaci\xf3n, la definici\xf3n que se suele dar para ambos es la misma: los pedidos en estos estados est\xe1n pendientes o en espera de que se realice el pago.")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},Object(t.b)("strong",{parentName:"p"},"Procesando"),Object(t.b)("br",{parentName:"p"}),"\n","Una vez se ha producido el pago, el estado del pedido pasa a procesando, bien sea de forma manual o autom\xe1tica, seg\xfan hemos visto en la secci\xf3n anterior. Cuando el pedido llega a este estado, las unidades de producto correspondientes al pedido ya se han descontado del stock.")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},Object(t.b)("strong",{parentName:"p"},"En espera"),Object(t.b)("br",{parentName:"p"}),"\n","Si por ejemplo el m\xe9todo de pago es la transferencia bancaria, el pedido se quedar\xe1 en estado de espera (el circulito gris con la l\xednea horizontal). Est\xe1 en espera de que yo realice el pedido, el gestor de la tienda lo comprueba, y manualmente lo valida y le cambia el estado (generalmente a procesando).")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},Object(t.b)("strong",{parentName:"p"},"Completando"),Object(t.b)("br",{parentName:"p"}),"\n","Si todo va bien, el pedido pasar\xe1 a continuaci\xf3n a completo. \xbfCu\xe1ndo? Pues bien cuando lo hayamos despachado para env\xedo (si hay env\xedo) o cuando lo tengamos listo para recoger, si el cliente escogi\xf3 la opci\xf3n de recogida local.")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},Object(t.b)("strong",{parentName:"p"},"Cancelado"),Object(t.b)("br",{parentName:"p"}),"\n","Suele pasar cuando el usuario elige pagar mediante PayPal pero, una vez en la web del procesador, pincha en el enlace \u201cCancelar y volver a\u201d .\n")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},Object(t.b)("strong",{parentName:"p"},"Reembolsado"),"\nSe reembolsa el pedido seg\xfan las necesidades de la tienda o cliente.")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},Object(t.b)("strong",{parentName:"p"},"Fallido"),Object(t.b)("br",{parentName:"p"}),"\n","Este estado tiene que ver con el procesamiento del pago, y normalmente nos encontraremos con la exclamaci\xf3n blanca sobre fondo amarillo cuando el pago mediante tarjeta de cr\xe9dito ha dado error por cualquier motivo."))),Object(t.b)("h4",{id:"acciones-del-pedido"},"Acciones del Pedido"),Object(t.b)("p",null,'Existe tambi\xe9n la secci\xf3n de acciones del pedido, en esta parte podemos reenviar el correo de confirmaci\xf3n al cliente, tambi\xe9n podemos enviar los detalles del pedido al cliente.\nLa \xfaltima opci\xf3n "Generar permisos de descarga" sirve solo para pedidos que tengan productos descargables'),Object(t.b)("h4",{id:"notas-del-pedido"},"Notas del pedido"),Object(t.b)("p",null,"Luego tenemos una herramienta que se usa muy poco, pero que es extremadamente \xfatil. Las notas del pedido.\nLas notas pueden ser de dos tipos:  "),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Privadas (aparecen en gris). Estas son para los administradores de la tienda, y los clientes no las pueden ver. Se usan  para aclaraciones internas.  "),Object(t.b)("li",{parentName:"ul"},"Al cliente (aparecen en lila). Estas son notas que el cliente recibir\xe1 por mail. Se usan para comunicarnos con el cliente y tener constancia de todas ellas. Por ejemplo, si un pedido se va a retrasar un poco, podemos enviarle una nota (correo) a trav\xe9s de esta opci\xf3n.")),Object(t.b)("img",{src:"/static/img/pedidosUsuarios/pedidos3.png",width:"80%"}),Object(t.b)("h4",{id:"productos-del-pedido"},"Productos del pedido"),Object(t.b)("p",null,"A continuaci\xf3n tenemos el listado de art\xedculos que contiene el pedido en s\xed. Es lo equivalente al carrito que ha llenado el cliente.\nAparte de poder ver toda la informaci\xf3n, si el producto no est\xe1 completado, podremos editar lo que queramos usando el icono del l\xe1piz. En cualquier momento podr\xedamos:  "),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Aumentar o disminuir el n\xfamero de unidades pedidas."),Object(t.b)("li",{parentName:"ul"},"A\xf1adir o quitar productos."),Object(t.b)("li",{parentName:"ul"},"Modificar el precio final."),Object(t.b)("li",{parentName:"ul"},"A\xf1adir una cuota (cualquier recargo o incremento)."),Object(t.b)("li",{parentName:"ul"},"Realizar un reembolso (total o parcial).")),Object(t.b)("p",null,"\xa1Listo! A grandes rasgos esta es la informaci\xf3n que puedes administrar respecto a los pedidos que llegan a tu tienda con WooCommerce, puede que te interese leer nuestro articulo sobre los ",Object(t.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/ecommerce-ajustes-generales"}),"Ajustes Generales de WooCommerce")))}l.isMDXComponent=!0},168:function(e,a,o){"use strict";o.d(a,"a",(function(){return p})),o.d(a,"b",(function(){return b}));var n=o(0),r=o.n(n);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function c(e,a){if(null==e)return{};var o,n,r=function(e,a){if(null==e)return{};var o,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=r.a.createContext({}),l=function(e){var a=r.a.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},p=function(e){var a=l(e.components);return r.a.createElement(d.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var o=e.components,n=e.mdxType,t=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(o),u=n,b=p["".concat(i,".").concat(u)]||p[u]||m[u]||t;return o?r.a.createElement(b,s(s({ref:a},d),{},{components:o})):r.a.createElement(b,s({ref:a},d))}));function b(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=o.length,i=new Array(t);i[0]=u;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<t;d++)i[d]=o[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);