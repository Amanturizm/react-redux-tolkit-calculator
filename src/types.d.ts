import { AppDispatch } from "./app/app";

export type TSetValueFunction = (dispatch: AppDispatch, value: { title: string, value: string }) => void;

export interface ISymbol {
  title: string;
  value?: string;
  width: number;
  action: TSetValueFunction;
}