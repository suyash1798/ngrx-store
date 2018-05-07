import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { Store, select } from '@ngrx/store/@ngrx/store';
import * as CounterActions from './counter.action';

export interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter = store.pipe(select('counter'));
  }

  increment() {
    this.store.dispatch(new CounterActions.Increment());
  }

  decrement() {
    this.store.dispatch(new CounterActions.Decrement());
  }

  reset() {
    this.store.dispatch(new CounterActions.Reset());
  }
}
