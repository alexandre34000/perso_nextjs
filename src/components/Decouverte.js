import styles from './Decouverte.module.css'
import { Link } from 'next/link';

const Decouvert = (props) => {

    return (
        <div className={styles["container-cards"]}>
            <div className={styles["cards-header"]}>
                <img className={styles["cards-img"]} src={props.dataCards.img} alt=""/>
            </div>
            <div className={styles["cards-bottom"]}>
                <p className={styles["cards-title"]}>{props.dataCards.title}</p>
               {/*  <Link href={`${props.dataCards.page}`}><a className={styles["cards-link "]} >{props.dataCards.button}</a></Link> */}
               <a href={`${props.dataCards.page}`} className={styles["cards-link"]} >{props.dataCards.button}</a>
            </div>
        </div>
    )
}

export default Decouvert