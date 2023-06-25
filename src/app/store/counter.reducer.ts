import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';

const initialState = 1;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => {
    return state + action.value;
  })
);

// export function counterReducer(state = initialState) {
//   return initialState;
// }
