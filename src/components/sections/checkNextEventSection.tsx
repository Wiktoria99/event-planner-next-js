import styles from './sections.module.css';
import Link from 'next/link';

export default function CheckNextEventSection() {
  return (
    <div className={styles.container}>
      <h1>Check out what we’ve prepared for the next event or take a trip to the past! 🔥</h1>
      <div className={styles.rowContainer}>
        <Link href={'/next-event'}>
          <button className={`${styles.primaryBtn} ${styles.btn}`}>Next event</button>
        </Link>
        <Link href={'/history/overview'}>
          <button className={`${styles.secondaryBtn} ${styles.btn}`}>Past events</button>
        </Link>
      </div>
    </div>
  );
}
