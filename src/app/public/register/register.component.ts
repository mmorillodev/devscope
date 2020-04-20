import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerFirstForm: FormGroup;
    secondFormOptions = [];
    firstFormOptions = [];

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerFirstForm = this.formBuilder.group({
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

        this.firstFormOptions = [
            {
                disabled: false,
                expanded: true
            }
        ];

        this.secondFormOptions = [
            {
                disabled: true,
                expanded: false
            }
        ];
    }

    firstFormRegister() {
        this.firstFormOptions[0].disabled = true;
        this.firstFormOptions[0].expanded = false;
        this.secondFormOptions[0].disabled = false;
        this.secondFormOptions[0].expanded = true;
    }

    secondFormRegister() {

    }
}
