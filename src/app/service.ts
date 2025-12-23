import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service {

  // final calculated value
  result = signal<number>(0);

  // screen display value
  display = signal<string>('');

  // number button click
  addNumber(n: number) {
    this.display.set(this.display() + n);
  }

  // operator button click (+ - * /)
  addOperator(op: string) {
    this.display.set(this.display() + op);
  }

  // = button click
  equal() {
    const exp = this.display(); // example: 4+2*5

    let numbers: number[] = [];   // store numbers
    let operators: string[] = []; // store operators
    let temp = '';

    // split expression into numbers and operators
    for (let ch of exp) {
      if (ch === '+' || ch === '-' || ch === '*' || ch === '/') {
        numbers.push(Number(temp));
        operators.push(ch);
        temp = '';
      } else {
        temp += ch;
      }
    }
    numbers.push(Number(temp));

    // first solve * and /
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === '*' || operators[i] === '/') {
        const a = numbers[i];
        const b = numbers[i + 1];

        const value =
          operators[i] === '*' ? a * b : a / b;

        numbers.splice(i, 2, value);
        operators.splice(i, 1);
        i--;
      }
    }

    // then solve + and -
    let total = numbers[0];
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === '+') {
        total += numbers[i + 1];
      } else {
        total -= numbers[i + 1];
      }
    }

    // show final answer
    this.result.set(total);
    this.display.set(String(total));
  }

  // clear all
  clear() {
    this.result.set(0);
    this.display.set('');
  }
}
