import {useState, useRef} from 'react'

function Inputs() {
    const [inputs, setInputs] = useState({
        username: '',
        nickname: ''
    })
    // ref 속성을 정의한 DOM을 가르키는 MutableObject 을 리턴한다.
    // {current: input}
    // 하나의 ref를 N개의 DOM에 중복 적용하면, 첫번째 DOM을 가르킨다.
    const ref = useRef() 

    const {username, nickname} = inputs

    const onChange = e => {
        const {name, value} = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onReset = () => {
        setInputs({
            username: '',
            nickname: ''
        })             
        ref.current.focus()
    }

    return (
        <div>
            <input name='username'
                placeholder='이름'
                onChange={onChange}
                value={username}
                ref={ref}/>
            <input name='nickname'
                placeholder='별명'
                onChange={onChange}
                value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {username} ({nickname})
            </div>
        </div>
    )
}

export default Inputs