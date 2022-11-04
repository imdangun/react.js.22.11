function CreateUser({username, email, onChange, onCreate}) {
    return (
        <div>
            <input name='username'
                placeholder='이름'
                onChange={onChange}
                value={username}/>
            <input name='email'
                placeholder='email'
                onChange={onChange}
                value={email}/>
            <button onClick={onCreate}>추가</button>
        </div>
    )
}

export default CreateUser