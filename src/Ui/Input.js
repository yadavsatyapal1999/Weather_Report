
import Button from "./Button"

export default function Input({ SetSearch, SetSearchAgain, SetCity, SearchAgain, Search, SetWeatherData }) {


    return <div className="Input">
        <label className="input_txt" htmlFor="input">City</label>
        <input className="inpt" name="input" id="input" type="text" onChange={(e) => {
            SetSearch(e.target.value);
        }} />
        <Button
            SearchAgain={SearchAgain}
            SetCity={SetCity}
            SetSearchAgain={SetSearchAgain}
            Search={Search}
            SetWeatherData={SetWeatherData}
        />
    </div>
}