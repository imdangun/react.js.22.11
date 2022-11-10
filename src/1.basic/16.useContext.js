import {useState} from 'react'

function Button({lang, toggleLang}) {
    return <button onClick={toggleLang}>{lang}</button>
}

function Title({lang}) {
    const text = lang === 'en' ? 'context' : '컨텍스트'
    return <h1>{text}</h1>
}

function Message({lang}) {
    let msg
    if(lang === 'en') msg = 'context is good.'
    else msg = '컨텍스트는 좋습니다.'
    return <p>{msg}</p>
}

export default function App() {
    const [lang, setLang] = useState('en')

    const toggleLang = () => {
        if(lang === 'en') setLang('ko')
        else setLang('en')
    }

    return (
        <>
            <Title lang={lang}/>
            <Message lang={lang}/><hr/>
            <Button lang={lang} toggleLang={toggleLang}/>
        </>
    )
}