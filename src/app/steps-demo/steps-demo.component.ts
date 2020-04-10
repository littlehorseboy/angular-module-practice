import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-steps-demo',
  templateUrl: './steps-demo.component.html',
  styleUrls: ['./steps-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StepsDemoComponent implements OnInit {
  items: MenuItem[];

  activeIndex = 1;

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Personal',
        command: () => {
          this.activeIndex = 0;
        }
      },
      {
        label: 'Seat',
        command: () => {
          this.activeIndex = 1;
        }
      },
      {
        label: 'Payment',
        command: () => {
          this.activeIndex = 2;
        }
      },
      {
        label: 'Confirmation',
        command: () => {
          this.activeIndex = 3;
        }
      }
    ];
  }
}
