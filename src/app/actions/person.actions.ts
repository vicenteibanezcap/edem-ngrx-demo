import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Person Component] Increment');
export const decrement = createAction('[Person Component] Decrement');
export const massiveIncrement = createAction(
  '[Person Component] Massive Increment',
  props<{ totalIncrement: number }>()
);
export const reset = createAction('[Person Component] Reset');
