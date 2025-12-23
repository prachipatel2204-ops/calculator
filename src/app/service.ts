import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private expression: string = '';

  // Add number or operator
  pressNumber(num: string) {
    this.expression += num;
  }

  pressOperator(op: string) {
    this.expression += op;
  }

  add() {
    this.expression += '+';
  }

  subtract() {
    this.expression += '-';
  }

  multiply() {
    this.expression += '*';
  }

  divide() {
    this.expression += '/';
  }

  // Calculate two-number expression
  calculate() {
    const match = this.expression.match(/(-?\d+\.?\d*)([+\-*/])(-?\d+\.?\d*)/);

    if (!match) {
      this.expression = 'Error';
      return;
    }

    const a = parseFloat(match[1]);
    const operator = match[2];
    const b = parseFloat(match[3]);
    let result = 0;

    if (operator === '+') result = a + b;
    else if (operator === '-') result = a - b;
    else if (operator === '*') result = a * b;
    else if (operator === '/') result = b !== 0 ? a / b : NaN;

    this.expression = isNaN(result) ? 'Error' : result.toString();
  }

  clear() {
    this.expression = '';
  }

  getResult() {
    return this.expression;
  }
}
