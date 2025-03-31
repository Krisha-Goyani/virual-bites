import styles from './integrations.module.scss';
import SectionTitle from '../common/SectionTitle';
import IntegrationCard from './IntegrationCard';

const integrationsData = [
  {
    id: 1,
    image: '/image/food-img-1.jpeg',
    logo: '/image/urbanPiper.png',
    rating: 4.5,
  },
  {
    id: 2,
    image: '/image/food-img-2.jpeg',
    logo: '/image/olo.png',
    rating: 4.5,
  },
  {
    id: 1,
    image: '/image/food-img-3.jpeg',
    logo: '/image/urbanPiper.png',
    rating: 4.5,
  },
  {
    id: 1,
    image: '/image/food-img-4.jpeg',
    logo: '/image/urbanPiper.png',
    rating: 4.5,
  },
  {
    id: 1,
    image: '/image/food-img-5.jpeg',
    logo: '/image/urbanPiper.png',
    rating: 4.5,
  },
  // Add more integration data as needed
];

const Integrations = () => {
  return (
    <section className={styles.integrationsSection}>
      <SectionTitle 
        title="Online Ordering & Integrations"
        className={styles.sectionTitle}
      />
      <div className={styles.cardsContainer}>
        {integrationsData.map((integration) => (
          <IntegrationCard 
            key={integration.id}
            {...integration}
          />
        ))}
      </div>
    </section>
  );
};

export default Integrations; 