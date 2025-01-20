import Title from './Title.tsx';
import Description from './Description.tsx';
import Body from './Body.tsx';
import ActionButtons from './ActionButtons.tsx';

function QuestionBox() {
    return (
        <div>
            <Title>타이틀</Title>
            <Description>설명</Description>
            <Body type={'text'} />
            <ActionButtons />
        </div>
    );
}

export default QuestionBox;
