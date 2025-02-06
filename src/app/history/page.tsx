import React from 'react';
import Link from 'next/link';

async function Page() {
  return (
    <div>
      <Link href="/history/1">Event 1</Link>
      <Link href="/history/2">Event 2</Link>
    </div>
  );
}

export default Page;
