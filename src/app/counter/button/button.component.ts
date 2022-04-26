import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../counter.actions';
import { Operations } from '../shared/enums';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() operation!: Operations;
  
  public get getSign() : string {
    return this.operation === Operations.INCREMENT ? '+' : '-';
  }
  
  constructor(private store: Store<number>){}

  update(operation: Operations): void {
    switch(operation){
      case Operations.INCREMENT:
        this.store.dispatch(increment())
        break;
        case Operations.DECREMENT: 
        this.store.dispatch(decrement())
        break; 
    }
  }
  

}
