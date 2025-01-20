import TextInput from '../inputs/TextInput.tsx';
import { ReactNode } from 'react';
import { QuestionType } from '../../types.ts';

export default function Body({ type }: { type: QuestionType }) {
    let InputComponent: ReactNode | null = null;

    if (type === QuestionType.select) {
        // InputComponent = <SelectInput />
    } else if (type === QuestionType.text) {
        InputComponent = <TextInput />;
    }

    if (!InputComponent) {
        return null;
    }

    return <div>{InputComponent}</div>;
}
