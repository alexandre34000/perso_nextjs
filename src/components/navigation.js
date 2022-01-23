import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation = (props) => {

  const pos = `menu${props.pos}`
  console.log(pos);
  return (
    <header >
      <div className={styles["container-entete"]} id="screen-top" data-visible="true">
        <div className={styles["content-entete"]}>
          <nav className={styles["entete-left"]} id="toogleMenu" aria-label="naviguer vers d'autres sections du site">
            <ul>
              <li className={styles["entete-left__list-item"]}><Link href="/commencer"><a className={styles["link-header"]} >Commencer</a></Link></li>
              <li className={styles["entete-left__list-item"]}><Link href ="/templates"><a className={styles["link-header"]} >Templates</a></Link></li>
              <li className={styles["entete-left__list-item"]}><Link href ="/realiser"><a className={styles["link-header"]} >Réaliser</a></Link></li>
            </ul>
          </nav>
          <div className={styles["entete-center"]} >
            <p className={styles["entete-center__logo"]}><Link href="/"><a className={styles["entete-center__logo"]}>AC</a></Link></p>
          </div>
          <nav className={styles["entete-right"]} aria-label="naviguer vers d'autres pages" >
            <ul>
              <li className={styles["entete-left__list-item"]}><Link href="/profil"><a className={styles["link-header"]} >Profil</a></Link></li>
              <li className={styles["entete-left__list-item"]}><Link href="/login"><a className={styles["link-header"]} >Log in</a></Link></li>
            </ul>
          </nav>
          <div className={styles["entete-right__mobile"]} >
            <div className={styles["nav-icon"]} data-open="false" >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header >
  )

}



/* <nav className={ styles[`${pos}`] } >
   <ul>
     {props.data.map((route, i) => <li key={i} className={styles.li}><Link  href="#" >
       <a className={styles.menulink}>{route.title}</a>
     </Link></li>)}
     </ul>
   </nav> */
export default Navigation