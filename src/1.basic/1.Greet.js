//1.
import React from 'react'

// component 이름은 대문자로 시작해야 render 된다.
function Greet() {    
    //1. return <div>Hello.</div>
    const element = React.createElement(
        'div',
        {},
        'Hello'
    )
    return element
}

export default Greet