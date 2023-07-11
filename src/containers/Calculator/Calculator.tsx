import React from 'react';
import CalculatorButtonsBuilder from "../../components/CalculatorButtonsBuilder/CalculatorButtonsBuilder";
import CalculatorInput from "../../components/CalculatorInput/CalculatorInput";
import {useSelector} from "react-redux";
import {RootState} from "../../app/app";

const Calculator = () => {
  const calculatorInputValue = useSelector((state: RootState) => state.calculator.calculatorValue);

  return (
    <div className="mx-auto mt-5" style={{ width: 340 }}>
      <CalculatorInput value={calculatorInputValue} />
      <CalculatorButtonsBuilder />
    </div>
  );
};

export default Calculator;