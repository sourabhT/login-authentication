import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'

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
      console.log(result);
    }, (err) => {
      // Error log
    });

  }
}
