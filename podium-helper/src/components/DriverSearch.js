import React from 'react'
import { GTWCADrivers } from '../drivers'

function DriverSearch() {
  const mappedDrivers = GTWCADrivers.map((driver,index) => (
    <li key={index}>{driver}</li>
  ))
  return (
    <ul>
      {mappedDrivers}
    </ul>
  )
}

export default DriverSearch
