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
        image={props.entry.carImage}
        alt={props.entry.car}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.entry.team} - #{props.entry.number} - {props.entry.classification}
        </Typography>
        <table>
          <tbody>
          <tr>
            <th>Driver</th>
            <th>Nationality</th>
            <th>Rating</th>
          </tr>
          <tr>
            <td>{props.entry.driver1.name}</td>
            <td>{props.entry.driver1.nationality}</td>
            <td>{props.entry.driver1.rating}</td>
          </tr>
          <tr>
            <td>{props.entry.driver2.name}</td>
            <td>{props.entry.driver2.nationality}</td>
            <td>{props.entry.driver2.rating}</td>
          </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  )
}

export default DriverDetails
