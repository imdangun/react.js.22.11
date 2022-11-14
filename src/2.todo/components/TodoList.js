import styled from 'styled-components'
import TodoItem from './TodoItem' //4.
import {useTodoState} from './TodoContext' //5.

const TodoListBlock = styled.div`
    flex: 1;
    padding: 1.3rem 2rem;
    padding-bottom: 3rem;
    overflow-y: auto;
    //4. background: gray 
`

function TodoList() {
    const todos = useTodoState()

    return <TodoListBlock> {/*4.*/}
        {todos.map(todo => ( //5.
            <TodoItem                
                todoId={todo.todoId}
                title={todo.title}
                done={todo.done}
                key={todo.todoId}/>
        ))}
        {/*5.
        <TodoItem text='자바 공부' done={true}/>
        <TodoItem text='리액트 공부' done={false}/>
        <TodoItem text='스프링 공부' done={true}/>
        */}
    </TodoListBlock>
}

export default TodoList