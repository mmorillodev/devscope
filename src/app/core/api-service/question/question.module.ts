import { NgModule } from '@angular/core';
import { QuestionService } from './question.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class QuestionModule {}