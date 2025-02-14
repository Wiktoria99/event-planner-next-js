import NoNextEventSection from '@/components/sections/noNextEvent';
import AddIdeaSection from '@/components/sections/addIdeaSection';

export default function NextEventPage() {
  // TODO: display next event if present in db
  return (
    <div>
      <NoNextEventSection />
      <AddIdeaSection />
    </div>
  );
}
