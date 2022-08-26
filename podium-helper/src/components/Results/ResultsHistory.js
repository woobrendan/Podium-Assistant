import {useState} from 'react';
import {Typography, TextField} from '@mui/material'
import ResultTableHeader from './ResultTableHeader';
import ToggleSearch from '../functions/toggleSearch';
import useEntries from '../../functions/useEntries.js';
import filteredResultOptions from '../../functions/resultOptions';

function ResultsHistory() {
  const { groupResults } = useEntries()
  const [searchValue, setSearchValue] = useState('');
  const [option, setOption] = useState('');

  const getSearchOption = (option) => {
    setOption(option);
  };
  const searchLabel = option ? `Search by ${option}`: "Search";

  const allResults = filteredResultOptions(groupResults, option, searchValue).map((result, index) => (
    <div key={index}>
      <ResultTableHeader results={result}/>
    </div>
  ));

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

export default ResultsHistory;
