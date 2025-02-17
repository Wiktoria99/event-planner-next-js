import { dummyEvents } from '@/data/dummy-events';
import EventAgenda from '@/components/eventAgenda/eventAgenda';
import { notFound } from 'next/navigation';

type PageProps = Promise<{ slug: string }>;

export default async function EventPage({ params }: { params: PageProps }) {
  const { slug } = await params;

  const event = dummyEvents.find((p) => p.id === slug);

  if (!event) notFound();

  return <EventAgenda event={event} />;
}
