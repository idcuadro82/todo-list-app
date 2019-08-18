import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';

import { AppState } from 'src/app/app.reducers';
import { Todo } from '../todo.model';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('editTextInput', { static: false }) editTextInput: ElementRef;
  checkCompletedControl: FormControl;
  templateTextControl: FormControl;
  editingText: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkCompletedControl = new FormControl(this.todo.completed);
    this.templateTextControl = new FormControl(this.todo.text, Validators.required);
    this.checkCompletedControl.valueChanges.subscribe(() => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  startEdition() {
    this.editingText = true;
    setTimeout(() => {
      this.editTextInput.nativeElement.select();
    }, 200);
  }

  endEdition(event) {
    this.editingText = false;
    if (event instanceof KeyboardEvent && this.templateTextControl.valid) {
      const action = new EditTodoAction(this.todo.id, this.templateTextControl.value);
      this.store.dispatch(action);
    }
  }

  deleteTodo() {
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
}
