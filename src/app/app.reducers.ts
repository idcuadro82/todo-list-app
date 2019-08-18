import { ActionReducerMap } from '@ngrx/store';

import { todoReducer } from './todo/todo.reducer';
import { filterReducer } from './filter/filter.reducer';
import { validFilters } from './filter/filter.actions';
import { Todo } from './todo/todo.model';

export interface AppState {
  todos: Todo[];
  filter: validFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
};
