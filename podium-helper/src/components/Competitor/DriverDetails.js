import {useState} from 'react';
import { CardMedia, CardContent, Card, Button, CardHeader, Avatar } from '@mui/material';
import DriverTable from './DriverTable';
import Elevation from './elevationPaper';
import classNames from 'classnames';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { getManufLogo, getClassBannerImg } from '../../functions/getImages';
import GTWCA from '../../images/GTWCA.png';
import PGT4A from '../../images/PGT4A.png';
import GTAM from '../../images/GTAM.png';
import TCAM from '../../images/TCAM.png';
import IGTC from '../../images/igtc.jpeg';
import {gtwca, tcam, gtam, gt4a, igtc} from '../../functions/helperFunc'



function DriverDetails(props) {
  const [entryInfo, setEntryInfo] = useState(false);
  const entry = props.entry;
  const series = entry.series;

  const detailClass = classNames('entry-detail__item', {
    "entry-detail_GTWCA": series === gtwca,
    "entry-detail_PGT4A": series === gt4a,
    "entry-detail_TCA": series === tcam,
    "entry-detail_GTA": series === gtam,
    "entry-detail_IGTC": series === igtc
  })

  const handleToggle = () => {
    entryInfo ? setEntryInfo(false) : setEntryInfo(true)
  }

  const getSeriesLogo = (series) => {
    switch(series){
      case igtc: return IGTC;
      case gt4a: return PGT4A;
      case tcam: return TCAM;
      case gtam: return GTAM;
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
      {!entryInfo && <div className="entry-media">
        <CardHeader 
          sx={{minHeight: 100, maxwidth: 325}}
          avatar={<Avatar 
            alt={series} 
            src={getSeriesLogo(series)}
            sx={{bgcolor: 'white', width: 59, height: 59}} 
          />}
          title={entry.team} 
        />
        <Avatar
          className="manufacturer-avatar" 
          alt={entry.vehicle} 
          src={getManufLogo(entry.vehicle)}
          sx={{bgcolor: 'white', width: 59, height: 59}} 
        />
        <CardMedia
          component="img"
          height="180"
          image={entry.image}
          alt={entry.car}
        />
        <br></br>
        <img 
          className="class-banner-img"
          src={getClassBannerImg(entry.class, series)} 
          alt={entry.class} 
        />
        <div className={`car-number-${entry.number.length}`}>
          #{entry.number}
        </div>
      </div>}
        <CardContent>
          {entryInfo && <div className="entry-details">
            <Elevation 
              series={series}
              car={entry.vehicle}
              class={entry.class}
            />
            <DriverTable drivers={entry} />
          </div>}
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
        </CardContent>
      </Card>
    </div>
  )
}

export default DriverDetails
