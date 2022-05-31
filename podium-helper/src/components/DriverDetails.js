import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DriverTable from './DriverTable';

function DriverDetails(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="180"
        image={props.entry.carImage}
        alt={props.entry.car}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.entry.team} #{props.entry.number} - {props.entry.classification}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {props.entry.car}
        </Typography>
        <DriverTable  drivers={props.entry} />
      </CardContent>
    </Card>
  )
}

export default DriverDetails
