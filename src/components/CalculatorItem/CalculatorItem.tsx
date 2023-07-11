import React from 'react';

interface Props {
  value: string;
  width: number;
  onClick: React.MouseEventHandler;
}

const CalculatorItem: React.FC<Props> = ({ value, width, onClick }) => (
  <button
    style={{ width, height: 60 }}
    className="d-flex justify-content-center align-items-center fs-1 border border-2 border-info rounded-3 ms-2 mb-2"
    onClick={onClick}
  >
    {value}
  </button>
);

export default CalculatorItem;