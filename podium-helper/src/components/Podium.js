import {useState} from 'react'
import WinnerTop3 from './WinnerTop3';
import { Button } from '@mui/material';
import '../Styling/podium.scss'
import FastLap from './FastLap';
import Results from './Results';
import Series from './Series';

function Podium() {
  const [podiumStatus, setPodiumStatus] = useState({
    pod1: false,
    pod2: false,
    pod3: false
  })
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
    if (results.podium1) {
      setPodiumStatus((prev) => ({
        ...prev,
        pod1: true
      }))
    }
    if (results.podium2) {
      setPodiumStatus((prev) => ({
        ...prev,
        pod2: true
      }))
    }
    if (results.podium3) {
      setPodiumStatus((prev) => ({
        ...prev,
        pod3: true
      }))
    }
    // console.log(pod1, pod2
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
      {podiumStatus.pod1 && <Results result={results.podium1} />}
      {podiumStatus.pod2 && <Results result={results.podium2} />}
    </div>
  )
}

export default Podium
