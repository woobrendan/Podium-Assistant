import {useEffect, useState} from 'react';
import axios from 'axios';
import ResultTableHeader from './ResultTableHeader';
import ToggleSearch from '../toggleSearch';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import helperHooks from '../../helperHooks'
import useEntries from '../../helperHooks.js'

function Results() {
  const {
    drivers,
    vehicles,
    fastLaps,
    resultHistory
  } = useEntries()

  const [searchValue, setSearchValue] = useState('');
  const [option, setOption] = useState('');

  const groupedResults = (resultArr) => {
    const arrayOfGroupedResults = [];
    for (let i = 0; i < resultArr.length; i += 3) {
      let y = i + 1;
      let z = i + 2;
      arrayOfGroupedResults.push({
        date: resultArr[i].date,
        series: resultArr[i].series,
        event: resultArr[i].event,
        result1: resultArr[i], 
        result2: resultArr[y],
        result3: resultArr[z]
      })
    }
    for (let x = 0; x < fastLaps.length; x++) {
      if (fastLaps[x].id === arrayOfGroupedResults[x].result1.fast_lap) {
        arrayOfGroupedResults[x].fastLap = fastLaps[x]
      }
    }
    return arrayOfGroupedResults
  };

  const allResults = groupedResults(resultHistory).map((result) => (
    <div key={result.result1.result_id}>
      <ResultTableHeader results={result}/>
    </div>
  ));

  const getSearchOption = (option) => {
    setOption(option);
  }

  const searchLabel = option ? `Search by ${option}`: "Search"

  return (
    <div className="result-container">
      <Typography gutterBottom variant="h3" component="div">
        Result History
      </Typography>
      <ToggleSearch page='result' getOption={getSearchOption}/>
       <TextField 
        id="standard-basic" 
        label={searchLabel} 
        variant="standard" 
        value={searchValue}
        onChange={e => {setSearchValue(e.target.value)}}
      />
      {allResults}
    </div>
  )
}

export default Results;
