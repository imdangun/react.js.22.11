import {useState} from 'react'

function Username() {
    const [username, setUsername] = useState('')    

    return (
        <label>이&nbsp;름: 
            <input type='text'
                name='username'
                value={username}
                onChange={({target: {value}}) => setUsername(value)}/>
        </label>
    )
}

function Email() {   
    const [email, setEmail] = useState('')

    return (
        <label>이메일: 
            <input type='email'
            name='email'
            value={email}
            onChange={({target: {value}}) => setEmail(value)}/>
        </label> 
    )
}

function App() {
    return (
        <>
            <Username/><br/>
            <Email/>
        </>
    ) 
        
}

export default App

/*
React Dev Tools 의 Highlight 기능으로,
Username, Email component별로 rendering 되는 걸 확인한다.
*/