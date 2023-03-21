import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'forkify';
  collapsed: boolean = false;
  loginSuccess: boolean = false;

  ngOnInit(): void {}
}
