const EntryMedia = ({ entry }) => {
  return (
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
      <CardMedia component="img" image={carImage} alt={vehicle} />
      <br></br>
      <img
        className="class-banner-img"
        src={getClassBannerImg(classification, series)}
        alt={classification}
      />
      <div className={`car_number len_${number.length}`}>#{number}</div>
    </div>
  );
};

export default EntryMedia;
