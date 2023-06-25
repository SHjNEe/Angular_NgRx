import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.actions';

import { Action } from '@ngrx/store';
// import { CounterActions, INCREMENT, IcrementAction } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => {
    return state + action.value;
  }),
  on(decrement, (state, action) => {
    return state - action.value;
  })
);

// const initialState = 1;

// export function counterReducer(
//   state = initialState,
//   action: CounterActions | Action
// ) {
//   if (action.type === INCREMENT) {
//     return state + (action as IcrementAction).value;
//   }
//   return state;
// }
