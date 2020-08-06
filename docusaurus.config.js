module.exports = {
  title: 'Base de conocimiento',
  tagline: 'Tu que eres cliente de conektica encuentra toda la información que necesitas para usar nuesros productos',
  url: 'https://conektica.github.io',
  baseUrl: '/',
  favicon: 'https://conektica.com/wp-content/uploads/2019/03/cropped-co-favi-04-180x180.png',
  organizationName: 'conektica', // Usually your GitHub org/user name.
  projectName: 'cnk-external-doku', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Ayuda Conektica',
      logo: {
        alt: 'Base de conocimiento',
        // src: 'img/logo.svg',
        src: 'https://conektica.com/ads/wp-content/themes/conektica20/assets/img/logo-mini.png',
      },
      links: [
        {
          to: 'docs/mail-outlook-ios',
          activeBasePath: 'docs/mail-outlook-ios',
          label: 'Guias de correo electrónico',
          position: 'left',
        },
        // {
        //   to: 'docs/legal-terminos',
        //   activeBasePath: 'docs/legal-terminos',
        //   label: 'legal',
        //   position: 'left',
        // },

        //Menú Ecommerce
        {
        to: 'docs/ecommerce-administracion-de-la-tienda',
        activeBasePath:'docs/ecommerce-administracion-de-la-tienda' ,
        label: 'Ecommerce',
        position: 'left',
         },
        
        //Menú correo electronico
        /* {to: 'blog', label: 'Correo electronico', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'Contacto',
          position: 'right',
        }, */
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guias',
          items: [
            {
              label: 'Woocommerce',
              to: 'docs/ecommerce-usuarios-woocommerce',
            },
            {
              label: 'Configuracion de correros',
              to: 'docs/mail-outlook-ios',
            },
          ],
        },
        {
          title: 'Nuestros Servicios',
          items: [
            {
              label: 'Branding',
              href: 'http://conektica.com/ads/branding/',
            },
            {
              label: 'Marketing digital',
              href: 'https://conektica.com/ads/',
            },
            {
              label: 'Ecommerce',
              href: 'https://conektica.com/ads/ecommerce/',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'Blog conektica',
              href: 'https://conektica.com/conektica-blog/',
            },
            {
              label: 'conektica.com',
              href: 'https://conektica.com/',
            },
          ],
        },
      ],
      copyright: `Derechos Reservados © ${new Date().getFullYear()} Conektica, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc6',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //Cambio conektica para eliminar "Edit this page" dentro de los documentos
         /*  editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/', */
        },
         blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //Cambio conektica para eliminar "Edit this page" dentro de los documentos
           /* editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',  */
        }, 
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
