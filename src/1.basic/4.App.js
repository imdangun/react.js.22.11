import Wrapper from './4.Wrapper'
import Greet from './3.props'

function App() {
    return (
        <Wrapper>
            <Greet/>
            <Greet name='양승일' color='purple'/>
        </Wrapper>
    )
}

export default App