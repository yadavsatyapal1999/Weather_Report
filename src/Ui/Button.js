
/* This is search Button to */

export default function Button({ SearchAgain, SetCity, SetSearchAgain, Search, SetWeatherData }) {

    return <button className="btn" onClick={() => {
        SetWeatherData(null)  
        SetCity(Search);/* Set City to Display on the Scree*/
        SetSearchAgain(!SearchAgain); /* Trigger useEffect function */ 
    }} >
        Search
    </button>
}