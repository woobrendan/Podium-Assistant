import {useState} from 'react';
import ResultTableHeader from './ResultTableHeader';
import ToggleSearch from '../toggleSearch';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useEntries from '../../useEntries.js';
import filteredResultOptions from '../../resultOptions';

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
