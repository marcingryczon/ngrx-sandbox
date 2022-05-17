import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Counter } from './counter.model';
import { counterValue } from './counter.selectors';
import { Operations } from './shared/enums';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  result$!: Observable<string>;
  operation: typeof Operations = Operations;

  constructor(private store: Store<Counter>) {
    this.result$ = this.store.pipe(select(counterValue));
  }
}
