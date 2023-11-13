import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items!:MenuItem[]

  ngOnInit() {
    this.items = 
    [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink:'home'
      },
      {
        label: 'User',
        icon: 'pi pi-fw pi-user',
        routerLink:'user'
      },
      {
        label: 'Estados[BRA]',
        icon: 'pi pi-fw pi-map',
        routerLink:'states'
      }
    ];
  }
}
