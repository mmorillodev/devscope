import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatExpansionModule
    ],
    exports: [
        ReactiveFormsModule,
        MatExpansionModule
    ],
    bootstrap: [RegisterComponent]
})
export class RegisterModule {}
