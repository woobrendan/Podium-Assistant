import {useState} from 'react'
import WinnerTop3 from './WinnerTop3';
import { Button } from '@mui/material';
import '../Styling/podium.scss'
import FastLap from './FastLap';

//make a function that grabs the usestate results from each race on submit
function Podium() {

  const [results, setResults] = useState({
    podium1: '',
    podium2: '',
    podium3: '',
    fastLap: ''
  })

  const handleFastLapSumbit = (value) => {
    setResults((prev) => ({
      ...prev,
      fastLap: value
    }))
  }

  const onSubmit = () => {
    console.log('I am clicked')
  }
  return (
    <div className="race-results-container">
      <WinnerTop3 />
      <WinnerTop3 />
      <WinnerTop3 />
      <FastLap onClick={handleFastLapSumbit}/>
      <Button variant="contained" color="success" onClick={onSubmit}>Submit</Button>
    </div>
  )
}

export default Podium
