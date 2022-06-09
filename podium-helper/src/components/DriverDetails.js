import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DriverTable from './DriverTable';
import Elevation from './elevationPaper';

function DriverDetails(props) {
  return (
    <div className="competitor-card">
      <Card sx={{ 
        maxWidth: 345, 
        minHeight: 661,
        minWidth: 345
      }}>
        <CardMedia
          component="img"
          height="180"
          image={props.entry.carImage}
          alt={props.entry.car}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.entry.team} #{props.entry.number} 
          </Typography>
          <Elevation 
            series={props.entry.series}
            car={props.entry.car}
            class={props.entry.classification}
          />
          <DriverTable  drivers={props.entry} />
        </CardContent>
      </Card>
    </div>
  )
}

export default DriverDetails
