import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  // imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private _Router: Router) {}

  ngOnInit(): void {
    this._initLoginForm();
  }

  private _initLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSignIn() {
    console.log('aaa');

    if (
      this.loginForm.valid &&
      this.loginForm.value.email === 'admin' &&
      this.loginForm.value.password === 'admin'
    ) {
      this._Router.navigate(['/admin/products']);
    } else {
      console.log('Invalid Admin!');
    }
  }
}
