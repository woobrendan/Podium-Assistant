import EntryRows from './EntryRows';
import ToggleSort from '../Competitor/toggleSort';
import '../../Styling/entryDash.scss'
import {useState} from 'react';
import { TextField } from '@mui/material'

function EntryDashboard() {

  const [searchValue, setSearchValue] = useState('');
  const [option, setOption] = useState('');
  
  const getSortOption = (option) => setOption(option);

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
    <EntryRows />
    </>
  )
}

export default EntryDashboard
