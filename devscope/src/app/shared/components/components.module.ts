import { NgModule } from '@angular/core';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
    imports: [
        ToolbarModule
    ],
    exports: [
        ToolbarModule
    ]
})
export class ComponentsModule {}
