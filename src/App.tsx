import ProgressIndicator from './components/progressIndicator';
import QuestionBox from './components/questionBox';
// import { Question } from './types.ts';

function App() {
    // const questions: Question[] = [
    //     {
    //         title: '질문 1',
    //         description: '설명 1',
    //         type: 'text',
    //     },
    //     {
    //         title: '질문 2',
    //         description: '설명 2',
    //         type: 'text',
    //     },
    //     {
    //         title: '질문 3',
    //         description: '설명 3',
    //         type: 'text',
    //     },
    // ];

    return (
        <div className={'App'}>
            <ProgressIndicator />
            <QuestionBox />
        </div>
    );
}

export default App;
