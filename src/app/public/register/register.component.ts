import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerFirstForm: FormGroup;
    registerSecondForm: FormGroup;
    secondFormOptions = [];
    firstFormOptions = [];

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerFirstForm = this.formBuilder.group({
            fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            genre: ['', Validators.required],
            birthDate: ['', [Validators.required]],
            telephone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
            cellphone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
            address: ['', [Validators.required]],
            addressNumber: ['', Validators.required],
            state: ['', Validators.required],
            city: ['', Validators.required],
            cep: ['', Validators.required]
        });

        this.registerSecondForm = this.formBuilder.group({
            emailGroup: this.formBuilder.group({
                email: ['', [Validators.required, Validators.email]],
                confirmEmail: ['', [Validators.required]]
            }, { validator: this.emailMatcher }),
            passwordGroup: this.formBuilder.group({
                password: ['', [Validators.required]],
                confirmPassword: ['', [Validators.required]]
            }, { validator: this.passwordMatcher})
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

    mustMatch(formControl: AbstractControl, controlName: string, matchControlName: string): { [key: string]: boolean } | null {
        const control = formControl.get(controlName);
        const matchControl = formControl.get(matchControlName);

        if (control.pristine || matchControl.pristine) {
            return null;
        }

        if (control.value === matchControl.value) {
            return null;
        }

        return { 'match': true };
    }

    emailMatcher(formControl: AbstractControl, teste: string): { [key: string]: boolean } | null {
        const emailControl = formControl.get('email');
        const confirmEmailControl = formControl.get('confirmEmail');

        if (emailControl.pristine || confirmEmailControl.pristine) {
          return null;
        }

        if (emailControl.value === confirmEmailControl.value) {
          return null;
        }
        return { 'match': true };
    }

    passwordMatcher(formControl: AbstractControl): { [key: string]: boolean } | null {
        const passwordControl = formControl.get('password');
        const confirmPasswordControl = formControl.get('confirmPassword');

        if (passwordControl.pristine || confirmPasswordControl.pristine) {
          return null;
        }

        if (passwordControl.value === confirmPasswordControl.value) {
          return null;
        }
        return { 'match': true };
    }

    firstFormRegister() {
        this.firstFormOptions[0].disabled = true;
        this.firstFormOptions[0].expanded = false;
        this.secondFormOptions[0].disabled = false;
        this.secondFormOptions[0].expanded = true;
    }

    secondFormRegister() {
        // console.log('Dirty:', this.registerFirstForm.dirty);
        // console.log('Touched:', this.registerFirstForm.touched);
        // console.log('Valid:', this.registerFirstForm.valid);
        // console.log('Value', this.registerFirstForm.value);

        // console.log('Dirty:', this.registerSecondForm.dirty);
        // console.log('Touched:', this.registerSecondForm.touched);
        // console.log('Valid:', this.registerSecondForm.valid);
        // console.log('Value', this.registerSecondForm.value);
    }
}
