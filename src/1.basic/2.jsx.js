import Greet from './1.Greet.js'

function App() {
    const name = '최한석'
    const style = { // 4. 속성명은 camelCase로 써야 한다.
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 20, // 기본 단위: px
        padding: '1rem'
    }

    return (
        <> {/* 3. frgment 는 DOM이 안 된다. */}
            <div> {/* 2. element 1개를 return 해야 한다. */}
                <Greet/>
                <Greet/>
            </div> {/*1. end tag가 있어야 한다. */}
            <div style={style}> {name} {/* 4.변수 */}
                <Greet/>
                <Greet/>
            </div>
        </>
    )
}

export default App