import styles from './Main-header.module.css';
import { useAppContext } from '@context/scrollState';

const MainHeader = (props) => {

    const { valueY } = useAppContext();
    const [statePosY, setStatePosY] = valueY;

    const styling = {
        backgroundImage: "url(" + `${props.img}` + ")",
    }

    return (
        <div className={styles["main-header"]} style={styling}  >
            <div className={styles["main-header-information"]}>
                <div className={styles["main-header__constainer-title"]}>
                    <h1 className={styles["main-header__title"]}>Réaliser un site internet </h1>
                </div>
                <div className={styles["main-header__constainer-bar"]}>
                    <p className={styles["main-header__bar"]}></p>
                </div>
                <div className={styles["main-header__constainer-text"]}>
                    <p className={styles["main-header__text"]}>En quelques minutes ou un peu plus...</p>
                </div></div>
        </div>
    )
}

export default MainHeader