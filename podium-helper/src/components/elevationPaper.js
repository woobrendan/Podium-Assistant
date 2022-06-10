import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 50,
  lineHeight: '50px',
  width: 200
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Elevation(props) {
  const details = [props.series, props.car, props.class];

  return (
    <div className="entry-details">
      <Grid container spacing={3}>
          <Grid item xs={6} >
            <ThemeProvider theme={lightTheme}>
              <Box
                sx={{
                  p: 2,
                  display: 'grid',
                  gap: 1,
                }}
              >
                {details.map((detail, index) => (
                  <Item key={index} elevation={3}>
                    {detail}
                  </Item>
                ))}
              </Box>
            </ThemeProvider>
          </Grid>
      </Grid>
    </div>
  );
}