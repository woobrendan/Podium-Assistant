export default function ToggleSort() {
  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel htmlFor="exampleFormControlSelect2">
            Search Options
          </InputLabel>
          <Select
            className="form-control"
            name="search-by"
            label="Search Options"
            value={searchOption}
            onChange={handleToggle}
          >
            {mappedOptions}
          </Select>
        </FormControl>
      </Box>
    </div>
  )
}

