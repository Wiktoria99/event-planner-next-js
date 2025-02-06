import React, { Suspense } from 'react';

interface PageProps {
  params: { [key: string]: string };
}

async function Page({ params }: PageProps) {
  return (
    <div>
      <Suspense fallback={<p>Loading</p>}>
        <p>Event nr {params.number}</p>
      </Suspense>
    </div>
  );
}

export default Page;
