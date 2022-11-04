import {useState} from 'react'

function Input() {
    //1.
    const [text, setText] = useState('')
    const onChange = e => setText(e.target.value)
    const onReset = () => setText('')

    return (
        <div>
            {/*1.*/}
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    )
}

export default Input