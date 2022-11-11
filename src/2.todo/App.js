import {createGlobalStyle} from 'styled-components'
import TodoTemplate from './components/TodoTemplate' //1.
import TodoHead from './components/TodoHead' //2.
import TodoList from './components/TodoList' //3.

const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef;
    }
`

function App() {
    return (
        <>
            <GlobalStyle/>
            <TodoTemplate>
                <TodoHead/> {/*2.*/}
                <TodoList/> {/*3.*/}
            </TodoTemplate> {/*1.*/}
        </>
    )
}

export default App