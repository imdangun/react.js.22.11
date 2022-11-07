import {useMemo, useState} from 'react'

function Card() {
    const [number, setNumber] = useState(0)     
    const prize = useMemo(() => {
        return calcPrize(number)
    }, [number])
    
    console.log(`${prize}원을 지급합니다.`)   

    return (
        <>
            <b>{number}</b> <br/><br></br>
            <button onClick={() => setNumber(random())}>골라요</button>
        </>
    )
}

function random() {
    return Math.floor(Math.random() * 2) + 1
}

function calcPrize(number) {
    console.log(`${number}: 상금을 계산합니다.`)
    return number * 1000
}

export default Card

/*
useMemo(callback, []):
    component가 mount 될 때 callback 으로 값을 설정한다.
    그후엔, memoization된 값을 재활용한다.
useMemo(callback, [deps]):
    component가 mount 될 때 callback 으로 값을 설정한다.
    deps값이 수정될 때마다, callback 을 호출한다.
*/