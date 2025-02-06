import styles from './header.module.css';

import Link from 'next/link';

export default function LoginButton() {
  return (
    <Link className={styles.loginBtn} href={'/loginPage'}>
      Login
    </Link>
  );
}
