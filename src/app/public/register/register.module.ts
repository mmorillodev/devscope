import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        ReactiveFormsModule
    ],
    bootstrap: [RegisterComponent]
})
export class RegisterModule {}
