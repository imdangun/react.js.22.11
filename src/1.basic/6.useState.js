import {useState} from 'react'

function Counter() {
    /*2.
    //1.
    const onIncrease = () => console.log('+')
    const onDecrease = () => console.log('-')
    */
    // 최초 rendering때, useState()가 실행된다.
    // useState()가 배열을 반환한다.
    // 배열의 1번째 원소(state)가 number에,
    // 2번째 원소(setState)가 setNumber에 할당된다.
    // setState()는 component rerendering을 queue에 등록한다.
    const [number, setNumber] = useState(0);
   
    /*3.
    const onIncrease = () => setNumber(number + 1)
    const onDecrease = () => setNumber(number - 1)
    */
    const onIncrease = () => setNumber(number => number + 1)
    const onDecrease = () => setNumber(number => number -1)

    return (
        <>
            {/*2. <h1>0</h1> */}
            <h1>{number}</h1>
            {/*1.*/}
            <button onClick={onIncrease}>+</button>&nbsp;&nbsp;
            <button onClick={onDecrease}>-</button>
        </>
    )
}

export default Counter