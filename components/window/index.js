import styles from "./window.module.css"

function Window(props){
    content = props.children
    tilte = props.title

    return(
        <>
        <div className={styles.window}>
            {content}
        </div>
        </>
    );
}
export default Window