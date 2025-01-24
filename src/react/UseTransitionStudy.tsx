import { useState, useTransition } from 'react';

type TabType = 'about' | 'posts';

export default function TabContainer() {
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState<TabType>('about');

    function selectTab(nextTab: TabType) {
        startTransition(() => {
            setTab(nextTab);
        });
    }

    return (
        <>
            <button onClick={() => selectTab('about')}>Transition About</button>
            <button onClick={() => selectTab('posts')}>Transition Posts</button>
            <button onClick={() => setTab('about')}>Direct About</button>
            <button onClick={() => setTab('posts')}>Direct Posts</button>
            {isPending && <p>Loading...</p>}
            {tab === 'about' && <div>About Tab</div>}
            {tab === 'posts' && <div>Posts Tab</div>}
        </>
    );
}
