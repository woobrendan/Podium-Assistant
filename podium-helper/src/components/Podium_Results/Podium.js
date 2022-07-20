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
import { getIdFromArray, getToday, printPage } from '../../helperFunc';

function Podium() {
  const {drivers, events, series, classCategory} = useEntries(); 

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
    const result1 = results.result1;
    const result2 = results.result2;
    const result3 = results.result3;

    setResults((prev) => ({
      ...prev,
      fastLap: {...value, id: getIdFromArray(value.driver, drivers)}
    }));

    setShowWinnerTable((prev) => ({
      ...prev,
      fastLap: false,
      misc: false,
      printPage: true
    }));

    const copyResults = {
      ...results,
      result1: {
        ...results.result1,
        class: getIdFromArray(result1.class, classCategory)
      },
      result2: {
        ...results.result2,
        class: getIdFromArray(result2.class, classCategory)
      },
      result3: {
        ...results.result,
        class: getIdFromArray(result3.class, classCategory)
      },
      event: getIdFromArray(results.event, events),
      series: getIdFromArray(results.series, series),
      fastLap: {...value, id: getIdFromArray(value.driver, drivers)}
    }
    console.log('copyResult', copyResults)

    axios
      .post('http://localhost:8080/results/new', {
        results: copyResults
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
