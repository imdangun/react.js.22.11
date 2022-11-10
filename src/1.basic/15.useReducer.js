import {useReducer} from 'react'

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({
                type: 'INCREMENT',
                step: 1
            })}> + </button> &nbsp;
            <button onClick={() => dispatch({
                type: 'DECREMENT',
                step: 1
            })}> - </button>
        </>
    )
}

const initialState = {count: 0}

function reducer(state, action) {
    let val;    
    switch(action.type) {
        case 'INCREMENT':
            val = {count: state.count + action.step}; break
        case 'DECREMENT':
            val = {count: state.count - action.step}; break
        default:
            throw new Error(`${action.type}: wrong action type.`)
    }
    return val
}

export default function App() {
    return <Counter/>
}

/*
const [state, dispatch] = useReducer(reducer, initialArg, init)

reducer = (state, action) => newState
*/