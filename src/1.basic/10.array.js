function User({user}) {
    return (
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    )
}

function Users() {
    const users = [
        {
            userId: 1,
            username: '최한석',
            email: 'choi@gmail.com'
        },
        {
            userId: 2,
            username: '한아름',
            email: 'han@gmail.com'
        },
        {
            userId: 3,
            username: '양승일',
            email: 'yang@gmail.com'
            
        }
    ]

    return (
        <div>

            {/*1.
            [ /* list의 child는 key 속성을 가져야 한다. 
                <User user={users[0]} key={users[0].userId}/>,
                <User user={users[1]} key={users[1].userId}/>,
                <User user={users[2]} key={users[2].userId}/>,
            ]
            */}                  
            {/*2. users.map(user => <User user={user} key={user.userId}/>) */}
            {users.map((user, i) => <User user={user} key={i}/>)}
        </div>
    )
}

export default Users