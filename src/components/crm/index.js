import styles from './crm.module.scss';
import SectionTitle from '../common/SectionTitle';
import IntegrationCard from '../integrations/IntegrationCard';

const crmData = [
  {
    id: 1,
    image: '/image/food-img-1.jpeg',
    logo: '/image/toast.png',
    rating: 4.5,
  },
  {
    id: 2,
    image: '/image/food-img-2.jpeg',
    logo: '/image/square.png',
    rating: 4.5,
  },
  {
    id: 3,
    image: '/image/food-img-3.jpeg',
    logo: '/image/urbanPiper.png',
    rating: 4.5,
  },
  {
    id: 4,
    image: '/image/food-img-4.jpeg',
    logo: '/image/urbanPiper.png',
    rating: 4.5,
  },
  {
    id: 5,
    image: '/image/food-img-4.jpeg',
    logo: '/image/urbanPiper.png',
    rating: 4.5,
  },
  // Add more CRM data as needed
];

const CRMSection = () => {
  return (
    <section className={styles.crmSection}>
      <SectionTitle 
        title="Customer Relationship Management (CRM) & Loyalty Programs"
        className={styles.sectionTitle}
      />
      <div className={styles.cardsContainer}>
        {crmData.map((item) => (
          <IntegrationCard 
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  );
};

export default CRMSection; 