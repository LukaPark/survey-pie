import TextInput from '../inputs/TextInput.tsx';
import { ReactNode } from 'react';
import { QuestionType } from '../../types.ts';

type Props = {
    type: QuestionType;
    value: any;
    onChange: (value: any) => void;
};

export default function Body(props: Props) {
    const { type, value, onChange } = props;

    let InputComponent: ReactNode | null = null;

    if (type === QuestionType.select) {
        // InputComponent = <SelectInput />
    } else if (type === QuestionType.text) {
        InputComponent = <TextInput value={value} onChange={onChange} />;
    }

    if (!InputComponent) {
        return null;
    }

    return <div>{InputComponent}</div>;
}
