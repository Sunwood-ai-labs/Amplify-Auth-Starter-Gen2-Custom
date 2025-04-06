import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '最先端のAI研究',
    image: 'img/cat2.svg',
    description: (
      <>
        自然言語処理、コンピュータビジョン、強化学習など、
        最先端のAI技術の研究開発に取り組んでいます。
        産学連携を通じて、革新的なソリューションを生み出します。
      </>
    ),
  },
  {
    title: 'オープンイノベーション',
    image: 'img/cat3.svg',
    description: (
      <>
        私たちは研究成果をオープンソースとして公開し、
        グローバルなAIコミュニティと協力して
        技術革新を推進します。
      </>
    ),
  },
  {
    title: '実世界への応用',
    image: 'img/cat4.svg',
    description: (
      <>
        研究成果を実世界の課題解決に応用し、
        社会に貢献するAIソリューションの
        実装を目指しています。
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
