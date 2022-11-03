function Greet({name, color, required}) {
    return (
        <div style={{color}}>
            {required ? <b>*</b> : null} {/* null, false, undefined 는 출력 안한다. */}
            Hello, {name}
        </div>
    )
}

export default Greet