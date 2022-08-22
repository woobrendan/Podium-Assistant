import {useState} from 'react';
import { CardMedia, CardContent, Card, Button, CardHeader, Avatar } from '@mui/material';
import DriverTable from './DriverTable';
import Elevation from './elevationPaper';
import classNames from 'classnames';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { getManufLogo, getClassBannerImg } from '../../helperFunc';
import GTWCA from '../../images/GTWCA.png';
import PGT4A from '../../images/PGT4A.png';
import GTAM from '../../images/GTAM.png';
import TCAM from '../../images/TCAM.png';



function DriverDetails(props) {
  const series = props.entry.series;
  const [entryInfo, setEntryInfo] = useState(false);

  const detailClass = classNames('entry-detail__item', {
    "entry-detail_GTWCA": series === "GT World Challenge America",
    "entry-detail_PGT4A": series === "Pirelli GT4 America",
    "entry-detail_TCA": series === "TC America",
    "entry-detail_GTA": series === "GT America",
  })

  const handleToggle = () => {
    entryInfo ? setEntryInfo(false) : setEntryInfo(true)
  }

  const getSeriesLogo = (series) => {
    switch(series){
      // case 'GT World Challenge America': return GTWCA;
      case "Pirelli GT4 America": return PGT4A;
      case "TC America": return TCAM;
      case "GT America": return GTAM;
      default: return GTWCA;
    }
  }

  return (
    <div className="competitor-card">
      <Card 
        className={detailClass}
        sx={{ 
          maxWidth: 345, 
          minHeight: 375,
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
        <br></br>
        <img 
          className="class-banner-img"
          src={getClassBannerImg(props.entry.class, series)} 
          alt={props.entry.class} 
        />
        <div className="car-number">
          #{props.entry.number}
        </div>
        <CardContent>
            <div className="driver-info-toggle">
              <h4>Details</h4>
              <Button onClick={() => handleToggle()}>
                {!entryInfo && 
                  <AddCircleOutlineIcon 
                    color="warning"
                    fontSize="large"
                  />}
                {entryInfo && 
                  <RemoveCircleOutlineIcon 
                    color="warning"
                    fontSize="large"
                  />}
              </Button>
            </div>
          {entryInfo && <Elevation 
            series={series}
            car={props.entry.vehicle}
            class={props.entry.class}
          />}
          {entryInfo && <DriverTable drivers={props.entry} />}
        </CardContent>
      </Card>
    </div>
  )
}

export default DriverDetails
