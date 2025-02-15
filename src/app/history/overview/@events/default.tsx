import { dummyEvents } from '@/data/dummy-events';
import EventComponent from '@/components/event/eventComponent';
import Link from 'next/link';

export default function EventsPage() {
  const events = dummyEvents;

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Check out our past events</h2>
      {events.map((e) => (
        <Link href={`/history/event/${e.id}`} key={e.id} style={{ textDecoration: 'none', color: 'var(--black)' }}>
          <EventComponent event={e} />
        </Link>
      ))}
    </div>
  );
}
