'use client';
import Link from 'next/link';
import { useRouter } from 'next/compat/router';
import Footer from '@/components/footer/footer';

export default function Home() {
  const router = useRouter();
  console.log('router ==', router);
  return (
    <main>
      Landing Page
      <Link href={'/history'}>Past Events</Link>
      <Footer />
    </main>
  );
}
