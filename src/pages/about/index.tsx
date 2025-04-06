import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function AboutHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">About Us</h1>
        <p className="hero__subtitle">Sunwood AI Labsについて</p>
      </div>
    </header>
  );
}

export default function About(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`About Us`}
      description="Sunwood AI Labsの会社概要">
      <AboutHeader />
      <main>
        <div className={styles.aboutSection}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <div className={styles.aboutContent}>
                  <h2>Our Mission</h2>
                  <p>
                    Sunwood AI Labsは、最先端のAI技術とクラウドソリューションを通じて、
                    ビジネスの課題解決と技術革新を支援します。
                  </p>
                  <h2>Our Vision</h2>
                  <p>
                    私たちは、AIとクラウドテクノロジーの力で、より良い未来を創造することを目指しています。
                  </p>
                </div>
              </div>
              <div className="col col--6">
                <div className={styles.aboutImageContainer}>
                  <img 
                    src="/img/about-us.svg" 
                    alt="About Sunwood AI Labs" 
                    className={styles.aboutImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
