import { useState } from "react";
import {
  CardMedia,
  CardContent,
  Card,
  Button,
  CardHeader,
  Avatar,
} from "@mui/material";
import DriverTable from "./DriverTable";
import EntryHighlights from "./EntryHighlights";
import classNames from "classnames";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { getManufLogo, getClassBannerImg } from "../../functions/getImages";
import {
  GTWCA,
  PGT4A,
  GTAM,
  TCAM,
  IGTC,
  GRCUP,
} from "../../images/series_logos";
import {
  gtwca,
  tcam,
  gtam,
  gt4a,
  igtc,
  grCup,
} from "../../functions/helperFunc";

const DriverDetails = ({ entry }) => {
  const [entryInfo, setEntryInfo] = useState(false);
  const { series, carImage, vehicle, team, number, classification } = entry;

  const detailClass = classNames("entry-detail__item", {
    "entry-detail_GTWCA": series === gtwca,
    "entry-detail_PGT4A": series === gt4a,
    "entry-detail_TCA": series === tcam,
    "entry-detail_GTA": series === gtam,
    "entry-detail_IGTC": series === igtc,
    "entry-detail_GRCup": series === grCup,
  });

  const handleToggle = () => {
    entryInfo ? setEntryInfo(false) : setEntryInfo(true);
  };

  const getSeriesLogo = (series) => {
    if (series === igtc) return IGTC;
    if (series === gt4a) return PGT4A;
    if (series === tcam) return TCAM;
    if (series === gtam) return GTAM;
    if (series === grCup) return GRCUP;
    return GTWCA;
  };

  return (
    <div className="competitor-card">
      <Card className={detailClass}>
        {!entryInfo && (
          <div className="entry-media">
            <CardHeader
              avatar={<Avatar alt={series} src={getSeriesLogo(series)} />}
              title={team}
            />
            <Avatar
              className="manufacturer-avatar"
              alt={vehicle}
              src={getManufLogo(vehicle)}
            />
            <CardMedia
              component="img"
              height="180"
              image={carImage}
              alt={vehicle}
            />
            <br></br>
            <img
              className="class-banner-img"
              src={getClassBannerImg(classification, series)}
              alt={classification}
            />
            <div className={`car_number len_${number.length}`}>#{number}</div>
          </div>
        )}
        <CardContent>
          {entryInfo && (
            <div className="entry-details">
              <EntryHighlights
                series={series}
                car={vehicle}
                classification={classification}
              />
              <DriverTable drivers={entry} />
            </div>
          )}
          <div className="driver-info-toggle">
            <h4>Details</h4>
            <Button onClick={() => handleToggle()}>
              {!entryInfo && (
                <AddCircleOutlineIcon color="warning" fontSize="large" />
              )}
              {entryInfo && (
                <RemoveCircleOutlineIcon color="warning" fontSize="large" />
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DriverDetails;
