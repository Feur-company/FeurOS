import styles from "./appIcon.module.css"
import Image from "next/image";

export default function AppIcon(props){
    let imagesPath = props.imgSrc
    return(
        <div className={styles.appDiv}>
            <Image src={imagesPath} className={styles.appImg} alt="app" width={40} height={40} />
        </div>
    )
}