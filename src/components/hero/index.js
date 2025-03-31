import Image from 'next/image';
import styles from './hero.module.scss';

const HeroSection = () => {
  return (
    <div className="">
    <section className={styles.hero}>
      <div className={styles.overlay} />
      
        <div className={styles.content}>
          <div className={styles.logoWrapper}>
            <Image
              src="/Image/cheeky-panda-img.png"
              alt="The Cheeky Panda"
              title="The Cheeky Panda"
              width={240}
              height={80}
              className={styles.logo}
              priority
            />
          </div>
          <h1 className={styles.title}>THE CHEEKY PANDA</h1>
          <p className={styles.description}>
            Pellentesque ac orci lacus niven nibh. Proin tristique ac eleifend nulla vitae
            tortor eu. Ligula sagittis mauris nisi est ornare tortor volutpat diam vitae. Ut viverra
            urna velit at non leo rutrum. Est adipiscing urna lac nunc ut.
          </p>
          <button className={styles.enquireButton}>
            Enquire
          </button>
        </div>
    </section>
      </div>
  );
};

export default HeroSection;