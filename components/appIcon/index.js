import styles from "./appIcon.module.css"
import Image from "next/image";

export default function AppIcon(props){
    const imagesPath = props.imgSrc
    const app_name = props.appName
    return(
        <div className={styles.appDiv}>
            <Image src={imagesPath} className={styles.appImg} alt={app_name} width={40} height={40} />
        </div>
    )
}