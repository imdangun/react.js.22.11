import ReactDOM from 'react-dom/client'
//import App from './1.basic/1.App'
//import App from './1.basic/2.jsx'
//import App from './1.basic/3.App'
//import App from './1.basic/4.App'
//import App from './1.basic/5.App'
//import App from './1.basic/6.App'
//import App from './1.basic/6.useState2'
//import App from './1.basic/7.App'
//import App from './1.basic/8.App'
//import App from './1.basic/9.App'
//import App from './1.basic/10.App'
//import App from './1.basic/11.App'
//import App from './1.basic/12.App'
//import App from './1.basic/13.App'
//import App from './1.basic/14.App'
//import App from './1.basic/15.useReducer'
//import App from './1.basic/16.useContext'
import App from './1.basic/16.useContext2'

ReactDOM.createRoot(
    document.getElementById('root')
).render(<App/>)

/*
ReactDOM.createRoot(DOM element)
    .render(React element)

React element는 immutable object 이다.
element를 생성한 후에 element의 자식이나 속성을 변경할 수 없다.
element는 영화 프레임처럼 특정 시점의 UI를 나타낸다.
*/