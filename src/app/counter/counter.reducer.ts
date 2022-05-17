import { createReducer, on } from '@ngrx/store';
import { decrement, increment, retrieveCounter } from './counter.actions';

export const initialState = '0';

export const counterReducer = createReducer(
  initialState,
  on(retrieveCounter, (state) => {
    return state;
  }),
  on(increment, (state) => {
    return (parseInt(state) + 1).toString();
  }),
  on(decrement, (state) => {
    return (parseInt(state) - 1).toString();
  })
);