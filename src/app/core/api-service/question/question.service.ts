import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Question } from './question.model';

@Injectable({ providedIn: 'root' })
export class QuestionService {

    private getQuestionByIdUrl: string;

    constructor(
        private http: HttpClient
    ){
        this.getQuestionByIdUrl = `${environment.heroku}/question/`;
    }

    getQuestionById(id: number) {
        console.log(this.getQuestionByIdUrl + id);
        return this.http.get<Question>(this.getQuestionByIdUrl + id);
    }
}