import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(
        private formBuilder: FormBuilder,
        public registerForm: FormGroup) {}

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            emailGroup: this.formBuilder.group({
                email: ['', [Validators.required, Validators.email]],
                confirmEmail: ['', [Validators.required]]
            }),
            password: ['', [Validators.required]],
            birthDate: ['', [Validators.required]],
            tellphone: ['', [Validators.required]],
            cellphone: ['', [Validators.required]],
            address: ['', [Validators.required]]
        });
    }

    register() {
        console.log('Working');
    }
}
