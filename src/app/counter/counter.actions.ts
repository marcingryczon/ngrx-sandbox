import { createAction, props } from "@ngrx/store";
import { Counter } from "./counter.model";

export const increment = createAction(
  '[Counter Page] Increment Counter'
);

export const decrement = createAction(
  '[Counter Page] Decrement Counter'
);

export const retrieveCounter = createAction(
  '[Counter Page] Retrieve Counter',
  props<(Counter)>()
);

