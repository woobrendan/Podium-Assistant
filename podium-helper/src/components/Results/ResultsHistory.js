import { useState, useEffect } from 'react';
import { Typography, TextField } from '@mui/material'
import ResultTableHeader from './ResultTableHeader';
import useEntries from '../../functions/useEntries.js';
import SearchAllResults from './SearchAllResults';
import BackToTopButton from '../BackToTopButton';
import EventSearch from '../Podium_Results/EventsSearch';

function ResultsHistory() {
  const { resultHistory } = useEntries()
  const [searchValue, setSearchValue] = useState('');
  const [event, setEvent] = useState('');
  const [filteredResults, setFilteredResults] = useState([])

  const getValue = (name, value) => setEvent(value)
  
  const filterByEvent = () => {
    if (event) {
      const filtered = resultHistory.filter((result) => {
        if (event === result.event) return result
      })
      return filtered;
    }
  }
  useEffect(() => {
    event ? setFilteredResults(filterByEvent()) 
          : setFilteredResults(resultHistory)
  }, [event, resultHistory])


  const allResults = SearchAllResults(filteredResults, searchValue).map((result, index) => (
    <ResultTableHeader results={result} key={index} />
  ));

  return (
    <div className="result-container">
      <Typography gutterBottom variant="h3" component="div">
        Result History
      </Typography>
      <EventSearch getValue={getValue}/>
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
