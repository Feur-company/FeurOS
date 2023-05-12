import { useState, useEffect } from 'react';
import styles from "./clock.module.css"

function Clock() {
  const [date, setDate] = useState(new Date());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formattedDate = isMounted ? date.toLocaleTimeString() : '';
  const formattedDateString = isMounted ? formatDate(date) : '';

  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return( 
    <>
      <span className={styles.clock}>{formattedDate}</span> 
      <span className={styles.date}>{formattedDateString}</span>
    </>
  );
}

export default Clock;
