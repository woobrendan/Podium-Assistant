import {useState} from 'react'
import WinnerTop3 from './WinnerTop3';
import { Button } from '@mui/material';
import '../../Styling/podium.scss'
import FastLap from './FastLap';
import Results from './Results';
import Series from './Series';
import axios from 'axios';
import FastLapTable from './FastLapTable';
import EventSearch from './EventsSearch';

function Podium() {

  const [results, setResults] = useState({
    series: '',
    event: '',
    podium1: '',
    podium2: '',
    podium3: '',
    fastLap: ''
  });

  //toggle control for winnertop3 card
  const [showWinnerTable, setShowWinnerTable] = useState({
    podium1: true,
    podium2: true,
    podium3: true,
    fastLap: true,
    misc: true,
    printPage: false
  })

  const handleFastLapSumbit = (value) => {
    setResults((prev) => ({
      ...prev,
      fastLap: value
    }));

    setShowWinnerTable((prev) => ({
      ...prev,
      fastLap: false,
      misc: false,
      printPage: true
    }));
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
    }));

    setShowWinnerTable((prev) => ({
      ...prev,
      [podiumNumber()]: false
    }));
  }

  //grab series from series component and set usestate
  const getSeries = (series) => {
    setResults((prev) => ({
      ...prev,
      series
    }))
  }

  const getEventName = (eventName) => {
    setResults((prev) => ({
      ...prev,
      event: eventName
    }))
  }

  // const onFinalSubmit = () => {
    // axios
    //   .post('http://localhost:8080/results', {result: results})
    //   .catch(err => console.log(err.message))



  const printPage = () => {
    window.print()
  }

  return (
    <div className="race-results-container">
      {showWinnerTable.misc && <EventSearch getEventName={getEventName}/>}
      {showWinnerTable.misc && <Series getSeries={getSeries}/>}
      {showWinnerTable.podium1 && 
        <WinnerTop3 
          series={results.series} 
          onClick={handleRacePodiumSubmit}
          results={results}
        />}
      {showWinnerTable.podium2 && 
        <WinnerTop3 
          series={results.series} 
          onClick={handleRacePodiumSubmit}
          results={results}
        />}
      {showWinnerTable.podium3 && 
        <WinnerTop3 
          series={results.series} 
          onClick={handleRacePodiumSubmit}
          results={results}
        />}
      {showWinnerTable.fastLap && 
        <FastLap 
          onClick={handleFastLapSumbit}
          series={results.series}
          />}
      {/* {showWinnerTable.misc && 
        <Button 
          variant="contained" 
          color="success" 
          onClick={onFinalSubmit}
        >
          Print Results
        </Button>
      } */}
      {!showWinnerTable.podium1 && <Results result={results.podium1} />}
      {!showWinnerTable.podium2 && <Results result={results.podium2} />}
      {!showWinnerTable.podium3 && <Results result={results.podium3} />}
      {!showWinnerTable.fastLap && <FastLapTable fastLap={results.fastLap} />}
      {showWinnerTable.printPage && <Button variant="contained" color="success" onClick={printPage}>Print Page</Button>}
    </div>
  )
}

export default Podium
