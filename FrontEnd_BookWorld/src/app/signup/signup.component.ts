import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Form,
  Validators,
  FormsModule,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private crud: CrudService,
    private router: Router
  ) {}

  user: User = new User();
  signUpForm!: FormGroup;

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      mobile: ['', Validators.required, Validators.max(10), Validators.min(10)],
      password: [
        '',
        Validators.required,
        Validators.max(6),
        Validators.min(20),
      ],
    });
  }

  addDataonSubmit() {
    this.user = this.signUpForm.value;

    this.crud.addUser(this.user).subscribe(
      (res) => {
        console.log(res);
        alert('Registered SuccessFully');
        this.signUpForm.reset();
        this.router.navigate(['/login']);
      },
      (err) => {
        alert('Something Went Wrong!');
        console.log(err);
      }
    );
  }
}
