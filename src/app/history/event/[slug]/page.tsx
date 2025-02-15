import { dummyEvents } from '@/data/dummy-events';

type PageProps = Promise<{ slug: string }>;

export default async function EventPage({ params }: { params: PageProps }) {
  const { slug } = await params;

  const event = dummyEvents.find((p) => p.id === slug);

  return (
    <div>
      <h2>{event?.name}</h2>
    </div>
  );
}
