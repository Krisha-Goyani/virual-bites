import styles from './pos.module.scss';
import SectionTitle from '../common/SectionTitle';
import Image from 'next/image';
import StarRating from '../common/StarRating';

const posData = [
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
    logo: '/image/urbanPiper-img.png',
    rating: 4.5,
  },
  {
    id: 5,
    image: '/image/food-img-5.jpeg',
    logo: '/image/urbanPiper-img.png',
    rating: 4.5,
  },
  {
    id: 6,
    image: '/image/food-img-2.jpeg',
    logo: '/image/urbanPiper-img.png',
    rating: 4.5,
  },
  // Add more POS data as needed
];

const POSCard = ({ image, logo, rating }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt="POS System"
          fill
          className={styles.image}
          sizes="(max-width: 768px) 200px, 315px"
        />
        <div className={styles.overlay}>
          <div className={styles.ratingWrapper}>
            <StarRating rating={rating} />
          </div>
          <div className={styles.logoWrapper}>
            <Image
              src={logo}
              alt="POS Logo"
              width={120}
              height={24}
              className={styles.logo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const POSSection = () => {
  return (
    <section className={styles.posSection}>
      <SectionTitle 
        title="Point of Sale (POS) Systems"
        className={styles.sectionTitle}
      />
      <div className={styles.cardsContainer}>
        {posData.map((item) => (
          <POSCard 
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  );
};

export default POSSection; 