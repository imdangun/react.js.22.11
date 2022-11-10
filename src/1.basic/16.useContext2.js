import {useState, createContext, useContext} from 'react'

const LangContext = createContext()

function Button({toggleLang}) {
    const lang = useContext(LangContext)
    return <button onClick={toggleLang}>{lang}</button>
}

function Title({lang}) {
    <LoginContext.Consumer> {
        lang => {
            const text = lang === 'en' ? 'context' : '컨텍스트'
            return <h1>{text}</h1>
        }
    }
    </LoginContext.Consumer>
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
        <LangContext.Provider value={lang}>
            <Title/>
            <Message/><hr/>
            <Button toggleLang={toggleLang}/>
        </LangContext.Provider>
    )
}