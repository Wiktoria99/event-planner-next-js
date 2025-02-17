import { Presentation } from '@/models/presentation';
import styles from './eventAgenda.module.css';

export default function AgendaPresentation({ presentation }: { presentation: Presentation }) {
  return (
    <div className={styles.presentationBox}>
      <div className={styles.time}>
        <h3>10:00</h3>
        <h3>11:00</h3>
      </div>
      <h3>{presentation.title}</h3>
    </div>
  );
}
