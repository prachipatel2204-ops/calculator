import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrls: ['./button.css'],
  standalone: true,
})
export class Button {
  constructor(protected common: Service) { } // constructor injection

  // Number buttons
  one()
   { this.common.pressNumber('1'); }
  two() 
  { this.common.pressNumber('2'); }
  three()
   { this.common.pressNumber('3'); }
  four() 
  { this.common.pressNumber('4'); }
  five() 
  { this.common.pressNumber('5'); }
  six() 
  { this.common.pressNumber('6'); }
  seven()
   { this.common.pressNumber('7'); }
  eight()
   { this.common.pressNumber('8'); }
  nine() 
  { this.common.pressNumber('9'); }
  zero() 
  { this.common.pressNumber('0'); }

  // Operator buttons
  plus() { this.common.pressOperator('+'); }
  minus() { this.common.pressOperator('-'); }
  multiply() { this.common.pressOperator('*'); }
  division() { this.common.pressOperator('/'); }

  // Other actions
  equal() { this.common.calculate(); }
  clear() { this.common.clear(); }
}
