import { Question } from '../question/question.model';

export interface Answer {
    answerId: number;
    description: string;
    likeCount: number;
    userId: number;
    active: boolean;
    createdDate: Question;
}