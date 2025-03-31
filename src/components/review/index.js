import Image from 'next/image';
import styles from './review.module.scss';

const reviews = [
  {
    id: 1,
    image: '/Image/review-img-1.jfif',
    text: 'Review content goes here, Viverra lorem'
  },
  {
    id: 2,
    image: '/Image/review-img-2.jfif',
    text: 'Review content goes here, Viverra lorem'
  },
  {
    id: 3,
    image: '/Image/review-img-3.jfif',
    text: 'Review content goes here, Viverra lorem'
  },
  {
    id: 4,
    image: '/Image/review-img-4.jfif',
    text: 'Review content goes here, Viverra lorem'
  },
  {
    id: 5,
    image: '/Image/review-img-5.jfif',
    text: 'Review content goes here, Viverra lorem'
  },
  {
    id: 6,
    image: '/Image/review-img-6.jfif',
    text: 'Review content goes here, Viverra lorem'
  },
  {
    id: 5,
    image: '/Image/review-img-5.jfif',
    text: 'Review content goes here, Viverra lorem'
  },
  {
    id: 5,
    image: '/Image/review-img-5.jfif',
    text: 'Review content goes here, Viverra lorem'
  },
];

const ReviewSection = () => {
  return (
    <section className={styles.reviewSection}>
      <div className={styles.reviewsContainer}>
        <div className={styles.reviewsScroll}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={review.image}
                  alt="Review"
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 200px, 300px"
                />
              </div>
              <p className={styles.reviewText}>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;