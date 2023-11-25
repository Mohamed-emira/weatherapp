import React, { useState } from 'react'
import Weather from './Weather'

const apiKey="2ddc2aff1b11a56b3b8fd449b99454f3"
//https://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
 function Form() {
  const[weather,setweather]=useState({
    temperature:'',
    city:'',
    country:'',
    humdity:'',
    description:'',
    error:'',
  })

    const getweather= async(e)=>{
        e.preventDefault()
    const city=e.target.elements.city.value    
    const country=e.target.elements.country.value  
    console.log(city,country)  
    const api= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`)
    const data= await api.json()
    console.log(data)
    if (city && country) {
      setweather({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: '',
      });
    } else {
      setweather({
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: 'Please enter both city and country.',
      });
    }}
  return (
    <form onSubmit={getweather} className='form-container'>
<input type='text'placeholder='City.....' name='city'/>
<input type='text'placeholder='Country.....' name='country'/>
<button>Get weather</button>

<div className='data-weather'>
<Weather 
temperature= {weather.temperature}
city={weather.city}
country= {weather.country}
humidity= {weather.humidity}
description= {weather.description}
error={weather.error}
/>
</div>
</form>

  )
}
export default Form;