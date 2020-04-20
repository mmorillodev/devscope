import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { BgHardworkModule } from '../../shared/components/bg-hardwork/bg-hardwork.module';

@NgModule({
    declarations: [
        LoginComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BgHardworkModule,
    RouterModule
  ],
    exports: [ReactiveFormsModule, FontAwesomeModule],
    bootstrap: [LoginComponent]
})
export class LoginModule {}
