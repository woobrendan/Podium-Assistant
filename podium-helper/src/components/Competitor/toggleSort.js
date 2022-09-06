import { FormControl, InputLabel, Select, Box, MenuItem } from '@mui/material';
import {useState} from 'react';

export default function ToggleSort(props) {
  const [sortOption, setSortOption] = useState('');

  const sortOptions = ['Number', 'Manufacturer', 'Vehicle Type', 'Class']

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
        <FormControl 
          sx={{ minWidth: 150 }} 
          color="error"
          // focused={true}
          className="form-control"
        >
          <InputLabel>
            Sort By
          </InputLabel>
          <Select
            className="form-control"
            name="sort-by"
            label="Sort By"
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

