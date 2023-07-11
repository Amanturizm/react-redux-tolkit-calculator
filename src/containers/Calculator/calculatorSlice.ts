import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface State {
  calculatorValue: string;
}

const initialState: State = {
  calculatorValue: ''
};

export const calculatorState = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.calculatorValue += action.payload;
    }
  }
});

export const calculatorReducer = calculatorState.reducer;
export const { setValue } = calculatorState.actions;