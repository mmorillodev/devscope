import { Answer } from '../answer/answer.model';

export interface Question {
    id: number;
    title: string;
    description: string;
    answer: Answer[];
    likeCount: number;
    interestAreaId: number;
    userId: number;
    active: boolean;
    createdDate: Date;
}