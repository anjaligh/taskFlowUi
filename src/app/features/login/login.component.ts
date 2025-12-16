import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  otpForm !: FormGroup
  showVerifyForm = false;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required]
    })
      this.otpForm = this.formBuilder.group({
        userId: ['', Validators.required],
        otp: ['', Validators.required]
      })
  }
  login() {
    console.log(this.loginForm.value);
    this.showVerifyForm = true;

  }
}
