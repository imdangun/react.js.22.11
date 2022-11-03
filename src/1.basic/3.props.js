/* 2
function Greet(props) {
    //1. return <div>Hello, {props.name}</div>
    return <div style={{color: props.color}}>
            Hello, {props.name}
        </div>
}
*/

function Greet({name, color}) {
    return <div style={{color}}>Hello, {name}</div>
}

//3.
Greet.defaultProps = {
    name : '신',
    color: 'green'
}

export default Greet