
import { useEffect, useState } from "react";
import axios from "axios";
import Data from "./Data";
import "./Data.css";
import Input from "./Input";

const securityKey = "3TtZqQjC0VSCW42KWi9dRFiBBbAG9cyx";

export default function Data_API() {
    const [Search, SetSearch] = useState("Gurgaon"); // Input to search weather for a particular location
    const [SearchAgain, SetSearchAgain] = useState(true);// To ensure that search button was clicked 
    const [WeatherData, SetWeatherData] = useState()// It stores all the fetched data 
    const [City, SetCity] = useState("Gurgaon")// This State display city on the screen
    const geocode = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${securityKey}&q=${Search}&offset=0`

    useEffect(() => {
        GetLocation() // Invoke Api Call When Search Again change
    }, [SearchAgain]);

    async function GetLocation() {
        try {
            let location = await axios.get(geocode); // First It will fetch for location key as it is required
            let CityKey = await location.data[0].Key;    // It capture location key which is required for fetching weather

            let rep = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${CityKey}?apikey=${securityKey}&langauge=en-us&details=true`);
            let data = await rep.data; // This store all the Weather Data
            SetWeatherData(data[0]) // Saving Weather Data in the State

        }
        catch (err) {
            console.log("Err in fetching Data =" + err) // it reflects err in fecthing data
        }
    }

    return <div className="Outer">
        <Input SetSearch={SetSearch} // This element takes input to search city
            SetSearchAgain={SetSearchAgain}
            SetCity={SetCity}
            SearchAgain={SearchAgain}
            Search={Search}
            SetWeatherData={SetWeatherData}
        />
        <div className="City">{City}</div>
        <Data WeatherData={WeatherData} /> {/* Passing weather data as props */}

    </div>
}

