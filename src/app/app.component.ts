import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'forkify';
  collapsed: boolean = false;

  onOpen(data: any) {
    console.log(data);
    this.collapsed = data;
  }
}
