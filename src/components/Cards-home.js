import styles from './Cards-home.module.css'
import Link from 'next/link';
import { useState } from 'react';

const Card = (props) => {
    const [data, setData] = useState(props.dataCards);

    return (
        <div className={styles["container-cards"]} pos={props.dataCards.pos} reveal={props.dataCards.reveal}>
            <div className={styles["cards-header"]}>
                <img className={styles["cards-img"]} src={props.dataCards.img} alt="" />
            </div>
            <div className={styles["cards-information"]} >
                <div className={styles["cards-mini"]}>
                    <h2 className={styles["cards-title"]}>{props.dataCards.title}</h2>
                    <p className={styles["cards-subtitle"]}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    </p>
                    <Link href={props.dataCards.href}><a className={styles["cards-link"]}>{props.dataCards.button}</a></Link>
                </div></div>
        </div>
    )
}

export default Card