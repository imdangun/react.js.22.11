import {useRef, useState} from 'react'
import Users from './11.useRef'
import CreateUser from './11.CreateUser'

function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    })

    const {username, email} = inputs
    const onChange = e => {
        const {name, value} = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    
    const [users, setUsers] = useState([])
    const userId = useRef(1) // 1 current 속성값이 된다.
    const onCreate = () => {
        const user = {
            userId: userId.current,
            username,
            email
        }
        /*1.
        setUsers([
            ...users,
            user
        ])
        */
        setUsers(users.concat(user))

        setInputs({
            username: '',
            email: ''
        })

        userId.current++
    }
    //2.
    const onRemove = userId => setUsers(users.filter(user => user.userId !== userId))

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}/><hr/>
            <Users users={users} onRemove={onRemove}/> {/*2.*/}
        </>
    )
}

export default App