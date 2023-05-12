import styles from "./taskbar.module.css"
import Clock from "../clock"


function Taskbar({children}){
    return(
        <>
        <div className={styles.taskbarContainer}>
            <div className={styles.taskbar}>
                <div className={styles.taskContents}>
                    {children}
                </div>
                <div className={styles.separator}></div>
                <Clock/>
            </div>
        </div>

        </>
    )
}

export default Taskbar