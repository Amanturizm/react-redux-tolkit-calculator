import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SIGNS } from "../../constants";

interface State {
  calculatorTitle: string;
  calculatorValue: string;
}

const initialState: State = {
  calculatorTitle: '',
  calculatorValue: ''
};

export const calculatorState = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<{ title: string, value: string }>) => {
      const { title: currentSymbol, value: currentSymbolValue } = action.payload;

      const lastSymbol: string = state.calculatorTitle[state.calculatorTitle.length - 1];

      let isValid: boolean = true;

      SIGNS.forEach(sign => {
        if (!isValid) return;

        const isTrue: boolean =
          ((lastSymbol === currentSymbol || lastSymbol === sign || state.calculatorTitle.length === 0) && currentSymbol === sign) ||
           (lastSymbol !== currentSymbol && lastSymbol === sign && SIGNS.indexOf(currentSymbol) !== -1);

        if (isTrue) isValid = false;
      });

      state.calculatorTitle += isValid ? currentSymbol : '';
      state.calculatorValue += isValid ? currentSymbolValue || currentSymbol : '';
    },
    removeValue: (state) => {
      state.calculatorTitle = state.calculatorTitle.slice(0, -1);
      state.calculatorValue = state.calculatorValue.slice(0, -1);
    },
    clearValue: (state) => {
      state.calculatorTitle = '';
      state.calculatorValue = '';
    },
    setResult: (state) => {
      // eslint-disable-next-line no-eval
      const result: string = (!state.calculatorTitle || eval(state.calculatorValue)) + '';

      state.calculatorTitle = result;
      state.calculatorValue = result;
    },
  }
});

export const calculatorReducer = calculatorState.reducer;
export const { setValue, removeValue, clearValue, setResult } = calculatorState.actions;