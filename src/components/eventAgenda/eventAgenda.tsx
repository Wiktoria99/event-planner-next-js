import { Event } from '@/models/event';
import styles from './eventAgenda.module.css';
import { dummyPresentations } from '@/data/dummy-presentations';
import AgendaPresentation from '@/components/eventAgenda/eventPresentation';

export default function EventAgenda({ event }: { event: Event }) {
  const date = new Date(event.date);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const formattedDate: string = date.toLocaleDateString(undefined, options);

  const presentations = dummyPresentations.filter((p) => event.presentationsId.includes(p.id));

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{event.name}</h1>
      <p>{formattedDate ?? event.date}</p>

      <div className={styles.presentationContainer}>
        {presentations.map((p) => (
          <div key={p.id}>
            <AgendaPresentation presentation={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
