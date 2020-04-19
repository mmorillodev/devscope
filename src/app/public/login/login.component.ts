import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  shouldShrink: boolean;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(): void {

  }

  onResize(event) {
    console.log('Current window width:', event.target.innerWidth);
    console.log('Current window height:', event.target.innerHeight);
    this.shouldShrink = event.target.innerWidth <= 415;
  }
}
