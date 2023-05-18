import styles from "./appIcon.module.css"
import Image from "next/image";
import { useEffect, useState } from "react";

function handleClick(){
    
}

export default function AppIcon(props){
    const [isLaunched, setIsLaunched] = useState(0)

    const imagesPath = props.imgSrc
    const app_name = props.appName
    const window = props.Window
    return(
        <div className={styles.appDiv}>
            <Image src={imagesPath} onClick={handleClick} className={styles.appImg} alt={app_name} width={40} height={40} />
        </div>
    )
}