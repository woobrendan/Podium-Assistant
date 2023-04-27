const EntryDetails = () => {
  return (
    <div className="entry-details">
      <EntryHighlights
        series={series}
        car={vehicle}
        classification={classification}
      />
      <DriverTable drivers={entry} />
    </div>
  );
};

export default EntryDetails;
