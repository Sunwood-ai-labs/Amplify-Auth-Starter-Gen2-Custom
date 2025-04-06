import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import BlogSidebar from '@theme/BlogSidebar';
import {BlogPostMetadata} from '@theme/BlogPostPage';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            チュートリアルを始める ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className="container margin-vert--lg">
          <h2 className="text--center margin-bottom--lg">最新のブログ記事</h2>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Link
                to="/blog"
                className="button button--secondary button--lg margin-bottom--lg">
                すべての記事を見る 📚
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
