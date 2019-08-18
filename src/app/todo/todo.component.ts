import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ToggleAllTodosAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  checkToggleAll: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkToggleAll = new FormControl();
    this.checkToggleAll.valueChanges.subscribe(value => {
      const action = new ToggleAllTodosAction(value);
      this.store.dispatch(action);
    });
  }
}
