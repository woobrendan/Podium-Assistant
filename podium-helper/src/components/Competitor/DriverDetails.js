import { Typography, CardMedia, CardContent, Card, Button, CardHeader, Avatar } from '@mui/material';
import DriverTable from './DriverTable';
import Elevation from './elevationPaper';
import classNames from 'classnames';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {useState} from 'react';
import GTWCA from '../../images/GTWCA.png';

function DriverDetails(props) {
  const series = props.entry.series;
  const [driverInfo, setDriverInfo] = useState(false)
  const detailClass = classNames('entry-detail__item', {
    "entry-detail_GTWCA": series === "GT World Challenge America",
    "entry-detail_PGT4A": series === "Pirelli GT4 America",
    "entry-detail_TCA": series === "TC America",
    "entry-detail_GTA": series === "GT America",
  })

  const handleToggle = () => {
    driverInfo ? setDriverInfo(false) : setDriverInfo(true)
  }
  console.log('prop', props.entry)

  return (
    <div className="competitor-card">
      <Card 
        className={detailClass}
        sx={{ 
          maxWidth: 345, 
          minHeight: 450,
          minWidth: 345
      }}>
        <CardHeader 
          avatar={<Avatar alt={props.series} src={GTWCA} />} 
        />

        <CardMedia
          component="img"
          height="180"
          image={props.entry.image}
          alt={props.entry.car}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.entry.team} #{props.entry.number} 
          </Typography>
          <Elevation 
            series={series}
            car={props.entry.vehicle}
            class={props.entry.class}
          />
          <div className="driver-info-toggle">
            <h4>Drivers</h4>
            <Button onClick={() => handleToggle()}>
              {!driverInfo && 
                <AddCircleOutlineIcon 
                  color="warning"
                  fontSize="large"
                />}
              {driverInfo && 
                <RemoveCircleOutlineIcon 
                  color="warning"
                  fontSize="large"
                />}
            </Button>
          </div>
          {driverInfo && <DriverTable drivers={props.entry} />}
        </CardContent>
      </Card>
    </div>
  )
}

export default DriverDetails
