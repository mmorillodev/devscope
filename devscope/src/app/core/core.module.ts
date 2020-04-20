import { NgModule } from "@angular/core";
import { QuestionModule } from './api-service/question/question.module';
import { AnswerModule } from './api-service/answer/answer.module';

@NgModule({
    imports: [
        QuestionModule,
        AnswerModule
    ],
    exports: [
        QuestionModule,
        AnswerModule
    ]
})
export class CoreModule {}