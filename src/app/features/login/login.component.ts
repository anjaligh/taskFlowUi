import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  submitted= false;
  otpSubmitted = false;
  constructor(private formBuilder: FormBuilder, private cdr:ChangeDetectorRef) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.nonNullable.group({
      emailId: ['', [Validators.required, Validators.email]]
    })
    this.otpForm = this.formBuilder.nonNullable.group({
      emailId: ['', Validators.required],
      otp: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]]
    })
  }
  getOtp() {
    console.log(this.loginForm.value);
    this.submitted = true;
    if(this.loginForm.invalid){
      return
    }
    this.showVerifyForm = true;
    this.cdr.detectChanges();
  }
  
  get email(){
    return this.loginForm.controls['emailId']
  }
  get otp(){
    return this.otpForm.controls['otp']
  }
  login(){
    this.otpSubmitted = true;
  }
  resendOtp(){

  }
  
}
