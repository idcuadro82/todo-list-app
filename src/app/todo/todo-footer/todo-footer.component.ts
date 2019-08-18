import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromFiltersAction from 'src/app/filter/filter.actions';
import * as fromTodoAction from 'src/app/todo/todo.actions';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  validFilters: fromFiltersAction.validFilters[] = ['all', 'completed', 'pending'];
  currentFilter: fromFiltersAction.validFilters;
  todosLength = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.countPending(state.todos);
    });
  }

  changeFilter(newFilter: fromFiltersAction.validFilters): void {
    const action = new fromFiltersAction.SetFilterAction(newFilter);
    this.store.dispatch(action);
  }

  getFilterTitle(filter): string {
    return filter.charAt(0).toUpperCase() + filter.slice(1);
  }

  countPending(todos: Todo[]): void {
    this.todosLength = todos.filter(todo => !todo.completed).length;
  }

  clearAllCompleted(): void {
    const action = new fromTodoAction.ClearAllCompletedTodosAction();
    this.store.dispatch(action);
  }
}
