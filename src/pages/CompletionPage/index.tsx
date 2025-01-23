import styled from 'styled-components';

const a = 123;

export default function CompletionPage() {
    return (
        <CompletionPageWrapper className={''}>
            CompletionPage
        </CompletionPageWrapper>
    );
}

const CompletionPageWrapper = styled.div`
    background: aqua;
    padding: ${a === 123 ? '4em' : '1em'};
`;
