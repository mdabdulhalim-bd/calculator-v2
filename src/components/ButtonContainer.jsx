import styles from "./ButtonContainer.module.css";
// import EqualButton from "./EqualButton";
const ButtonContainer = ({ btnSigns, handleCalculate}) => {
  return (
    <>
      <div className={styles.buttonContainer}>
        {btnSigns.map((sign) => {
          return (
            <button key={sign} className={styles.button} onClick={() => handleCalculate(sign)}>
              {sign}
            </button>
            
          );
        })}
       
      </div>
    </>
  );
};

export default ButtonContainer;
