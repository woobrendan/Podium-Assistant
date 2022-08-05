import { Typography, CardMedia, CardContent, Card } from '@mui/material';
import DriverTable from './DriverTable';
import Elevation from '../elevationPaper';
import classNames from 'classnames';

function DriverDetails(props) {
  const series = props.entry.series;
  const detailClass = classNames('entry-detail__item', {
    "entry-detail_GTWCA": series === "GT World Challenge America",
    "entry-detail_PGT4A": series === "Pirelli GT4 America",
    "entry-detail_TCA": series === "TC America",
    "entry-detail_GTA": series === "GT America",
  })
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
            class={props.entry.classification}
          />
          <DriverTable  drivers={props.entry} />
        </CardContent>
      </Card>
    </div>
  )
}

export default DriverDetails
