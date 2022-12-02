import { ActionReducerMap } from '@ngrx/store';
import { personReducer } from './person.reducer';

export interface IParentState {
  peopleNumber: number;
}

export const globalReducer: ActionReducerMap<IParentState> = {
  peopleNumber: personReducer,
};
