import DriverDetails from './DriverDetails';
import '../../Styling/competitors.scss'
import {TextField} from '@mui/material'
import {useState} from 'react';
import BackToTopButton from './BackToTopButton';
import useEntries from '../../functions/useEntries';
import ToggleSort from './toggleSort';
import searchAll from './searchAll';
import NoResults from '../NoResults';
import {sortBySeries, sortByVehicleType, sortByManufacturer, sortByClass} from '../../functions/sortFuncs';

function DriverSearch() {
  const [searchValue, setSearchValue] = useState('');
  const [option, setOption] = useState('');
  const {vehicles} = useEntries()
  
  const getSearchOption = (option) => {
    setOption(option);
  }

  const searchResult = searchAll(vehicles, searchValue)

  const mappedDrivers = searchResult.length > 0 
    ? searchResult.map((entry,index) =>(
      <DriverDetails entry={entry} key={index} index={index}/>
    ))
    : <NoResults />

  const setSortOption = (sortOption, entryArray) => {
    switch(sortOption) {
      case 'Number': 
        return entryArray
      case 'Manufacturer': 
        return sortByManufacturer(entryArray)
      case 'Vehicle Type':
        return sortByVehicleType(entryArray)
      case 'Class': 
        return sortByClass(entryArray)
      default:
        return sortBySeries(entryArray)
    }
  }

  const searchLabel = option ? `Search by ${option}`: "Search"
  return (
    <div className="competitors-container">
      <div className="search-sort-options">
        <ToggleSort getOption={getSearchOption} />
        <TextField 
          className="form-control"
          label={searchLabel} 
          variant="filled" 
          color="error"
          focused={true}
          value={searchValue}
          onChange={e => {setSearchValue(e.target.value)}}
        />
      </div>
      <div className="entry_cards">
        {mappedDrivers}
      </div>
      <BackToTopButton />
    </div>
  )
}

export default DriverSearch
