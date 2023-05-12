import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import missing from "../images/Missing_car.png";

const NoResults = () => {
  return (
    <div className="No-Result">
      <Card>
        <CardMedia component="img" image={missing} alt="No Vehicles Found" />
        <CardContent>
          <Typography gutterBottom variant="h2" component="div" color="error">
            No Results Found
          </Typography>
          <Typography variant="body2" color="error">
            We couldn't find what you were searching for. Try searching again
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoResults;
