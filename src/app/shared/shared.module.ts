import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { BongoCatComponent } from './components/bongo-cat/bongo-cat.component';

@NgModule({
    imports: [
        ComponentsModule
    ],
    exports: [
        ComponentsModule
    ],
    declarations: []
})
export class SharedModule {}
