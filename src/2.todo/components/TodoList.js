import styled from 'styled-components'
import TodoItem from './TodoItem' //4.

const TodoListBlock = styled.div`
    flex: 1;
    padding: 1.3rem 2rem;
    padding-bottom: 3rem;
    overflow-y: auto;
    //4. background: gray 
`

function TodoList() {
    return <TodoListBlock> {/*4.*/}
        <TodoItem text='자바 공부' done={true}/>
        <TodoItem text='리액트 공부' done={false}/>
        <TodoItem text='스프링 공부' done={true}/>
    </TodoListBlock>
}

export default TodoList