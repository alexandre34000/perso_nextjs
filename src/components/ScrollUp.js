import styles from './ScrollUp.module.css';
import { useAppContext } from '../context/scrollState';
import Image from 'next/image'
import arrow from '../../public/images/icons/drop_up.png'
const ScrollUp = () => {

    const { valueActive } = useAppContext();
    const [isActive, setIsActive] = valueActive;

    const handleScrollTop = () => {
        console.log("clicked")
        setTimeout(()=>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },0)
        
    }

    return (
        <div className={styles["container-scrolltop"]} data-visible={!isActive} >
            <button className={styles["scroll-top"]} onClick={handleScrollTop} >
                <Image src={arrow} alt="" layout="fill" objectFit="contain" />
            </button>
        </div>
    )
}

export default ScrollUp