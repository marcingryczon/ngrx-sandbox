import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Operations } from '../counter.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() operation!: Operations;
  @Output() updateResult: EventEmitter<Operations> = new EventEmitter<Operations>();
  
  public get getSign() : string {
    return this.operation === Operations.INCREMENT ? '+' : '-';
  }

  update(operation: Operations): void {
    switch(operation){
      case Operations.INCREMENT: 
        this.updateResult.emit(Operations.INCREMENT);
        break;
      case Operations.DECREMENT: 
        this.updateResult.emit(Operations.DECREMENT);
        break; 
    }
  }
  

}
