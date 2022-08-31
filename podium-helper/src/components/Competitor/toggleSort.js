import { FormControl, InputLabel, Select, Box, MenuItem } from '@mui/material';
import {useState} from 'react';

export default function ToggleSort() {
  const [sortOption, setSortOption] = useState('');

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

