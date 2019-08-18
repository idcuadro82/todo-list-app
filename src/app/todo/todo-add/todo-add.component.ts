import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { AddTodoAction } from '../todo.actions';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {
  textTodoControl: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.textTodoControl = new FormControl('', Validators.required);
  }

  addTodo(): void {
    if (this.textTodoControl.valid) {
      const action = new AddTodoAction(this.textTodoControl.value);
      this.store.dispatch(action);
      this.textTodoControl.setValue('');
    }
  }
}
