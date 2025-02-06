import React, { Suspense } from 'react';
import delayedString from '@/app/history/data';

interface PageProps {
  params: { [key: string]: string };
}

async function Page({ params }: PageProps) {
  const result = await delayedString();
  return (
    <div>
      <Suspense fallback={<p>Loading</p>}>
        <p>
          Event nr {params.number} {result}
        </p>
      </Suspense>
    </div>
  );
}

export default Page;
