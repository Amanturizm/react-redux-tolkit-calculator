import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../app/app";
import CalculatorInput from "../../components/CalculatorInput/CalculatorInput";
import CalculatorButtonsBuilder from "../../components/CalculatorButtonsBuilder/CalculatorButtonsBuilder";

const Calculator = () => {
  const calculatorInputTitle = useSelector((state: RootState) => state.calculator.calculatorTitle);

  return (
    <div className="mx-auto mt-5" style={{ width: 340 }}>
      <CalculatorInput value={calculatorInputTitle} />
      <CalculatorButtonsBuilder />
    </div>
  );
};

export default Calculator;