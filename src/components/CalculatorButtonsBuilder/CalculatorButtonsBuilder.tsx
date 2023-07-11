import React from 'react';
import CalculatorItem from "../CalculatorItem/CalculatorItem";
import {SYMBOLS} from "../../constants";
import {useDispatch} from "react-redux";

const CalculatorButtonsBuilder = () => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-wrap">
      {
        SYMBOLS.map((item) => (
          <CalculatorItem
            value={item.value}
            width={item.width}
            onClick={() => item.action(dispatch, item.value)}
            key={`calculator-item-${item.value}`}
          />
        ))
      }
    </div>
  );
};

export default CalculatorButtonsBuilder;
