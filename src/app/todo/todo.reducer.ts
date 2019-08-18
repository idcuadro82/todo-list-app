import * as FromTodoActions from './todo.actions';
import { Todo } from './todo.model';

const initialState: Todo[] = [];

export function todoReducer(state: Todo[] = initialState, action: FromTodoActions.TodoActions): Todo[] {
  switch (action.type) {
    case FromTodoActions.ADD_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];
    case FromTodoActions.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completed: !todoEdit.completed
          };
        } else {
          return todoEdit;
        }
      });
    case FromTodoActions.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completed: !todoEdit.completed
          };
        } else {
          return todoEdit;
        }
      });
    case FromTodoActions.EDIT_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id && action.text) {
          return {
            ...todoEdit,
            text: action.text
          };
        } else {
          return todoEdit;
        }
      });
    case FromTodoActions.DELETE_TODO:
      return state.filter(todoEdit => todoEdit.id !== action.id);
    case FromTodoActions.TOGGLE_ALL_TODOS:
      return state.map(todoEdit => {
        return {
          ...todoEdit,
          completed: action.completed
        };
      });
    case FromTodoActions.CLEAR_ALL_COMPLETED_TODOS:
      return state.filter(todoEdit => !todoEdit.completed);
    default:
      return state;
  }
}
