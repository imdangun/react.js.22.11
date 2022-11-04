import {useState} from 'react'

function Inputs() {
    const [inputs, setInputs] = useState({
        userName: '',
        nickname: ''
    })

    const {userName, nickname} = inputs

    const onChange = e => {
        const {name, value} = e.target

        //setter로 state 를 변경해야 rerendering 한다.
        //inputs[name] = value 
        setInputs({
            ...inputs,
            [name]: value
        })
        
    }

    const onReset = () => setInputs({
        userName: '',
        nickname: ''
    })

    return (
        <div>         
            <input name='userName' placeholder='이름' onChange={onChange} value={userName}/>
            <input name='nickname' placeholder='별명' onChange={onChange} value={nickname}/>
         
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {userName} ({nickname})
            </div>
        </div>
    )
}

export default Inputs