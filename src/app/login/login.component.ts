import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private formbuildert: FormBuilder) {
  }
  ngOnInit() {
    this.loginForm = this.formbuildert.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });
  }

  submitPost(post) {
    console.log(post);
    this.username = post.username;
    this.password = post.password;
    console.log(this.username);
  }

  addPost(post) {
    this.username = post.firstname;
    this.password = post.lastname;
  }
}
