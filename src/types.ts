export type QuestionType = 'text' | 'textarea' | 'select';
export const QuestionType: { [key in QuestionType]: QuestionType } = {
    text: 'text',
    textarea: 'textarea',
    select: 'select',
};

export type Question = {
    title: string;
    description: string;
    type: QuestionType;
    options: any;
    required: boolean;
};
