import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Counter } from './counter.model';
import { Operations } from './shared/enums';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnDestroy {
  result!: number;
  unsubscribe$: Subject<void> = new Subject();
  operation: typeof Operations = Operations;

  constructor(private store: Store<Counter>) {
    this.store
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: Counter) => (this.result = data.counter));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
