import {useState, useEffect} from 'react'

function Counter() {
    const [count, setCount] = useState(0);    
  
    useEffect(() => {
        console.log(`${count}: display.`)
        return () => console.log(`${count}: clear.`)
    }, [count])
  
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default Counter

/*
useEffect(callback, []):
    component가 mount될때 callback이 호출된다.
    callback에서 retrun한 cleanup function: 
        component가 unmount될때 호출된다.
useEffect(callback, [deps]):
    위를 포함한다.
    deps 가 바뀔때마 rerendering한다.
    rerendering 직전에 cleanup 을
    redendering 직후에 callback 을 실행한다.
*/    
