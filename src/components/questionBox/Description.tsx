import { ReactNode } from 'react';

export default function Description({ children }: { children: ReactNode }) {
    return <h4>{children}</h4>;
}
