import {useState} from 'react'
import WinnerTop3 from './WinnerTop3';
import { Button } from '@mui/material';
import '../../Styling/podium.scss'
import FastLap from './FastLap';
import Series from './Series';
import axios from 'axios';
import EventSearch from './EventsSearch';
import ResultTableHeader from '../Results/ResultTableHeader';
import DatePicker from './DatePicker';
import useEntries from '../../useEntries';

const getToday = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  return `${mm}-${dd}-${year}`;
}

function Podium() {
  const {drivers} = useEntries(); 

  const [results, setResults] = useState({
    date: getToday(),
    series: '',
    event: '',
    result1: '',
    result2: '',
    result3: '',
    fastLap: ''
  });

  //toggle control for winnertop3 card
  const [showWinnerTable, setShowWinnerTable] = useState({
    result1: true,
    result2: true,
    result3: true,
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

    axios
      .post('http://localhost:8080/results/new', {
        driver: getDriverId(value.driver),
        lapTime: value.laptime
      })
      .catch(err => console.log(err.message))
  }

  const handleRacePodiumSubmit = (value) => {
    const podiumNumber = () => {
      if (!results.result1) return 'result1'
      else if (!results.result2) return 'result2'
      else return 'result3'
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

  //grab value and name from component and set result usestate
  const getValue = (name, value) => {
    setResults((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const getDriverId = (name) => {
    for (const driver of drivers) {
      if (driver.name === name) {
        return driver.id;
      }
    }
  }

  const onFinalSubmit = () => {
    axios
      .post('http://localhost:8080/fastLaps', {
        driver: getDriverId(results.fastLap.driver),
        lapTime: results.fastLap.laptime
      })
      .catch(err => console.log(err.message))
  } 

  const printPage = () => {
    window.print()
  }

  return (
    <div className="race-results-container">
      {showWinnerTable.misc && 
        <DatePicker getValue={getValue} today={getToday()}/>}
      {showWinnerTable.misc && <EventSearch getValue={getValue}/>}
      {showWinnerTable.misc && <Series getValue={getValue}/>}
      {showWinnerTable.result1 && 
        <WinnerTop3 
          series={results.series} 
          onClick={handleRacePodiumSubmit}
          results={results}
        />}
      {showWinnerTable.result2 && 
        <WinnerTop3 
          series={results.series} 
          onClick={handleRacePodiumSubmit}
          results={results}
        />}
      {showWinnerTable.result3 && 
        <WinnerTop3 
          series={results.series} 
          onClick={handleRacePodiumSubmit}
          results={results}
        />}
      {showWinnerTable.fastLap && 
        <FastLap 
          onClick={handleFastLapSumbit}
          series={results.series}
          />
      }
      {showWinnerTable.printPage && <Button variant="contained" color="success" onClick={printPage}>Print Page</Button>}
      {!showWinnerTable.fastLap && <ResultTableHeader results={results}/>}
    </div>
  )
}

export default Podium
