import {useState} from 'react';
import {Typography, TextField} from '@mui/material'
import ResultTableHeader from './ResultTableHeader';
import ToggleSearch from '../Competitor/toggleSearch';
import useEntries from '../../functions/useEntries.js';
import filteredResultOptions from './ResultOptions';

function ResultsHistory() {
  const { groupResults } = useEntries()
  const [searchValue, setSearchValue] = useState('');
  const [option, setOption] = useState('');

  const getSearchOption = (option) => {
    setOption(option);
  };
  const searchLabel = option ? `Search by ${option}`: "Search";

  const allResults = filteredResultOptions(groupResults, option, searchValue).map((result, index) => (
      <ResultTableHeader results={result} key={index}/>
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
      <div className="result-history-list">
        {allResults}
      </div>
    </div>
  )
}

export default ResultsHistory;
