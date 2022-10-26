import {useState} from 'react';
import { FormControl, InputLabel, Select, Box, MenuItem } from '@mui/material';
import useEntries from '../../functions/useEntries';


function Series(props) {
  const [seriesName, setSeriesName] = useState('');
  const { series } = useEntries();

  const handleChange = (event) => {
    setSeriesName(event.target.value);
    props.getValue(event.target.name, event.target.value)
  };

  const mappedSeries = series.map((serie, index) => <MenuItem key={index} value={serie}>{serie.name}</MenuItem>)

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl sx={{ minWidth: 300 }}>
        <InputLabel htmlFor="Series">
          Series
        </InputLabel>
        <Select
          className="form-control"
          name="series"
          label="Series"
          value={seriesName}
          onChange={handleChange}
        >
          {mappedSeries}
        </Select>
      </FormControl>
    </Box>
  )
}

export default Series
