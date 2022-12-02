import { createReducer, on } from '@ngrx/store';
import {
  decrement,
  increment,
  massiveIncrement,
  reset,
} from '../actions/person.actions';
import { thanosDecrement } from '../actions/thanos.actions';

export const initialState = 0;

export const personReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => {
    if (state === 0) return state;
    return state - 1;
  }),
  on(
    massiveIncrement,
    (state, totalIncrement): number => state + totalIncrement.totalIncrement
  ),
  on(thanosDecrement, (state) => Math.round(state / 2)),
  on(reset, (state) => 0)
);
