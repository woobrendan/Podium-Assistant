import {useState} from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select } from '@mui/material';


function ToggleSearch(props) {
  const [searchOption, setSearchOption] = useState('');

  const options = ['All', 'Driver', 'Car', 'Nationality', 'Team', 'Rating'];

  const handleToggle = (event) => {
    setSearchOption(event.target.value);
    props.getOption(event.target.value);
  }

  const mappedOptions = options.map(option => (
    <MenuItem key={option} value={option}>{option}</MenuItem>
  ))

  return (
    <div>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl sx={{ minWidth: 300 }}>
            <InputLabel htmlFor="exampleFormControlSelect2">
              Search Options
            </InputLabel>
            <Select
              className="form-control"
              name="search-by"
              value={searchOption}
              onChange={handleToggle}
            >
              {mappedOptions}
            </Select>
          </FormControl>
        </Box>
      
    </div>
  )
}

export default ToggleSearch
