import { clearValue, removeValue, setResult, setValue } from "./containers/Calculator/calculatorSlice";
import { ISymbol, TSetValueFunction } from "./types";

const width: number = 60;
const margin: number = 8;

const SET_VALUE: TSetValueFunction = (dispatch, value) => dispatch(setValue(value));
const action: TSetValueFunction = SET_VALUE;

export const SYMBOLS: ISymbol[] = [
  { title: '7', width, action },
  { title: '8', width, action },
  { title: '9', width, action },
  { title: '÷', value: '/', width, action },
  { title: '×', value: '*', width, action },
  { title: '4', width, action },
  { title: '5', width, action },
  { title: '6', width, action },
  { title: '-', width, action },
  { title: '+', width, action },
  { title: '1', width, action },
  { title: '2', width, action },
  { title: '3', width, action },
  { title: '=', width: width * 2 + margin, action: (dispatch, value) => dispatch(setResult()) },
  { title: '.', width, action },
  { title: '0', width, action },
  { title: '<', width, action: (dispatch) => dispatch(removeValue()) },
  { title: 'C', width: width * 2 + margin, action: (dispatch) => dispatch(clearValue()) },
];

export const SIGNS: string[] = ['÷', '×', '-', '+', '.'];