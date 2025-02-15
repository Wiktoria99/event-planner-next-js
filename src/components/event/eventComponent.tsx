import styles from './event.module.css';
import { Event } from '@/models/event';

export default function EventComponent({ event }: { event: Event }) {
  const date = new Date(event.date);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const formattedDate: string = date.toLocaleDateString(undefined, options);
  return (
    <div className={styles.container}>
      <h3>{event.name}</h3>
      <p>{formattedDate ?? event.date}</p>
    </div>
  );
}
