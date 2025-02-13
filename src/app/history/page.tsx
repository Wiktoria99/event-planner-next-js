import Link from 'next/link';
import { dummyPresentations } from '../../../dummy-presentations';
import PresentationCard from '@/components/presentation/presentation';
import PresentationsWrapper from '@/components/presentation/presentationsWrapper';

export default function HistoryPage() {
  return (
    <div>
      <PresentationsWrapper>
        {dummyPresentations.map((p) => (
          <Link key={p.id} href={`/history/presentation/${p.id}`}>
            <PresentationCard presentation={p} />
          </Link>
        ))}
      </PresentationsWrapper>
    </div>
  );
}
