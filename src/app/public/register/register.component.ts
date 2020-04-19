import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            emailGroup: this.formBuilder.group({
                email: ['', [Validators.required, Validators.email]],
                confirmEmail: ['', [Validators.required]]
            }),
            password: ['', [Validators.required]],
            birthDate: ['', [Validators.required]],
            telephone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
            cellphone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
            address: ['', [Validators.required]]
        });
    }

    register() {
        console.log('Working');
    }
}
