import { NgModule } from '@angular/core';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import {AboutModule} from './about/about.module';

@NgModule({
    imports: [
        RegisterModule,
        LoginModule,
        AboutModule
    ],
    declarations: []
})
export class PublicModule {}
