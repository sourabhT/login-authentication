import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  status: string;

  constructor(private formbuild: FormBuilder) { }

  ngOnInit() {
    this.registerform = this.formbuild.group({
    fullname: [null, Validators.required],
    username: [null, Validators.required],
    password: [null, Validators.required],
    status: [null, Validators.required]
    });
  }

}
