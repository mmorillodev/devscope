import { NgModule } from '@angular/core';
import { ToolbarModule } from './toolbar/toolbar.module';
import { BgHardworkModule } from './bg-hardwork/bg-hardwork.module';

@NgModule({
    imports: [
        ToolbarModule,
        BgHardworkModule
    ],
    exports: [
        ToolbarModule,
        BgHardworkModule
    ],
    declarations: []
})
export class ComponentsModule {}
