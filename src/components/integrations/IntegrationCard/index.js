import Image from 'next/image';
import styles from './integrationCard.module.scss';
import StarRating from '../../common/StarRating';

const IntegrationCard = ({ image, logo, rating }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt="Integration"
          fill
          className={styles.image}
          // sizes="(max-width: 768px) 200px, 315px"
        />
        <div className={styles.overlay}>
          <div className={styles.ratingWrapper}>
            <StarRating rating={rating} />
          </div>
          <div className={styles.logoWrapper}>
            <Image
              src={logo}
              alt="Integration Logo"
              width={200}
              height={24}
              className={styles.logo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationCard; 