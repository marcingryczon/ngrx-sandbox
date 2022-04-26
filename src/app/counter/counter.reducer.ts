import { createReducer, on } from '@ngrx/store';
import { decrement, increment, retrieveCounter } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(retrieveCounter, (state) => {
    return state;
  }),
  on(increment, (state) => {
    return state + 1;
  }),
  on(decrement, (state) => {
    return state - 1;
  })
);