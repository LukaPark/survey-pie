type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function TextInput(props: Props) {
    const { value, onChange } = props;

    return (
        <input
            type={'text'}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}
