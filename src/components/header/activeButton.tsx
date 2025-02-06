'use client';

import styles from './header.module.css';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ActiveButtonProps {
  href: string;
  label: string;
}

export default function ActiveButton({ href, label }: ActiveButtonProps) {
  const path = usePathname();
  const isActive = path.startsWith(href);
  return (
    <Link className={`${styles.link} ${isActive ? styles.active : undefined}`} href={href}>
      {label}
    </Link>
  );
}
