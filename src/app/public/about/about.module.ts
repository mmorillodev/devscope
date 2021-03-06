import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import {BongoCatModule} from '../../shared/components/bongo-cat/bongo-cat.module';
import {AboutFloatingCardModule} from '../../shared/components/about-floating-card/about-floating-card.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [BongoCatModule, AboutFloatingCardModule, RouterModule],
  exports: [],
  bootstrap: [AboutComponent]
})
export class AboutModule {}
