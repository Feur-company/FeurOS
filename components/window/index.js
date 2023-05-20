import styles from "./window.module.css"

function Window({children}, props){

    const tilte = props.title

    return(
        <>
        <div className={styles.window}>
            {children}
        </div>
        </>
    );
}
export default Window