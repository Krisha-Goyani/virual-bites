import styles from './sectionTitle.module.scss';

const SectionTitle = ({ title, className }) => {
  return (
    <h2 className={`${styles.title} ${className || ''}`}>
      {title}
    </h2>
  );
};

export default SectionTitle; 