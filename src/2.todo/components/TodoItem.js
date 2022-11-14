import styled, {css} from 'styled-components'
import {MdDone, MdDelete} from 'react-icons/md'
import {useTodoDispatch} from './TodoContext' //5.

const Remove = styled.div`
    display: flex;
    align-items: center;
    justity-content: center;
    color: #dee2e6;
    font-size: 1.5rem;
    cursor: pointer;
    :hover {  
        color: #ff6b6b;
    }
    display: none;
`
const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: .8rem;
    padding-bottom: .8rem;
    /* component selector: TodoItemBlock에 hover 가 되면 Remove component 를 출력한다. */
    :hover { 
        ${Remove} {
            display: initial;
        }
    }
`

const CheckCircle = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    border: .1rem solid #ced4da;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.2rem;
    cursor: pointer;
    ${props =>
        props.done &&
        css`
            border: .1rem solid #e8d9a9;
            color: #38d9a9;
        `
    }
`

const Text = styled.div`
    flex: 1;
    font-size: 1.3rem;
    color: #495057;
    ${props =>
        props.done &&
        css`
            color: #ced4da;
        `
    }
`
function TodoItem({todoId, done, title}) {
    const dispatch = useTodoDispatch() //5.
    const onToggle = () => dispatch({type: 'TOGGLE', todoId})
    const onDel = () => dispatch({type: 'DEL', todoId})

    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}> {/*5.*/}
                {done && <MdDone/>}
            </CheckCircle>
            <Text done={done}>{title}</Text>
            <Remove onClick={onDel}> {/*5.*/}
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    )
}

export default TodoItem