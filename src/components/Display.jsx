
import styles from './Display.module.css';

const Display = ({displayValue}) => {
  return (
    <>
       <input className={styles.display} value={displayValue} type="text"/>
    </>
  );
};

export default Display;