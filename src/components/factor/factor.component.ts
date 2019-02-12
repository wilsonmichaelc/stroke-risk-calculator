import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'factor',
  templateUrl: 'factor.component.html'
})
export class FactorComponent {

  @Input() factor: any;
  @Output() factorChanged = new EventEmitter();

  selectedValue: number = 0;

  constructor() {}

  selectOption(key, value): void {
    this.selectedValue = value;
    this.factorChanged.emit({key: key, value: value});
  }
  
}
