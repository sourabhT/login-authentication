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
  firstname: string;
  lastname: string;
  constructor(private formbuildert: FormBuilder) {
  }
  ngOnInit() {
    this.loginForm = this.formbuildert.group({
    firstname: [null, Validators.required],
    lastname: [null, Validators.required]
  });
  }

  addPost(post) {
    this.firstname = post.firstname;
    this.lastname = post.lastname;
  }
}
