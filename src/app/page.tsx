'use client';
import Link from 'next/link';
import { useRouter } from 'next/compat/router';
import AddIdeaSection from '@/components/addIdeaSection/addIdeaSection';

export default function Home() {
  const router = useRouter();
  console.log('router ==', router);
  return (
    <main>
      Landing Page
      <Link href={'/history'}>Past Events</Link>
      <AddIdeaSection />
    </main>
  );
}
