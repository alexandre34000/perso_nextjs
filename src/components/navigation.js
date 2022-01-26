import Link from 'next/link';
import styles from './Navigation.module.css';
import { useEffect, useState, useContext } from 'react';
import { useAppContext } from '@context/scrollState';

const Navigation = (props) => {

  const { valueY, valueX, valueActive } = useAppContext();
  const [statePosY, setStatePosY] = valueY;
  const [statePosX, setStatPosX] = valueX;
  const [isActive, setIsActive] = valueActive;

  const [isOpen, setIsOpen] = useState(false);

  const toogleMenuMobile = () => {
    setIsOpen(!isOpen);
  }


  return (
    <header className={styles["container-header"]}>
      <div className={styles["container-entete"]} id="screen-top" data-visible={isActive}>
        <div className={styles["row-gap"]}></div>
        <nav className={styles["entete-left__desktop"]} data-open={isOpen} aria-label="naviguer vers d'autres sections du site">
          <ul className={styles["content-entete__list-left"]}>
            <li className={styles["entete__list-item"]}><Link href="/commencer"><a className={styles["link-header"]} >Commencer</a></Link></li>
            <li className={styles["entete__list-item"]}><Link href="/templates"><a className={styles["link-header"]} >Templates</a></Link></li>
            <li className={styles["entete__list-item"]}><Link href="/realiser"><a className={styles["link-header"]} >Réaliser</a></Link></li>
          </ul>
        </nav>
        <div className={styles["entete-replace"]}>
        </div>
        <div className={styles["entete-center"]} >
          <Link href="/"><a className={styles["entete-center__logo"]}>AC</a></Link>
        </div>
        <nav className={styles["entete-right__desktop"]} data-open={isOpen} aria-label="naviguer vers d'autres pages" >
          <ul className={styles["content-entete__list-right"]}>
            <li className={styles["entete__list-item"]}><Link href="/profil"><a className={styles["link-header"]} >Profil</a></Link></li>
            <li className={styles["entete__list-item"]}><Link href="/login"><a className={styles["link-header"]} >Log in</a></Link></li>
          </ul>
        </nav>
        <div className={styles["entete-right__mobile"]} >
          <div className={styles["nav-icon"]} data-open={isOpen} onClick={toogleMenuMobile} >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Navigation