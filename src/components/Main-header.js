import styles from './Main-header.module.css';


const MainHeader = () => {

    return (
        <div className={styles["main-header"]}>
            <h1 className={styles["main-header__title"]}>Réaliser un site internet </h1>
            <p className={styles["main-header__text"]}>En quelques minutes ou un peu plus...</p>
           {/*  <Link href="#decouvrir"><a className={styles["main-header__link"]}>Visiter</a></Link> */}
        </div>
    )
}

export default MainHeader