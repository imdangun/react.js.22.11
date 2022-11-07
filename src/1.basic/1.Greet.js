//1.
import React from 'react'

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