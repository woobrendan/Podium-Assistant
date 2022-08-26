import DriverDetails from './DriverDetails';
import '../../Styling/competitors.scss'
import {TextField} from '@mui/material'
import {useState} from 'react';
import ToggleSearch from '../../functions/toggleSearch';
import BackToTopButton from './BackToTopButton';
import filteredOptions from '../../searchOptions';
import useEntries from '../../useEntries';
import searchAll from './searchAll';

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

  const mappedDrivers = filteredOptions(vehicles, option, searchValue).map((entry,index) =>(
    <DriverDetails entry={entry} key={index} index={index}/>
  ))

  const searchLabel = option ? `Search by ${option}`: "Search"
  return (
    <div className="competitors-container">
      <ToggleSearch getOption={getSearchOption} />
       <TextField 
        id="standard-basic" 
        label={searchLabel} 
        variant="standard" 
        value={searchValue}
        onChange={e => {setSearchValue(e.target.value)}}
      />
      <div className="entry_cards">
        {mappedDrivers}
      </div>
      <BackToTopButton />
    </div>
  )
}

export default DriverSearch
