import {useReducer, createContext, useContext, useRef} from 'react'

function todoReducer(state, action) {
    switch(action.type) {
        case 'ADD':
            return state.concat(action.todo)
        case 'TOGGLE':
            return state.map(todo => 
                todo.todoId === action.todoId ? {
                    ...todo,
                    done: !todo.done
                } : todo)
        case 'DEL':
            return state.filter(todo =>
                todo.todoId !== action.todoId)
        default:
            throw new Error(`${action.type}: Unhandled action.`)
    }
}

const TodoStateContext = createContext()
const TodoDispatchContext = createContext()
const TodoIdContext = createContext()

export function TodoProvider({children}) {
    const [state, dispatch] = useReducer(todoReducer, [])
    const todoId = useRef(1)
    
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoIdContext.Provider value={todoId}>
                    {children}
                </TodoIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export function useTodoState() {
    const context = useContext(TodoStateContext)
    if(!context) throw new Error('Can not find TodoProvider.')
    return context
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext)
    if(!context) throw new Error('Can not find TodoProvider.')
    return context
}

export function useTodoId() {
    const context = useContext(TodoIdContext)
    if(!context) throw new Error('Can not find TodoProvider.')
    return context
}