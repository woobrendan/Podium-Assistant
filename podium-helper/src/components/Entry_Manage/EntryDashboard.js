import EntryRows from './EntryRows';
import ToggleSort from '../Competitor/toggleSort';
import searchAllEntries from '../Competitor/searchAllEntries';
import '../../Styling/entryDash.scss'
import {useState} from 'react';
import { TextField } from '@mui/material'
import useEntries from '../../functions/useEntries';
import {sortBySeries, sortByVehicleType, sortByManufacturer, sortByClass} from '../../functions/sortFuncs';

function EntryDashboard() {

  const [searchValue, setSearchValue] = useState('');
  const [option, setOption] = useState('');

  const {vehicles} = useEntries();
  
  const getSortOption = (option) => setOption(option);
  
  const searchResults = searchAllEntries(vehicles, searchValue);
  const setSortOption = (sortOption, entryArray) => {
    switch(sortOption) {
      case 'Number': return entryArray
      case 'Manufacturer': return sortByManufacturer(entryArray)
      case 'Vehicle Type': return sortByVehicleType(entryArray)
      case 'Class': return sortByClass(entryArray)
      default: return sortBySeries(entryArray)
    }
  }

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
