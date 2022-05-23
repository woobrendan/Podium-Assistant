import {useState} from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select, Card, CardContent } from '@mui/material';

const classification = ['Pro', 'Pro-Am', 'Silver', 'Am'];
const placement = ['1st', '2nd', '3rd'];

function Placement() {
  const [finish, setFinish] = useState('');
  const [classRating, setClassRating] = useState('')
  const handleChange = (event) => {
    if (event.target.name === "Rating") {
      setClassRating(event.target.value);
    } else {
      setFinish(event.target.value);
    }
  };

  const mappedClassification = classification.map((finisher, index) => (
    <MenuItem key={index} value={finisher}>{finisher}</MenuItem>
  ))

  const mappedplacement = placement.map(place => (
    <MenuItem key={place} value={place}>{place}</MenuItem>
  ))

  return (
    <Card>
      <CardContent>
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
              Class/Rating
            </InputLabel>
            <Select
              className="form-control"
              name="Rating"
              value={classRating}
              onChange={handleChange}
            >
              {mappedClassification}
            </Select>
          </FormControl>
        </Box>
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
              Placement
            </InputLabel>
            <Select
              className="form-control"
              name="Placement"
              value={finish}
              onChange={handleChange}
            >
              {mappedplacement}
            </Select>
          </FormControl>
        </Box>
    </CardContent>
  </Card>
  )
}

export default Placement
