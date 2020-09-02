import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Sobre tu sitio web</>,
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    imageUrl: 'https://conektica.com/ads/wp-content/themes/conektica20/assets/img/services/content-marketing.png',
    description: (
      <>
        Descubre información relevante sobre la administración de tu WordPress en la base de conocimiento que Conektica preparó para ti.
      </>
    ),
  },
  {
    title: <>Sobre tu Tienda en linea</>,
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    imageUrl: 'https://conektica.com/ads/wp-content/themes/conektica20/assets/img/services/vende.png',
    description: (
      <>
        Visita nuestros articulos sobre e-commerce para admistrar correctamente tu tienda en linea, recuerda que támbien contamos con video tutoriales de algunos de ellos para hacerte la vida más fácil.
      </>
    ),
  },
  {
    title: <>Sobre tus cuentas de Correo</>,
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    imageUrl: 'https://conektica.com/ads/wp-content/themes/conektica20/assets/img/services/email-marketing.png',
    description: (
      <>
        Configura correctamente los correos corporativos que incluye tu hosting con las guías y video tutoriales preparados para que puedas atender tu negocio desde tu smartphone o tu computadora.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} Conektica`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/ecommerce-administracion-de-la-tienda')}>
              Ver información
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
