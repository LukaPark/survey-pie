import Title from './Title.tsx';
import Description from './Description.tsx';
import Body from './Body.tsx';
import ActionButtons from './ActionButtons.tsx';
import { Question } from '../../types.ts';

type Props = {
    question: Question;
    questionsLength: number;
    step: number;
    answer: any;
    setAnswer: (value: any) => void;
};

function QuestionBox(props: Props) {
    const { question, questionsLength, step, answer, setAnswer } = props;

    return (
        <div>
            <Title>{question.title}</Title>
            <Description>{question.description}</Description>
            <Body type={question.type} value={answer} onChange={setAnswer} />
            <ActionButtons questionsLength={questionsLength} step={step} />
        </div>
    );
}

export default QuestionBox;
