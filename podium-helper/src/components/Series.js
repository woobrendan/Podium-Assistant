import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const seriesName = ['GT World Challenge America', 'GT America', 'Pirelli GT4 America', 'TC America']

function Series() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    </Box>
  )
}

export default Series
