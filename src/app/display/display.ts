import { Component, inject } from '@angular/core'; 
import { Service } from '../service';

@Component({
  selector: 'app-display',
  templateUrl: './display.html',
  styleUrls: ['./display.css'], 
  standalone: true,             
})
export class Display {
  protected readonly common = inject(Service); 
}
