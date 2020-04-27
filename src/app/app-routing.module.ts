import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from 'src/app/public/register/register.component';
import { LoginComponent } from 'src/app/public/login/login.component';
import {AboutComponent} from './public/about/about.component';

const routes: Routes = [{
  path: 'register',
  component: RegisterComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'about',
  component: AboutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
