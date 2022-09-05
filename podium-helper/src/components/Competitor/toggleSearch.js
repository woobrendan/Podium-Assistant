import {useState} from 'react';
import { FormControl, InputLabel, Select, Box, MenuItem } from '@mui/material';


function ToggleSearch(props) {
  const [searchOption, setSearchOption] = useState('');

  const options = ['All', 'Driver', 'Manufacturer', 'Nationality', 'Team', 'Rating', 'Series', 'Number'];

  const resultOptions = ['All', 'Driver', 'Manufacturer', 'Team', 'Series', 'Number', 'Event'];

  const handleToggle = (event) => {
    setSearchOption(event.target.value);
    props.getOption(event.target.value);
  }

  const searchList = props.page === 'result' ? resultOptions : options

  const mappedOptions = searchList.map(option => (
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
          <FormControl 
            sx={{ minWidth: 300 }}
            color="error"
            // focused={true}
            className="form-control"
          >
            <InputLabel htmlFor="exampleFormControlSelect2">
              Search Options
            </InputLabel>
            <Select
              className="form-control"
              name="search-by"
              label="Search Options"
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
