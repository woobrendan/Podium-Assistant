import {useState} from 'react';
import ResultTableHeader from './ResultTableHeader';
import ToggleSearch from '../toggleSearch';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useEntries from '../../useEntries.js'

function Results() {
  const {
    drivers,
    vehicles,
    fastLaps,
    resultHistory,
    groupResults
  } = useEntries()

  const [searchValue, setSearchValue] = useState('');
  const [option, setOption] = useState('');

  const allResults = groupResults.map((result) => (
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
