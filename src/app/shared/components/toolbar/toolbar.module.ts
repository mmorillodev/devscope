import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../../core/core.module';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        FontAwesomeModule,
        RouterModule,
        CoreModule
    ],
    exports: [
        ToolbarComponent,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        FontAwesomeModule
    ]
})
export class ToolbarModule { }
