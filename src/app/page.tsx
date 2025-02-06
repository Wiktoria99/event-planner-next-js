import AddIdeaSection from '@/components/sections/addIdeaSection';
import CheckNextEventSection from '@/components/sections/checkNextEventSection';
import EmptySection from '@/components/sections/emptySection';

export default function Home() {
  return (
    <main>
      <CheckNextEventSection />
      <AddIdeaSection />
      <EmptySection />
    </main>
  );
}
