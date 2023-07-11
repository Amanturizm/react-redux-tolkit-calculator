import { AppDispatch } from "./app/app";

export interface ISymbol {
  value: string;
  width: number;
  action: (dispatch: AppDispatch, value: string) => void;
}