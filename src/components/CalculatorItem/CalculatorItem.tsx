import React from 'react';

interface Props {
  title: string;
  width: number;
  onClick: React.MouseEventHandler;
}

const CalculatorItem: React.FC<Props> = ({ title, width, onClick }) => (
  <button
    style={{ width, height: 60, letterSpacing: title === '-' ? -2.5 : 0 }}
    className="d-flex justify-content-center align-items-center fs-1 border border-2 border-info rounded-3 ms-2 mb-2"
    onClick={onClick}
  >
    {title === '-' ? '--' : title}
  </button>
);

export default CalculatorItem;