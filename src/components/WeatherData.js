import React from 'react';
import { Clock } from './Clock'
import { DegreesToDirection, Month, Weekday, Day } from '../helpers/utils';

export const WeatherData = ({data}) => {

    const {name, country, temp, description, temp_min, temp_max, icon, feels_like, speed, deg, humidity} = data;

    return (
        <>
            <header>
                <div>
                    {/* <img src={require(`https://www.flaticon.com/free-icons/clock`)} alt='clock icon' /> */}
                    <Clock />
                </div>
                <h5>{Weekday}, {Month} {Day}</h5>
            </header>
            <main>
                <div className='weather-main'>
                    <img src={`http://openweathermap.org/img/wn/10d@2x.png`} alt='weather icon' className='weather-icon' />
                    <div>
                        <h2>{name}, {country}</h2>
                        <h3 className='description'>Sunny</h3>
                    </div>
                </div>
                <div className='temp-main'>
                    <h5>Feels like {feels_like}</h5>
                    <h1 className='temperature'>{temp}</h1>
                    <div className='hi-lo'>
                        <h5>H {temp_max}</h5>
                        <h5>L {temp_min}</h5>
                    </div>
                </div>
            </main>
            <footer>
                <div className='weather-prop'>
                    {/* <img src={require('https://www.flaticon.com/free-icons/wind')} alt=''/> */}
                    <h4>{DegreesToDirection(deg)} {speed}</h4>
                </div>
                <div className='weather-prop'>
                    {/* <img src={require('https://www.flaticon.com/free-icons/water-drop')} alt=''/> */}
                    <h4>{humidity}%</h4>
                </div>
            </footer>
        </>
    )
}


{/* <a href="https://www.flaticon.com/free-icons/wind" title="wind icons">Wind icons created by Vitaly Gorbachev - Flaticon</a> */}

{/* <a href="https://www.flaticon.com/free-icons/water-drop" title="water drop icons">Water drop icons created by Good Ware - Flaticon</a> */}

{/* <a href="https://www.flaticon.com/free-icons/clock" title="clock icons">Clock icons created by Those Icons - Flaticon</a> */}