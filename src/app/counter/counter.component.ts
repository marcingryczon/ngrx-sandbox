import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CounterService, Operations } from './counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnDestroy {
  result!: number;
  unsubscribe$: Subject<void> = new Subject();
  operation: typeof Operations = Operations;

  constructor(private counterService: CounterService) {
    this.counterService.resultHandler$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => (this.result = data));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  updateResult(value:any): void {
    this.counterService.recalculate(value);
  }
}
