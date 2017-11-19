import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform: FormGroup;
  fullname: string;
  username: string;
  password: string;
  email: string;
  mobile_number: string;
  age: number;
  post: any;

  constructor(private formbuild: FormBuilder, public authService: AuthService) {

  }

  ngOnInit() {
    this.registerform = this.formbuild.group({
    fullname: [null, Validators.required],
    username: [null, Validators.required],
    password: [null, Validators.required],
    email: [null, Validators.required],
    mobile_number: [null, Validators.required],
    age: [null, Validators.required],
    });
  }

  onSubmit(post) {
    this.fullname = post.fullname;
    this.username = post.username;
    this.password = post.password;
    this.email = post.email;
    this.mobile_number = post.mobile_number;
    this.age = post.age;
    console.log(post);
    const body = {firstname: this.fullname, username: this.username, password: this.password};
    this.authService.register(body).then((result) => {
      console.log(result);
    }, (err) => {
      // Error log
    });
  }

}
