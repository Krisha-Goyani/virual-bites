import styles from './starRating.module.scss';

const StarRating = ({ rating }) => {
  return (
    <div className={styles.rating}>
      <span className={styles.star}>⭐</span>
      <span className={styles.value}>{rating}</span>
    </div>
  );
};

export default StarRating; 