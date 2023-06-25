import { Component } from '@angular/core';

import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';
import { increment } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  // constructor(private counterService: CounterService) {}
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment({ value: 2 }));
    // this.counterService.increment();
  }

  decrement() {
    // this.counterService.decrement();
  }
}
