function Wrapper({children}) {
    const style = {
        border: '.1rem solid black',
        padding: '1rem'
    }

    //1. return <div style={style}></div>
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper