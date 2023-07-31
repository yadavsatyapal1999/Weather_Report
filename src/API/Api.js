import { useEffect, useContext } from "react";
import axios from "axios";

const securityKey = "faec158c04f2883409db428425a72028"
const [Search, SetSearch] = useContext("New Delhi"); // Input to search weather for a particular location
const [SearchAgain, SetSearchAgain] = useContext(true);// To ensure that search button was clicked 
const [WeatherData, SetWeatherData] = useContext()// It stores all the fetched data 
const api = `https://api.weatherstack.com/current?access_key=${securityKey}&query=${Search}`
useEffect(() => {
    axios.get(api)
        .then(res => {
            console.log(res);
        })
})
