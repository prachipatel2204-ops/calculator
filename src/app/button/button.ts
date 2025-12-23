import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrls: ['./button.css'],
  standalone: true,
})
export class Button {
   constructor(public service: Service) {}

  number(n: number) {
  this.service.addNumber(n);
}

op(op: string) {
  this.service.addOperator(op);
}

equal() {
  this.service.equal();
}

clear() {
  this.service.clear();
}
}
