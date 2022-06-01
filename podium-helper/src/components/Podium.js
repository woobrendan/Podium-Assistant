import React from 'react'
import WinnerTop3 from './WinnerTop3';
import { Button } from '@mui/material';
import '../Styling/podium.scss'

//make a function that grabs the usestate results from each race on submit
function Podium() {
  return (
    <div className="race-results-container">
      <WinnerTop3 />
      <WinnerTop3 />
      <WinnerTop3 />
      <Button variant="contained" color="success">Submit</Button>
    </div>
  )
}

export default Podium
