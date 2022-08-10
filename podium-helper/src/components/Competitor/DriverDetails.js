import { Typography, CardMedia, CardContent, Card, Button } from '@mui/material';
import DriverTable from './DriverTable';
import Elevation from './elevationPaper';
import classNames from 'classnames';
import $ from "jquery";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {useState} from 'react';

function DriverDetails(props) {
  const series = props.entry.series;
  const [driverInfo, setDriverInfo] = useState(false)
  const detailClass = classNames('entry-detail__item', {
    "entry-detail_GTWCA": series === "GT World Challenge America",
    "entry-detail_PGT4A": series === "Pirelli GT4 America",
    "entry-detail_TCA": series === "TC America",
    "entry-detail_GTA": series === "GT America",
  })

  const handleToggle = (id) => {
    //check if driver info is showing, toggle hidden attribute and change add/minus icon accordingly
    if ($(`#card-driver-${id}`).is('[hidden]')) {
      $(`#card-driver-${id}`).removeAttr('hidden');
      setDriverInfo(true)
    } else {
      $(`#card-driver-${id}`).attr('hidden', '');
      setDriverInfo(false)
    }
  }

  return (
    <div className="competitor-card">
      <Card 
        className={detailClass}
        sx={{ 
          maxWidth: 345, 
          minHeight: 661,
          minWidth: 345
      }}>
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
          <br></br>
          <div className="driver-info-toggle">
            <h4>Drivers</h4>
            <Button onClick={() => handleToggle(props.index + 1)}>
              {!driverInfo && <AddCircleOutlineIcon 
                color="warning"
                fontSize="large"
              />}
              {driverInfo && <RemoveCircleOutlineIcon 
                color="warning"
                fontSize="large"
                />
              }
            </Button>
          </div>
          <DriverTable  drivers={props.entry} index={props.index} />
        </CardContent>
      </Card>
    </div>
  )
}

export default DriverDetails
