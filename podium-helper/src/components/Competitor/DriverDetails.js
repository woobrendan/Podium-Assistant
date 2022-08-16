import {useState} from 'react';
import { CardMedia, CardContent, Card, Button, CardHeader, Avatar } from '@mui/material';
import DriverTable from './DriverTable';
import Elevation from './elevationPaper';
import classNames from 'classnames';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { getManufLogo } from '../../helperFunc';
import GTWCA from '../../images/GTWCA.png';
import PGT4A from '../../images/PGT4A.png';
import GTAM from '../../images/GTAM.png';
import TCAM from '../../images/TCAM.png';
import porscheLogo from '../../images/Porsche-Symbol.png';
import bmwLogo from '../../images/bmw.png'
import mercedesLogo from '../../images/mercedes.png'
import acuraLogo from '../../images/acura.png';
import astonMartin from '../../images/aston_martin.png';
import ferrari from '../../images/ferrari.png';
import ginetta from '../../images/ginetta.png';
import honda from '../../images/honda.png';
import lamborghini from '../../images/lamborghini.png';
import MINI from '../../images/MINI.png';
import toyota from '../../images/toyota.png';


function DriverDetails(props) {
  const series = props.entry.series;
  const [driverInfo, setDriverInfo] = useState(false);

  const detailClass = classNames('entry-detail__item', {
    "entry-detail_GTWCA": series === "GT World Challenge America",
    "entry-detail_PGT4A": series === "Pirelli GT4 America",
    "entry-detail_TCA": series === "TC America",
    "entry-detail_GTA": series === "GT America",
  })

  const handleToggle = () => {
    driverInfo ? setDriverInfo(false) : setDriverInfo(true)
  }

  const getSeriesLogo = (series) => {
    switch(series){
      case 'GT World Challenge America': return GTWCA;
      case "Pirelli GT4 America": return PGT4A;
      case "TC America": return TCAM;
      case "GT America": return GTAM
    }
  }
  // console.log('props', props.entry)

  const manufacturerCheck = (vehicle) => {
    if (vehicle.includes('Porsche')) return porscheLogo
    else if (vehicle.includes('BMW')) return bmwLogo;
    else if (vehicle.includes('Mercedes')) return mercedesLogo;
    else if (vehicle.includes('Acura')) return acuraLogo
    else if (vehicle.includes('Aston')) return astonMartin
    else if (vehicle.includes('Ferrari')) return ferrari;
    else if (vehicle.includes('Ginetta')) return ginetta;
    else if (vehicle.includes('Honda')) return honda;
    else if (vehicle.includes('Lambo')) return lamborghini;
    else if (vehicle.includes('MINI')) return MINI;
    else if (vehicle.includes('Toyota')) return toyota;
  }

  return (
    <div className="competitor-card">
      <Card 
        className={detailClass}
        sx={{ 
          maxWidth: 345, 
          minHeight: 450,
          minWidth: 375
      }}>
        <CardHeader 
          sx={{minHeight: 100, maxwidth: 325}}
          avatar={<Avatar 
            alt={series} 
            src={getSeriesLogo(series)}
            sx={{bgcolor: 'white', width: 59, height: 59}} 
          />}
          title={props.entry.team} 
        />
        <Avatar
          className="manufacturer-avatar" 
          alt={props.entry.vehicle} 
          src={getManufLogo(props.entry.vehicle)}
          sx={{bgcolor: 'white', width: 59, height: 59}} 
        />
        <CardMedia
          component="img"
          height="180"
          image={props.entry.image}
          alt={props.entry.car}
        />
        <div className="car-number">
          #{props.entry.number}
        </div>
        <CardContent>
          <Elevation 
            series={series}
            car={props.entry.vehicle}
            class={props.entry.class}
          />
          {props.entry.driver1 && 
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
          }
          {driverInfo && <DriverTable drivers={props.entry} />}
        </CardContent>
      </Card>
    </div>
  )
}

export default DriverDetails
