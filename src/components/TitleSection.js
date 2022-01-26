import styles from './TitleSection.module.css';


const TitleSection = (props) => {


    return (
        <div className={styles["first-parts__header"]}>
            <div className={styles["first-parts__header-border"]}></div>
            <h2 className={styles["first-parts__header-title"]}>{props.title}</h2>
            <div className={styles["first-parts__header-border"]}></div>
        </div>
    )
}
export default TitleSection