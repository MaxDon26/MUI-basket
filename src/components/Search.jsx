import { TextField } from "@mui/material";
const Search = (props) => {
  const { onChange, value } = props;

  return (
    <TextField
      label="search"
      type="search"
      fullWidth
      variant="standard"
      value={value}
      onChange={onChange}
      sx={{ mb: "1rem" }}
    />
  );
};

export default Search;
