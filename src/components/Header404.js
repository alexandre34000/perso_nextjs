import styles from './Header404.module.css';
import Link from 'next/link';

export default function Header404() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.text}>Oops! on accede à cette page si l'on est perdu!</h2>
        <Link href="/">
          <a>
            <button className={styles.btnprimary}>Go back home</button>
          </a>
        </Link>
        <br />
      </div>
    </section>
  );
}

//export default Header404;
