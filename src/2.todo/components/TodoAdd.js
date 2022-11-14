import React, {useState} from 'react' //5.
import styled, {css} from 'styled-components'
import {MdAdd} from 'react-icons/md'
import {useTodoDispatch, useTodoId} from './TodoContext' //5.

const CircleButton = styled.button`
    background: #38d9a9;
    :hover {
        background: #63e6be;
    }
    :active {
        background: #20c997;
    }
    z-index: 5;
    cursor: pointer;
    width: 5rem;
    height: 5rem;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 3.8rem;
    position: absolute;
    left: 40%;
    bottom: 0;
    transform: tranlate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: .125s all ease-in;
    ${props =>
        props.open &&
        css`
            background: #ff6b6b;
            :hover {
                background: #ff8787;
            }
            :active {
                background: #fa5252;
            }
            transform: translate(0%, 50%) rotate(45deg);
        `
    }
`

const TodoFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`

const TodoForm = styled.form`
    background: #ff9fa;
    padding-left: 2rem;
    padding-top: 2rem;
    padding-right: 2rem;
    padding-bottom: 4.5rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-top: .1rem solid #e9ecef;
`

const Input = styled.input`
    padding: .8rem;
    border-radius: .4rem;
    border: .1rem solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 1.1rem;
    box-sizing: border-box;
`

function TodoAdd() {
    const [open, setOpen] = useState(false)
    const onToggle = () => setOpen(!open)

    //5.
    const [title, setTitle] = useState('')
    const dispatch = useTodoDispatch()
    const todoId = useTodoId()
    const onChange = e => setTitle(e.target.value)
    const onSubmit = e => {
        e.preventDefault()
        dispatch({
            type: 'ADD',
            todo: {
                todoId: todoId.current,
                title,
                done: false
            }
        })
        setTitle('')
        setOpen(false)
        todoId.current++
    }

    return (
        <>
            {open && (
                <TodoFormPositioner>
                    <TodoForm onSubmit={onSubmit}> {/*5.*/}
                        <Input autoFocus 
                            placeholder='할일을 입력 후, Enter키를 누르세요.'
                            onChange={onChange}
                            value={title}/>
                    </TodoForm>
                </TodoFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd/>
            </CircleButton>
        </>
    )
}

export default React.memo(TodoAdd)