import { useNavigate } from 'react-router-dom';

type Props = {
    questionsLength: number;
    step: number;
};

export default function ActionButtons(props: Props) {
    const { questionsLength, step } = props;

    const navigate = useNavigate();

    const isLast = step === questionsLength - 1;

    return (
        <div>
            {step > 0 && (
                <button
                    onClick={() => {
                        navigate(`${step - 1}`);
                    }}
                >
                    이전
                </button>
            )}
            {isLast ? (
                <button
                    onClick={() => {
                        navigate('/done');
                    }}
                >
                    제출
                </button>
            ) : (
                <button
                    onClick={() => {
                        console.log('go to next');
                        navigate(`${step + 1}`);
                    }}
                >
                    다음
                </button>
            )}
        </div>
    );
}
