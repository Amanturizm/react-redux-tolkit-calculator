import React from 'react';

interface Props {
  value: string;
}

const CalculatorInput: React.FC<Props> = ({ value }) => (
  <h1
    style={{ height: 170, wordBreak: 'break-all' }}
    className="d-flex p-2 border border-2 border-info rounded-3 ms-2"
  >
    {value || 0}
  </h1>
);

export default CalculatorInput;