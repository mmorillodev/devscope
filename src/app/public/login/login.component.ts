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
    this.onResize();
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(): void {
    //TODO
  }

  onResize(event?) {
    const target = event === undefined ? window : event.target;

    console.log('Current window width:', target.innerWidth);
    console.log('Current window height:', target.innerHeight);

    this.shouldShrink = target.innerWidth <= 870;
  }
}
