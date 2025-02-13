import styles from './sections.module.css';
import Link from 'next/link';

export default function NoNextEventSection() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1>We’re planning something exciting!</h1>
        <p>While you wait, check out our past events and presentations! 🔥</p>
        <Link href={'/history'}>
          <button className={`${styles.secondaryBtn} ${styles.btn}`}>Past events</button>
        </Link>
      </div>
      <div className={styles.image}>
        <img src="/empty-calendar.png" width="350px" />
      </div>
    </div>
  );
}
