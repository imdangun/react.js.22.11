import './14.style.css'
import {useState, useCallback} from 'react'
import Light from './14.Light'

export default function Home() { 
    const [livingOn, setLivingOn] = useState(false)
    const [kitchenOn, setKitchenOn] = useState(false)
    const [bathOn, setBathOn] = useState(false)

    /*2.
    const toggleLivingOn = () => setLivingOn(!livingOn)
    const toggleKitchenOn = () => setKitchenOn(!kitchenOn)
    const toggleBathOn = () => setBathOn(!bathOn)
    */
    const toggleLivingOn = useCallback(() => setLivingOn(!livingOn), [livingOn])
    const toggleKitchenOn = useCallback(() => setKitchenOn(!kitchenOn), [kitchenOn])
    const toggleBathOn = useCallback(() => setBathOn(!bathOn), [bathOn])
    
    return (
        <div className='light'>
            <Light room='거실' on={livingOn} toggle={toggleLivingOn}/>
            <Light room='주방' on={kitchenOn} toggle={toggleKitchenOn}/>
            <Light room='욕실' on={bathOn} toggle={toggleBathOn}/>
        </div>
    )
}
/*
useCallback(fn, [deps]):
    fn 을 return 해서 memoization 한다.
    rerendering 할때 deps 변경이 없으면 fn을 재활용한다.
    deps 변경이 있으면 fn 을 새로 만들어서 return 한다.
    deps 에 의존하는 state 와 props 를 모두 넣어야, 
    fn 에서 최신 state 와 props 를 사용하는 게 보장된다.
*/   
