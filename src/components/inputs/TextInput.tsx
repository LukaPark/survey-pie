import styled from 'styled-components';

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function TextInput(props: Props) {
    const { value, onChange } = props;

    return (
        <Input
            type={'text'}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

const Input = styled.input`
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 5px;

    font-size: 18px;
    line-height: 21px;
    padding: 12px 18px;
`;
