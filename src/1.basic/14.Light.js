import React from 'react' //1.

function Light({room, on, toggle}) {
    console.log({room, on})
    return (
        <button onClick={toggle}>
            {room} {on ? 'O' : 'X'}
        </button>
    )
}

//1. export default Light
export default React.memo(Light)

/*
React.memo(fn):
    props가 유지되면 fn을 호출 안 한다.
    props가 바뀌면 fn을 호출한다.
*/    
