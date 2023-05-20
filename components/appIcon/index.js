import styles from "./appIcon.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function AppIcon(props) {
  const [isLaunched, setIsLaunched] = useState(false);

  const imagesPath = props.imgSrc;
  const app_name = props.appName;
  const window = props.Window;

  function HandleClick() {
    setIsLaunched(true);
  }

  useEffect(() => {
    // Any side effects can be performed here when `isLaunched` changes
  }, [isLaunched]);

  useEffect(() => {
    // Clean up the state when the component unmounts
    return () => {
      setIsLaunched(false);
    };
  }, []);



  return (
    <>
      <div className={styles.appDiv}>
        <Image
          src={imagesPath}
          onClick={HandleClick}
          className={styles.appImg}
          alt={app_name}
          width={40}
          height={40}
        />
      </div>
      {isLaunched &&
        ReactDOM.createPortal(window(),  document.body)} {/* Render the window component outside of the current parent */}
    </>
  );
}
