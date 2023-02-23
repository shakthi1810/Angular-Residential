import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import menus from './menu';

interface Menus {
  name: string;
  icon: string;
  routerLink: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  constructor() {}

  @Output() toggle: EventEmitter<any> = new EventEmitter();

  navMenu: Menus[] = [];
  isCollapsed: boolean = false;

  ngOnInit() {
    this.navMenu = menus;
  }

  toggleSideNav(event: Event) {
    this.isCollapsed = !this.isCollapsed;
    this.toggle.emit(this.isCollapsed);
  }
}
