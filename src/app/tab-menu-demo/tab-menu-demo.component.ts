import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tab-menu-demo',
  templateUrl: './tab-menu-demo.component.html',
  styleUrls: ['./tab-menu-demo.component.scss']
})
export class TabMenuDemoComponent implements OnInit {
  items1: MenuItem[];

  items2: MenuItem[];

  items3: MenuItem[];

  activeItem: MenuItem;

  ngOnInit() {
    this.items1 = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

    this.items2 = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

    this.items3 = [
      { label: 'Info', icon: 'pi pi-fw pi-chart-bar', routerLink: 'info' },
      { label: 'Message', icon: 'pi pi-fw pi-calendar', routerLink: 'message' }
    ];

    this.activeItem = this.items2[0];
  }

  closeItem(event, index) {
    this.items2 = this.items2.filter((item, i) => i !== index);
    event.preventDefault();
  }
}
