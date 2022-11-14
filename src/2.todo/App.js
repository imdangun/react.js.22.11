import {createGlobalStyle} from 'styled-components'
import TodoTemplate from './components/TodoTemplate' //1.
import TodoHead from './components/TodoHead' //2.
import TodoList from './components/TodoList' //3.
import TodoAdd from './components/TodoAdd' //4.
import {TodoProvider} from './components/TodoContext' //5.

const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef;
    }
`

function App() {
    return (
        <>
            <TodoProvider>     {/*5.*/}
                <GlobalStyle/>
                <TodoTemplate>
                    <TodoHead/> {/*2.*/}
                    <TodoList/> {/*3.*/}
                    <TodoAdd/>  {/*4.*/}
                </TodoTemplate> {/*1.*/}
            </TodoProvider>
        </>
    )
}

export default App