import React, { useEffect, useState } from 'react';
import "./css/styles.css";

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4f36ccc2f2adf9f22438911544894ad1`
            const response = await fetch(url);
            const resJson = await response.json();

            // Fix: set the city state to the fetched data
            setCity(resJson.main);
        }

        fetchApi();
    }, [search])

    return (
        <>
        
        <div className='box'>
            <div className='inputData'>
                <input type='search' className='inputField' onChange={(event) => { setSearch(event.target.value) }}></input>
            </div>
            
                {!city ? (
                    <p> No data found</p>
                ) : (
                    <div className='info'>
                        <h2 className='location'>
                        <i className="fas fa-street-view"></i>{search}
                        </h2>
                        <h1 className='temp'>{city.temp} </h1>
                        <h3 className='temp_min_max'> Min {city.temp_min} | Max {city.temp_max}</h3>
                    </div>
                )}
            </div>
        </>
    )
}

export default Tempapp;
