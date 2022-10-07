import EntryRows from './EntryRows';
import ToggleSort from '../Competitor/toggleSort';
import searchAllEntries from '../Competitor/searchAllEntries';
import '../../Styling/entryDash.scss'
import {useState} from 'react';
import { TextField } from '@mui/material'
import useEntries from '../../functions/useEntries';

function EntryDashboard() {

  const [searchValue, setSearchValue] = useState('');
  const [option, setOption] = useState('');

  const {vehicles} = useEntries();
  const searchResults = searchAllEntries(vehicles, searchValue)

  const getSortOption = (option) => setOption(option);

  //take in vehicles from useEntries
  //filter those by search
  //pass those remaining entries down to entryrows

  return (
    <>
    <div className="search-sort-options">
        <ToggleSort getOption={getSortOption} />
        <TextField 
          className="form-control"
          label="Search" 
          variant="outlined" 
          color="error"
          value={searchValue}
          onChange={e => {setSearchValue(e.target.value)}}
        />
      </div>
    <EntryRows filteredEntries={searchResults}/>
    </>
  )
}

export default EntryDashboard
