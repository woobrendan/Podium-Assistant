import { TextField } from "@mui/material"

function SearchBar() {
  return (
    <TextField 
      label='Search' 
      variant="outlined" 
      color="error"
      value={searchValue}
      onChange={e => {setSearchValue(e.target.value)}}
    />
  )
}

export default SearchBar