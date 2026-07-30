import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.nonNullable.group({
      emailId: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\[\]{};':"\\|,.<>?\/\-])[a-zA-Z].{7,}$/)]]
    })
  }
  signup() {
    console.log('asdsad')
    this.submitted = true;
  }
  get form (){
    return this.signupForm.controls;
  }
}
