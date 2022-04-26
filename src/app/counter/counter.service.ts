import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum Operations {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  result$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  resultHandler$: Observable<number> = this.result$.asObservable();

  updateResult(value: number): void {
    this.result$.next(value);
  }

  recalculate(operation:Operations): void {
    switch(operation){
      case Operations.INCREMENT: 
        this.increase();
        break;
      case Operations.DECREMENT: 
        this.decrease();
        break; 
    }
  }

  increase(): void {
    this.updateResult(this.result$.getValue() + 1);
  }

  decrease(): void {
    this.updateResult(this.result$.getValue() - 1);
  }
}
