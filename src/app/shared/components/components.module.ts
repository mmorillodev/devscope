import { NgModule } from '@angular/core';
import { ToolbarModule } from './toolbar/toolbar.module';
import { BgHardworkModule } from './bg-hardwork/bg-hardwork.module';
import {BongoCatModule} from './bongo-cat/bongo-cat.module';
import { AboutFloatingCardComponent } from './about-floating-card/about-floating-card.component';
import {AboutFloatingCardModule} from './about-floating-card/about-floating-card.module';

@NgModule({
    imports: [
        ToolbarModule,
        BgHardworkModule,
        AboutFloatingCardModule,
        BongoCatModule
    ],
    exports: [
        ToolbarModule,
        BgHardworkModule,
        AboutFloatingCardModule,
        BongoCatModule
    ],
    declarations: []
})
export class ComponentsModule {}
