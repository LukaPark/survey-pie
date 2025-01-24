# useTransition()

- `useTransition` UI를 차단하지 않고 상태를 업데이트 할 수 있는 Reack Hook.
- 컴포넌트 최상위 수준에서 `useTransition`을 호출하여 일부 state 업데이트를 Transition으로 표시.

```js
    import { useTransition } from 'react';
    
    function TabContainer() {
        const [isPending, startTransition] = useTransition();
        // ...
    }
```
- 매개변수를 사용하지 않음.
- 정확히 두개의 항목이 포함된 배열을 반환하는데,
- `isPending` - 대기중인 Transition이 있는지 반환.
- `startTransition` - 상태 업데이트를 Transition으로 표시할 수 있게 해주는 함수.

### startTransition(action)
- `startTransition()` 함수를 사용하면 특정 상태 업데이트를 "트랜지션"으로 표시하여, React가 해당 업데이트를 낮은 우선 
순위로 처리하게 할 수 있음. 이를 통해 사용자 인터페이스의 중요한 상호작용은 즉시 반영되고, 덜 중요한 작업은 나중에 처리되어 전체적인
앱의 반응성을 향상.
```js
function TabContainer() {
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('about');
    
    function selectTab(nextTab) {
        startTransition(() => {
            setTab(nextTab);
        })
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
    )
}
// 이 예제에서는 startTransition() 을 사용했을때, isPending을 통해 state가 변경될때까지 로딩을 출력할 수 있게 됨.
```

