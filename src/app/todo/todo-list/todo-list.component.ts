import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../todo.model';
import * as fromFiltersAction from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];
  currentFilter: fromFiltersAction.validFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.todoList = [...state.todos];
    });
  }
}
