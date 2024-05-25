
import ButtonContainer from './ButtonContainer';
import Display from './Display';
import styles from './Container.module.css';
import {useState} from 'react';

const Container = () => {
  const btnSigns = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "%",
    "="
  ];

  const [calVal, setCalVal] = useState("");

  const handleCalculate = (peekBtnText) => {
    // console.log(peekBtnText);

    if(peekBtnText === "C"){
      setCalVal("");
    }else if(peekBtnText === "="){
      const result = eval(calVal);
      setCalVal(result);
    }
    else{
      const newInputValue = calVal + peekBtnText;
      setCalVal(newInputValue);
    }
  }


  return (
    <div className={styles.inner}>
      <Display displayValue= {calVal}></Display>
      <ButtonContainer key={btnSigns} btnSigns={btnSigns} handleCalculate={handleCalculate} >
     </ButtonContainer>
     
    </div>
  );
};
 
export default Container;
