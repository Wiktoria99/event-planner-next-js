import { Presentation } from '@/models/presentation';
import styles from './presentation.module.css';

export default function PresentationCard({ presentation }: { presentation: Presentation }) {
  return (
    <div className={styles.paperContainer}>
      <h3>{presentation.title}</h3>
      <p>{presentation.description}</p>
    </div>
  );
}
