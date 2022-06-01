import React from 'react'
import WinnerTop3 from './WinnerTop3';

//make a function that grabs the usestate results from each race on submit
function Podium() {
  return (
    <div>
      <WinnerTop3 />
      <WinnerTop3 />
      <WinnerTop3 />
    </div>
  )
}

export default Podium
