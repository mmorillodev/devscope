import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {BongoCatComponent} from './bongo-cat.component';

@NgModule({
  declarations: [
    BongoCatComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BongoCatComponent
  ],
  bootstrap: [BongoCatComponent]
})
export class BongoCatModule {}
