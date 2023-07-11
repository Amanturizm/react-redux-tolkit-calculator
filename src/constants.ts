import { setValue } from "./containers/Calculator/calculatorSlice";
import { ISymbol } from "./types";

const width = 60;
const margin = 8;

export const SYMBOLS: ISymbol[] = [
  { value: '7', width, action: (dispatch, value) => dispatch(setValue(value)) },
  { value: '8', width, action: (dispatch, value) => dispatch(setValue(value)) },
  { value: '9', width, action: (dispatch, value) => dispatch(setValue(value)) },
  { value: '/', width, action: (dispatch, value) => dispatch(setValue(value)) },
  { value: 'x', width, action: (dispatch, value) => dispatch(setValue(value)) },
  { value: '4', width, action: (dispatch, value) => dispatch(setValue(value)) },
  { value: '5', width, action: (dispatch, value) => dispatch(setValue(value)) },
  { value: '6', width, action: (dispatch, value) => dispatch(setValue(value)) },
  { value: '-', width, action: (dispatch, value) => dispatch(setValue(value)) },
  { value: '+', width, action: (dispatch, value) => dispatch(setValue(value)) },
  { value: '1', width, action: (dispatch, value) => dispatch(setValue(value)) },
  { value: '2', width, action: (dispatch, value) => dispatch(setValue(value)) },
  { value: '3', width, action: (dispatch, value) => dispatch(setValue(value)) },
  { value: '=', width: width * 2 + margin, action: (dispatch, value) => dispatch(setValue(value)) },
  { value: '.', width, action: (dispatch, value) => dispatch(setValue(value)) },
  { value: '0', width, action: (dispatch, value) => dispatch(setValue(value)) },
  { value: '<', width, action: (dispatch, value) => dispatch(setValue(value)) },
  { value: 'C', width: width * 2 + margin, action: (dispatch, value) => dispatch(setValue(value)) },
];