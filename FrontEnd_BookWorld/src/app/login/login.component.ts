import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private crud: CrudService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

  loginToDashboard() {
    this.crud.getUser().subscribe(
      (res) => {
        //check user is authenticated or not
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          alert('Logged In Successfully');
          this.loginForm.reset();
          this.router.navigate(['/dashboard']);
        } else {
          alert('Email or Password misMatch !!');
        }
      },
      (err) => {
        alert('Something went wrong!');
        console.log(err);
      }
    );
  }
}
