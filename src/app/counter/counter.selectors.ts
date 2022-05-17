import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectCounterState = createFeatureSelector<string>('counter');

export const counterValue = createSelector(
  selectCounterState,
  (counter) => counter
)