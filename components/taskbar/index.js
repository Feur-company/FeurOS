import styles from "./taskbar.module.css"
import Clock from "../clock"


function Taskbar(){
    return(
        <>
        <div className={styles.taskbarContainer}>
            <div className={styles.taskbar}>

                <div className={styles.separator}>

                </div>
                <Clock/>
            </div>
        </div>

        </>
    )
}

export default Taskbar