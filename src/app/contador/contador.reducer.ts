import { Action, createReducer, on } from '@ngrx/store';
import {
  decrementar,
  dividir,
  incrementar,
  multiplicar,
  reset,
} from './contador.actions';

export const initialState = 20;

const _contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(reset, () => initialState),
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero)
);

export function contadorReducer(state: number | undefined, action: Action) {
  return _contadorReducer(state, action);
}
