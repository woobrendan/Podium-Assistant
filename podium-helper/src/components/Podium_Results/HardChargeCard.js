const HardChargeCard = () => {
  return (
    <Card className="hard_charger_container">
      <h2>{series.name === grCup ? "Hard Charger" : "E-Boost Hard Charger"}</h2>
      <Box className="hard_charger__input">
        <FormControl>
          <InputLabel>Entry</InputLabel>
          <Select
            className="form-control"
            name="entry"
            label="Entry"
            value={hardCharge.entry}
            onChange={handleChange}
          >
            {mapSingleDrivers}
          </Select>
        </FormControl>
      </Box>
      <Box className="hard_charger__input">
        <TextField
          id="outlined"
          label="Positions Gained"
          name="positions"
          value={hardCharge.gain}
          onChange={handleChange}
        />
      </Box>
      <Button
        variant="contained"
        color={isSubmitted ? "success" : "error"}
        onClick={handleClick}
      >
        {isSubmitted ? "Update" : "Submit"}
      </Button>
    </Card>
  );
};

export default HardChargeCard;
