import React from 'react'
import WinnerTop3 from './WinnerTop3';
import { Button } from '@mui/material';
import '../Styling/podium.scss'
import FastLap from './FastLap';

//make a function that grabs the usestate results from each race on submit
function Podium() {

  const onSubmit = () => {
    console.log('I am clicked')
  }
  return (
    <div className="race-results-container">
      <WinnerTop3 />
      <WinnerTop3 />
      <WinnerTop3 />
      <FastLap />
      <Button variant="contained" color="success" onClick={onSubmit}>Submit</Button>
    </div>
  )
}

export default Podium
