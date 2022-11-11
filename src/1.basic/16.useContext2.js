import {useState, createContext, useContext} from 'react'

const LangContext = createContext()

function Title() {
    const lang = useContext(LangContext)
    const text = lang === 'en' ? 'context' : '컨텍스트'
        return <h1>{text}</h1>
}

function Button({toggleLang}) {
    const lang = useContext(LangContext)
    return <button onClick={toggleLang}>{lang}</button>
}

function Message() { // 수정
    const lang = useContext(LangContext)
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
        <LangContext.Provider value={lang}>
            <Title/>
            <Message/><hr/>
            <Button toggleLang={toggleLang}/>
        </LangContext.Provider>
    )
}

/*
context 를 사용한 component 는 context 에 의존한다.
context가 없으면 component 를 재사용할 수 없다.
따라서, context 사용을 최소화한다.
*/