import React from 'react'
import { drivers } from '../drivers'

function DriverSearch() {
  const mappedDrivers = drivers.map((driver,index) => (
    <li>{driver}</li>
  ))
  return (
    <ul>
      {mappedDrivers}
    </ul>
  )
}

export default DriverSearch
