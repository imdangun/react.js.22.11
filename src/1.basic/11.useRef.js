function User({user, onRemove, onToggle}) { //2. //3.
    return (
        <div>
            <b style={{ //3.
                cursor: 'pointer',
                color: user.isActive ? 'green' : 'black'
            }} onClick={() => onToggle(user.userId)}> {/*3.*/}
                {user.username}
            </b>
            <span>({user.email})</span>
            {/*2.*/}
            <button onClick={() => onRemove(user.userId)}>삭제</button>
        </div>
    )
}

function Users({users, onRemove, onToggle}) { //2. //3.
    return (
        <div>
            {users.map(user => //2.
                <User user={user} 
                    key={user.userId} 
                    onRemove={onRemove}
                    onToggle={onToggle}/>)} {/*3.*/}
        </div>
    )
}

export default Users