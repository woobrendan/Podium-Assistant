import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// {
//   team: "K-PAX",
//   driver1: {
//     name: 'Misha Goikhberg',
//     nationality: 'Canada',
//     rating: 'Silver'
//     },
//   driver2: {
//     name: 'Jordan Pepper',
//     nationality: 'South Africa',
//     rating: 'Gold'
//     },
//   car: "Lamborghini Huracan GT3",
//   carImage: "xxxxxx"
//   classification: "Pro",
//   number: "1"
// },

function DriverDetails(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.carImage}
        alt={props.car}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.team} #{props.number}
        </Typography>
        <table>
          <tr>
            <th>Driver</th>
            <th>Nationality</th>
            <th>Rating</th>
          </tr>
          <tr>
            <td>{props.driver1.name}</td>
            <td>{props.driver1.nationality}</td>
            <td>{props.driver1.rating}</td>
          </tr>
          <tr>
            <td>{props.driver2.name}</td>
            <td>{props.driver2.nationality}</td>
            <td>{props.driver2.rating}</td>
          </tr>
        </table>
      </CardContent>
    </Card>
  )
}

export default DriverDetails
