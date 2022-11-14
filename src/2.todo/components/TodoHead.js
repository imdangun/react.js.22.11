import styled from 'styled-components'
import {useTodoState} from './TodoContext' //5.

const TodoHeadBlock = styled.div`
    padding-top: 3rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: .1rem solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 2rem;
        color: #343a40;
    }
    .day {
        margin-top: .25rem;
        color: #868e96;
        font-size: 1.3rem;
    }
    .tasks-left {
        color: #20c997;
        font-size: 1.1rem;
        margin-top: 2.2rem;
        font-weight: bold;
    }
`

function TodoHead() {
    const todos = useTodoState() //5.
    const undoneTodos = todos.filter(todo => !todo.done) //5.

    const today = new Date() //5.
    const date = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })    
    const day = today.toLocaleDateString('ko-KR', {
        weekday: 'long'
    })

    return (
        <TodoHeadBlock>
            <h1>{date}</h1> {/*5.*/}
            <div className='day'>{day}</div> {/*5.*/}
            <div className='tasks-lef'>할일 {undoneTodos.length}개</div>
        </TodoHeadBlock>
    )
}

export default TodoHead