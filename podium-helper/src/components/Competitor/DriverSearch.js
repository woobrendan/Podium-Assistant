import DriverDetails from './DriverDetails';
import '../../Styling/competitors.scss'
import {TextField} from '@mui/material'
import {useState} from 'react';
import ToggleSearch from './toggleSearch';
import BackToTopButton from './BackToTopButton';
import filteredOptions from '../../functions/searchOptions';
import useEntries from '../../functions/useEntries';
import ToggleSort from './toggleSort';
import searchAll from './searchAll';
import {sortBySeries, sortByVehicleType} from '../../functions/sortFuncs';

function DriverSearch() {
  const [searchValue, setSearchValue] = useState('');
  const [option, setOption] = useState('');
  const {vehicles} = useEntries()
  
  const getSearchOption = (option) => {
    setOption(option);
  }
  // console.log('vehicles', vehicles)
  // const mappedDrivers = searchAll(vehicles, searchValue).map((entry,index) =>(
  //      <DriverDetails entry={entry} key={index} index={index}/>
  //     ))

  const setSortOption = (sortOption, entryArray) => {
    switch(sortOption) {
      case 'Series': 
        return sortBySeries(entryArray)
      case 'Manufacturer': 
        //return sortByManuf
      case 'Vehicle Type':
        return sortByVehicleType(entryArray)
      default:
        return entryArray
    }
  }

  const mappedDrivers = setSortOption(option, filteredOptions(vehicles, option, searchValue)).map((entry,index) =>(
    <DriverDetails entry={entry} key={index} index={index}/>
  ))

  const searchLabel = option ? `Search by ${option}`: "Search"
  return (
    <div className="competitors-container">
      {/* <ToggleSearch getOption={getSearchOption} /> */}
      <ToggleSort getOption={getSearchOption} />
       {/* <TextField 
        id="standard-basic" 
        label={searchLabel} 
        variant="standard" 
        value={searchValue}
        onChange={e => {setSearchValue(e.target.value)}}
      /> */}
      <div className="entry_cards">
        {mappedDrivers}
      </div>
      <BackToTopButton />
    </div>
  )
}

export default DriverSearch
