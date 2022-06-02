import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select, TextField } from '@mui/material';
import {useState} from 'react'



function FastLap() {
  const [fastTime, setFastTime] = useState({
    driver: '',
    lapTime: ''
  });
  const handleChange = (event) => {
    setFastTime((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }
  return (
    <div className="results-container">
      <Card sx={{ minWidth: 450 }}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
          id="outlined"
          label="Fast Lap"
          name="lapTime"
          value={fastTime.lapTime}
          onChange={handleChange}
        />
        </Box>
      </Card>
    </div>
  )
}

export default FastLap
