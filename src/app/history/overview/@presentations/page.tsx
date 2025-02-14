import Link from 'next/link';
import { dummyPresentations } from '../../../../../dummy-presentations';
import PresentationCard from '@/components/presentation/presentation';
import PresentationsGridWrapper from '@/components/presentation/presentationsGridWrapper';

export default function HistoryPage() {
  return (
    <div>
      <h3>Here check out our past presentations</h3>
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
