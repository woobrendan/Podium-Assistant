import { FormControl, InputLabel, Select, Box, MenuItem } from '@mui/material';
import {useState} from 'react';

export default function ToggleSort(props) {
  const [sortOption, setSortOption] = useState('');

  const sortOptions = ['Number', 'Manufacturer', 'Vehicle Type']

  const handleToggle = (event) => {
    setSortOption(event.target.value);
    props.getOption(event.target.value);
  }

  const mappedOptions = sortOptions.map(option => (
    <MenuItem key={option} value={option}>{option}</MenuItem>
  ))

  return (
    <div className="sort-option-selector">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel htmlFor="exampleFormControlSelect2">
            Sort Options
          </InputLabel>
          <Select
            className="form-control"
            name="search-by"
            label="Search Options"
            value={sortOption}
            onChange={handleToggle}
          >
            {mappedOptions}
          </Select>
        </FormControl>
      </Box>
    </div>
  )
}
