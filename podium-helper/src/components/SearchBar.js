import { TextField } from "@mui/material";

const SearchBar = ({ getSearchValue }) => {
  const [searchValue, setSearchValue] = useState("");

  const onChangeHandler = (event) => {
    setSearchValue(event.target.value);
    getSearchValue(event.target.value);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      color="error"
      value={searchValue}
      // onChange={e => {setSearchValue(e.target.value)}}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBar;
