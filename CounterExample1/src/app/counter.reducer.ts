import { CounterActionTypes, CounterActionsUnion } from './counter.action';
import {State} from '@ngrx/store/@ngrx/store';
import {AppState} from './app.component';

export function reducer(state: number = 0, action: CounterActionsUnion): State<AppState> {
  switch (action.type) {
    case CounterActionTypes.INCREMENT: {
      return state + 1;
    }

    case CounterActionTypes.DECREMENT: {
      return state - 1;
    }

    case CounterActionTypes.RESET: {
      return 0;
    }

    default: {
      return state;
    }
  }
}
