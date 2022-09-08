import {useState} from 'react';
import {Typography, TextField} from '@mui/material'
import ResultTableHeader from './ResultTableHeader';
import useEntries from '../../functions/useEntries.js';
import SearchAllResults from './SearchAllResults';

function ResultsHistory() {
  const { groupResults } = useEntries()
  const [searchValue, setSearchValue] = useState('');

  const allResults = SearchAllResults(groupResults, searchValue).map((result, index) => (
    <ResultTableHeader results={result} key={index} />
  ));

  return (
    <div className="result-container">
      <Typography gutterBottom variant="h3" component="div">
        Result History
      </Typography>
       <TextField 
        id="standard-basic" 
        label='Search' 
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
