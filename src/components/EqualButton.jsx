
import styles from './EqualButton.module.css';
const EqualButton = ({onButtonClick}) => {
  return (
    <>
      <button className={styles.equalBtn} onClick={onButtonClick}>=</button>
    </>
  );
};

export default EqualButton;