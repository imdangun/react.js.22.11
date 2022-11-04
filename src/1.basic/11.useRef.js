function User({user, onRemove}) { //2.
    return (
        <div>
            <b>{user.username}</b><span>({user.email})</span>
            {/*2.*/}
            <button onClick={() => onRemove(user.userId)}>삭제</button>
        </div>
    )
}

function Users({users, onRemove}) { //2.
    return (
        <div>
            {users.map(user => //2.
                <User user={user} key={user.userId} onRemove={onRemove}/>)}
        </div>
    )
}

export default Users