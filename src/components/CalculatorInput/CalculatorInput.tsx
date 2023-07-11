import React from 'react';

interface Props {
  value: string;
}

const CalculatorInput: React.FC<Props> = ({ value }) => (
  <h1
    style={{ width: 240, height: 70 }}
    className="d-flex align-items-center justify-content-center pt-3 border border-2 border-info rounded-3"
  >
    {value}
  </h1>
);

export default CalculatorInput;