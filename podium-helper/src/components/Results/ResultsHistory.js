import {useState} from 'react';
import {Typography, TextField} from '@mui/material'
import ResultTableHeader from './ResultTableHeader';
import useEntries from '../../functions/useEntries.js';
import SearchAllResults from './SearchAllResults';
import BackToTopButton from '../BackToTopButton';
import ToggleSort from '../Competitor/toggleSort';

function ResultsHistory() {
  const { resultHistory } = useEntries()
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('');

  const getSortOption = (option) => setSortValue(option)

  const allResults = SearchAllResults(resultHistory, searchValue).map((result, index) => (
    <ResultTableHeader results={result} key={index} />
  ));

  return (
    <div className="result-container">
      <Typography gutterBottom variant="h3" component="div">
        Result History
      </Typography>
      <ToggleSort getOption={getSortOption} component="results"/>
      <TextField 
        label='Search' 
        variant="outlined" 
        color="error"
        value={searchValue}
        onChange={e => {setSearchValue(e.target.value)}}
      />
      <div className="result-history-list">
        {allResults}
      </div>
      <BackToTopButton />
    </div>
  )
}

export default ResultsHistory;
