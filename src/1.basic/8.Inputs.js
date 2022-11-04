import {useState} from 'react'

function Inputs() {
    const [inputs, setInputs] = useState({
        username: '',
        nickname: ''
    })

    const {username, nickname} = inputs

    const onChange = e => {
        const {name, value} = e.target

        //setter로 state 를 변경해야 re-rendering 한다.
        //inputs[name] = value 
        setInputs({
            ...inputs,
            [name]: value
        })
        
    }

    const onReset = () => setInputs({
        username: '',
        nickname: ''
    })

    return (
        <div>         
            <input name='username' placeholder='이름' onChange={onChange} value={username}/>
            <input name='nickname' placeholder='별명' onChange={onChange} value={nickname}/>
         
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {username} ({nickname})
            </div>
        </div>
    )
}

export default Inputs