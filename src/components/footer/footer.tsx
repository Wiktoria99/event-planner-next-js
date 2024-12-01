import styles from './footer.module.css';
import NextIcon from '@/assets/nextjs-icon.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>Created with</p>
        <Image src={NextIcon} alt="NextJS" priority height={35} />
      </div>
    </div>
  );
};

export default Footer;
