


export default function Wind({ Direction }) {
    // This function shows direction 
    return <>
        <div className="dirn E">E</div>
        <div className="dirn W">W</div>
        <div className="dirn N">N</div>
        <div className="dirn S">S</div>
        <div className={`arrow_${Direction[0]}`}></div>
    </>
}