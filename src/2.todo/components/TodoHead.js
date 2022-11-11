import styled from 'styled-components'

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
    return (
        <TodoHeadBlock>
            <h1>{new Date().toLocaleDateString()}</h1>
            <div className='day'>수요일</div>
            <div className='tasks-lef'>할일 2개</div>
        </TodoHeadBlock>
    )
}

export default TodoHead