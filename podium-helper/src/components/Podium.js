import {useState} from 'react'
import WinnerTop3 from './WinnerTop3';
import { Button } from '@mui/material';
import '../Styling/podium.scss'
import FastLap from './FastLap';
import Results from './Results';
import Series from './Series';

function Podium() {

  const [results, setResults] = useState({
    series: '',
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

  const handleRacePodiumSubmit = (value) => {
    const podiumNumber = () => {
      if (!results.podium1) return 'podium1'
      else if (!results.podium2) return 'podium2'
      else return 'podium3'
    }
    setResults((prev) => ({
      ...prev,
      [podiumNumber()]: value
    }))
  }

  const getSeries = (series) => {
    setResults((prev) => ({
      ...prev,
      series
    }))
  }

  const onSubmit = () => {
    console.log('I am clicked')
  }
  return (
    <div className="race-results-container">
      <Series getSeries={getSeries}/>
      <WinnerTop3 
        series={results.series} 
        onClick={handleRacePodiumSubmit}
      />
      <WinnerTop3 series={results.series} onClick={handleRacePodiumSubmit}/>
      <WinnerTop3 series={results.series} onClick={handleRacePodiumSubmit}/>
      <FastLap onClick={handleFastLapSumbit}/>
      <Button variant="contained" color="success" onClick={onSubmit}>Submit</Button>
      {results.podium1 && <Results result={results.podium1} />}
      {results.podium2 && <Results result={results.podium2} />}
    </div>
  )
}

export default Podium
