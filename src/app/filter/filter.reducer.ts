import * as fromFilterActions from './filter.actions';

const initialState: fromFilterActions.validFilters = 'all';

export function filterReducer(state = initialState, action: fromFilterActions.FilterActions): fromFilterActions.validFilters {
  switch (action.type) {
    case fromFilterActions.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}
