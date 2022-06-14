import {useState} from 'react'
import WinnerTop3 from './WinnerTop3';
import { Button } from '@mui/material';
import '../Styling/podium.scss'
import FastLap from './FastLap';
import Results from './Results';
import Series from './Series';
import axios from 'axios';
import FastLapTable from './FastLapTable';

function Podium() {
  const [showResultTable, setshowResultTable] = useState({
    pod1: false,
    pod2: false,
    pod3: false,
    fastLap: false
  })
  const [results, setResults] = useState({
    series: '',
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
  })

  const handleFastLapSumbit = (value) => {
    setResults((prev) => ({
      ...prev,
      fastLap: value
    }));

    setShowWinnerTable((prev) => ({
      ...prev,
      fastLap: false
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

  const onFinalSubmit = () => {
    //if podium x was submitted set show table toggle to true
    if (results.podium1) {
      setshowResultTable((prev) => ({
        ...prev,
        pod1: true
      }))
    }
    if (results.podium2) {
      setshowResultTable((prev) => ({
        ...prev,
        pod2: true
      }))
    }
    if (results.podium3) {
      setshowResultTable((prev) => ({
        ...prev,
        pod3: true
      }))
    }
    if (results.fastLap) {
      setshowResultTable((prev) => ({
        ...prev,
        fastLap: true
      }))
    }
    //remove all other elements to only show result table
    setShowWinnerTable({
      podium1: false,
      podium2: false,
      podium3: false,
      fastLap: false,
      misc: false
    });

    // axios
    //   .post('http://localhost:8080/results', {result: results})
    //   .catch(err => console.log(err.message))

  };

  return (
    <div className="race-results-container">
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
      {showWinnerTable.misc && 
        <Button 
          variant="contained" 
          color="success" 
          onClick={onFinalSubmit}
        >
          Print Results
        </Button>
      }
      {showResultTable.pod1 && <Results result={results.podium1} />}
      {showResultTable.pod2 && <Results result={results.podium2} />}
      {showResultTable.pod3 && <Results result={results.podium3} />}
      {showResultTable.fastLap && <FastLapTable fastLap={results.fastLap} />}
    </div>
  )
}

export default Podium
