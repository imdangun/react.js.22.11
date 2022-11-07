import {useState, useEffect} from 'react'

function Counter() {
    const [count, setCount] = useState(0);    
  
    useEffect(() => {
        console.log(`${count} mount.`)
        return () => console.log(`${count} unmount.`)
    }, [])
  
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
    component가 최초 mount될때 callback이 호출된다.
    callback의 retrun cleanup function: component가 최후 unmount될때 호출된다.
useEffect(callback, [deps]):
    deps가 변경될 때마다 unmount에 따른 cleanup 실행하고,
    mount에 따른 callback 실행한다.
*/    
