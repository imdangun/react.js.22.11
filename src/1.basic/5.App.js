import Wrapper from './4.Wrapper'
import Greet from './5.if'

function App() {
    /* 1.
    return (
        <Wrapper>
            <Greet name='최한석' color='red' required={true}/>
            <Greet name='한아름'/>
        </Wrapper>        
    )
    */
   return <Wrapper>
        <Greet name='양승일' required/> {/* required=true 가 기본값이다. */}
   </Wrapper>
}

export default App