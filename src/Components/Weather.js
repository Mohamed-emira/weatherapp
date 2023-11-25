import React from 'react'

export default function Weather(props) {
  return (
    <div>
      {props.temperature && <h3><span> Temperature :</span> {props.temperature}</h3>}
      {props.city && <h3><span> City : </span>{props.city}</h3>}
      {props.country &&<h3><span> Country : </span>{props.country}</h3>}
      {props.humidity &&<h3><span> Humidity : </span> {props.humidity}</h3>}
      {props.description &&<h3><span> Description : </span>{props.description}</h3>}
      {props.error && <h3><span> Description : </span> {props.error}</h3>}
   </div>
  )
}
