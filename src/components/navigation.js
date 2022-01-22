import Link from 'next/link';
import styles from './Navigation.module.css';
import routes from '@helpers/routes';
import Header404 from '@components/Header404';


export default function Navigation() {

  return (
    <nav className={styles.menu} data-close-click-outside-curtain>
      <Link href="#" >
        <a className={styles['menulink-i']}>{routes.home.title}</a>
      </Link>
      <Link href="#" >
      <a className={styles.menulink}>
      {routes.blog.title}</a>
      </Link>
      <Link href="#" >
      <a className={styles.menulink}>
        Sign in
        </a>
      </Link>
    </nav>
  )

}