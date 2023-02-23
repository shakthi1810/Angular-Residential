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

  ngOnInit(): void {
    let loginValid = sessionStorage.getItem('loginValid');
    this.loginSuccess = loginValid == 'true' ? true : false;
  }

  onOpen(data: any) {
    console.log(data);
    this.collapsed = data;
  }

  loginValidation(e: any) {
    this.loginSuccess = e;
    sessionStorage.setItem('loginValid', 'true');
  }
}
