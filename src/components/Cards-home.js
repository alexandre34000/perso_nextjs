import styles from './Cards-home.module.css'
import Link from 'next/link';

const Decouvert = (props) => {

    return (
        <div className={styles["container-cards"]}>
            <div className={styles["cards-header"]}>
                <img className={styles["cards-img"]} src={props.dataCards.img} alt="" />
            </div>
            <p className={styles["cards-title"]}>{props.dataCards.title}</p>
            <Link href={props.dataCards.href}><a className={styles["cards-link"]}>{props.dataCards.button}</a></Link>

        </div>
    )
}

export default Decouvert