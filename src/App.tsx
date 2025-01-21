import ProgressIndicator from './components/progressIndicator';
import QuestionBox from './components/questionBox';
import { Question } from './types.ts';
import { useState } from 'react';

function App() {
    const questions: Question[] = [
        {
            title: '질문 1',
            description: '설명 1',
            type: 'text',
            required: false,
            options: {},
        },
        {
            title: '질문 2',
            description: '설명 2',
            type: 'text',
            required: true,
            options: {},
        },
    ];

    const step = 0;

    const [answers, setAnswers] = useState<any[]>([]);

    return (
        <div className={'App'}>
            <ProgressIndicator />
            <QuestionBox
                question={questions[step]}
                questionsLength={questions.length}
                step={step}
                answer={answers[step]}
                setAnswer={(answer) => {
                    setAnswers((prev) => {
                        prev[step] = answer;
                        return [...prev];
                    });
                }}
            />
        </div>
    );
}

export default App;
