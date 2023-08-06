
import './Data.css';
import "./Weather.css";
import Rain from './Rain';
import Sun from './Sun';
import Wind from './Wind';

export default function Data({ WeatherData }) {

    return <div className="Data">

        {WeatherData != null || WeatherData != undefined ? <div>
            <div className='time'>
            </div>
            <div className='Hello Hello_First'> {/* It is the box which contains first three boxes*/}

                <div className='Rain Square'> Chances of Rain  <br /> {/* First Box*/}
                    {WeatherData.HasPrecipitation === true ?
                        <div>High</div> :
                        <div>Low </div>}
                </div>

                <div className='Temp Square'> {/* Second Box*/}
                    <div>Temprature <br />
                        {(WeatherData.Temperature.Metric.Value)}{` `}
                        {WeatherData.Temperature.Metric.Unit}
                    </div>
                </div>
                <div className='Real_feel Square'>Real Feel  <br /> {/* Third Box*/}
                    {WeatherData.RealFeelTemperature.Metric.Value}{`  `}
                    {WeatherData.RealFeelTemperature.Metric.Unit} <br />
                    {WeatherData.RealFeelTemperature.Metric.Phrase}
                </div>
            </div>

            <div className='Hello Hello_Second'>
                <div className='Circle Circle_Left NonSquare'> {/* First Circle */}
                    <div className='Weather '>
                        Weather  <br /> {WeatherData.WeatherText == "Cloudy" ?
                            <div> Cloudy {<Rain />}</div>
                            : <div>Sunny {<Sun />}</div>}
                    </div>
                </div>
                <div className='Circle Circle_Middle NonSquare'> {/* Second Circle */}
                    <Wind Direction={WeatherData.Wind.Direction.English} />
                </div>

                <div className='Circle Circle_Right NonSquare'> {/* Third Circle */}
                    <div className='Wind_speed'> Wind Speed : <br />{WeatherData.Wind.Speed.Metric.Value} {WeatherData.Wind.Speed.Metric.Unit}  </div>
                </div>
            </div>
            <div className='HelloL last'> {/* This is the third container*/}
                <div className='Humidity Other'>  Relavtive Humidity : {WeatherData.RelativeHumidity} %</div>

                <div className='UVIndex Other'> UVIndex :{WeatherData.UVIndex} </div>
                <div className='Visiblity Other'> Visibility :{WeatherData.Visibility.Metric.Value} {WeatherData.Visibility.Metric.Unit}</div>

                <div className='Pressure Other'> Pressure :{WeatherData.Pressure.Metric.Value} {WeatherData.Pressure.Metric.Unit}</div>
            </div>
        </div> : <div className="loader"></div>}
    </div>
}