import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  post: any;
  username: string;
  password: string;
  type: string = 'login';
  constructor(private formbuilderlogin: FormBuilder, public auth: AuthService) {
    this.auth.isLoggedIn();
  }
  ngOnInit() {
    this.loginForm = this.formbuilderlogin.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });
  }

  submitPost() {
    const userdata = { username: this.loginForm.controls.username.value, password: this.loginForm.controls.password.value};
    this.auth.login(userdata,this.type).then((result) => {
      var userJsonData = JSON.parse(result._body);
      localStorage.setItem('currentUserID', userJsonData[0].user_id);
      localStorage.setItem('currentUserName', userJsonData[0].username);
      localStorage.setItem('currentUserStatus', userJsonData[0].status);
      this.auth.isLoggedIn();
    }, (err) => {
      // Error log
    });

  }
}
