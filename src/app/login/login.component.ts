import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Event, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { APIServicesService } from '../apiservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private loginDetails: APIServicesService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  loginArr: any;
  loginSuccess: any;
  @Output() success: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.getLoginData();
  }

  async getLoginData() {
    (await this.loginDetails.getLoginDetails()).subscribe((res: any) => {
      this.loginArr = res;
      console.log(res);
    });
  }

  loginForm = this.fb.group({
    firstName: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    if (this.loginForm.valid) {
      const { firstName, password } = this.loginForm.value;
      this.loginSuccess = this.loginArr.some((cur: any) => {
        return cur.username === firstName && cur.password === password;
      }, this);
    }

    if (this.loginSuccess) {
      console.log('Login Success');
      this.toastr.success('Authorization Successfull', '', {
        timeOut: 2000,
        toastClass: 'toast',
        newestOnTop: true,
        positionClass: 'toast-top-right',
      });
      this.success.emit(true);
      setTimeout(() => {
        this.route.navigate(['']);
      }, 300);
    } else {
      console.log('Login Failed');
    }
  }

  get user() {
    return this.loginForm.get('firstName');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
