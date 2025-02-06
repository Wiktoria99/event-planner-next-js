import styles from './header.module.css';
import ActiveButton from '@/components/header/activeButton';
import LoginButton from '@/components/header/loginButton';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.container}>
      <nav>
        <Link className={styles.link} href="/">
          Start
        </Link>
        <ActiveButton href="/next-event" label="Next Event" />
        <ActiveButton href="/history" label="History" />
        <ActiveButton href="/statistics" label="Statistics" />
      </nav>
      <LoginButton />
    </header>
  );
};

export default Header;
