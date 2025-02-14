import Link from 'next/link';
import { dummyPresentations } from '@/data/dummy-presentations';
import PresentationCard from '@/components/presentation/presentation';
import PresentationsGridWrapper from '@/components/presentation/presentationsGridWrapper';

export default function HistoryPage() {
  // TODO: add button to load more presentations or pagination
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Here check out our past presentations</h2>
      <PresentationsGridWrapper>
        {dummyPresentations.map((p) => (
          <Link key={p.id} href={`/history/presentation/${p.id}`}>
            <PresentationCard presentation={p} />
          </Link>
        ))}
      </PresentationsGridWrapper>
    </div>
  );
}
