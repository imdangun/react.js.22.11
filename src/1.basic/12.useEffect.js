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
useEffect(fn, []):
    component가 mount될때 fn이 호출된다.
    callback에서 retrun한 cleanup function: 
        component가 unmount 직전에 호출된다.
useEffect(fn, [deps]):
    위를 포함한다. deps 변경되어 rerendering 한다.
    rerendering 직전에 cleanup fn을
    redendering 직후에 fn 을 실행한다.
*/    
