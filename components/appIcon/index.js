import styles from "./appIcon.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AppIcon(props) {
  const [isLaunched, setIsLaunched] = useState(false);

  const imagesPath = props.imgSrc;
  const app_name = props.appName;
  const window = props.Window;

  function HandleClick() {
    setIsLaunched(true);
  }

  function displayWindow(isLaunched) {
    if (isLaunched) {
      return (window());
    }
  }

  useEffect(() => {
    // Any side effects can be performed here when `isLaunched` changes
  }, [isLaunched]);

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
      {displayWindow(isLaunched)} {/* Call the displayWindow function */}
    </>
  );
}
