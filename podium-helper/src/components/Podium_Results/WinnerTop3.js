import {useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, Select, Button } from '@mui/material';
import { driverInfo } from '../../drivers';
import '../../Styling/winnerTop3.scss';

const classOptions = {
  gtwca: ['Pro', 'Pro-Am', 'Am'],
  gta: ['SRO3', 'GT4', 'Masters', 'GT2'],
  pgt4a: ['Silver', 'Pro-Am', 'Am'],
  tca: ['TCX', 'TC', 'TCA']
}

function Podium(props) {
  const [winners, setWinners] = useState({
    class:'',
    first_place: '',
    second_place: '',
    third_place: ''
  });

  const [isError, setIsError] = useState(false);

  const handleWinners = event => {
      setWinners((prev) => ({
        ...prev,
        [event.target.name]: event.target.value
      }))
  }

  const handleSubmit = () => {
    const isFirstPlace = winners.first_place;
    if (!isFirstPlace) {
      setIsError(true);
    } else {
      if (isError) setIsError(false);
      props.onClick(winners)
    }
  }

  const usedClassOptions = (result) => {
    const usedClasses = [];
    const podiums = [];
    podiums.push(result.result1, result.result2, result.result3)
    for (const podium of podiums) {
      if (podium.class) {
        usedClasses.push(podium.class)
      }
    }
    return usedClasses;
  }

  const getClassArr = (series) => {
    if (series === 'Pirelli GT4 America') return classOptions.pgt4a
    else if (series === 'GT America') return classOptions.gta
    else if (series === 'TC America') return classOptions.tca
    else return classOptions.gtwca
  }

  const mappedClass = getClassArr(props.series)
    .filter(option => !usedClassOptions(props.results).includes(option))
    .map((option, index) => 
      <MenuItem key={index} value={option}>{option}</MenuItem>
    )

  //determine if entry is single or two drivers and return corresponding menu item
  const numOfDriverMenuItem = (entry) => {
    if (!entry.driver2) {
      return <MenuItem key={entry.number} value={entry}>#{entry.number} - {entry.driver1.name} </MenuItem>
    } else {
      return <MenuItem key={entry.number} value={entry}>#{entry.number} - {entry.driver1.name} & {entry.driver2.name}</MenuItem>
    }
  }
  const mappedDrivers = driverInfo
    .filter(entry => entry.series === props.series 
      && entry.classification === winners.class)
    .map(entry => (numOfDriverMenuItem(entry)))

  return (
    <div className="results-container">
      <Card sx={{ minWidth: 450 }}>
      <div className="class-container">
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
              Class
            </InputLabel>
            <Select
              className="form-control"
              name="class"
              label='class'
              value={winners.class}
              onChange={handleWinners}
            >
              {mappedClass}
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="placement-container">
        <div className="finishing-spot">
          <h3>1<sup>st</sup></h3>
          <h3>2<sup>nd</sup></h3>
          <h3>3<sup>rd</sup></h3>
        </div> 
        <div className="finishing-drivers">
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
                First Place
              </InputLabel>
              <Select
                className="form-control"
                name="first_place"
                label="first place"
                error={!winners.first_place}
                value={winners.first_place}
                onChange={handleWinners}
              >
                {mappedDrivers}
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
              Second Place
            </InputLabel>
            <Select
              className="form-control"
              name="second_place"
              label="second place"
              value={winners.second_place}
              onChange={handleWinners}
            >
              {mappedDrivers}
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
              Third Place
            </InputLabel>
            <Select
              className="form-control"
              name="third_place"
              label="third place"
              value={winners.third_place}
              onChange={handleWinners}
            >
              {mappedDrivers}
            </Select>
          </FormControl>
        </Box>
        </div>
      </div>
      {isError && (
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Must be a First Place Finisher
                </Typography>
              )}
      <Button variant="outlined" color="error" onClick={handleSubmit}>Submit</Button>
      </Card>
    </div>
  )
}

export default Podium
