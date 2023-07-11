import React from 'react';
import { useDispatch } from "react-redux";
import { SYMBOLS } from "../../constants";
import CalculatorItem from "../CalculatorItem/CalculatorItem";

const CalculatorButtonsBuilder = () => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-wrap">
      {
        SYMBOLS.map((item) => (
          <CalculatorItem
            title={item.title}
            width={item.width}
            onClick={() =>
              item.action(
                dispatch,
                { title: item.title, value: item.value || '' }
              )}
            key={`calculator-item-${item.title}`}
          />
        ))
      }
    </div>
  );
};

export default CalculatorButtonsBuilder;
