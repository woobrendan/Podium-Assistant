import { MenuItem } from "@mui/material";

//determine if entry is single or two drivers and return corresponding menu item
const numOfDriverMenuItem = (entry) => {
  if (!entry.driver2) {
    return (
      <MenuItem key={`${entry.number} ${entry.driver1.name}`} value={entry}>
        #{entry.number} - {entry.driver1.name}
      </MenuItem>
    );
  } else if (entry.driver2 && !entry.driver3) {
    return (
      <MenuItem key={`${entry.number} ${entry.driver1.name}`} value={entry}>
        #{entry.number} - {entry.driver1.name} & {entry.driver2.name}
      </MenuItem>
    );
  } else {
    return (
      <MenuItem key={`${entry.number} ${entry.driver1.name}`} value={entry}>
        #{entry.number} - {entry.driver1.name} & {entry.driver2.name} &{" "}
        {entry.driver3.name}
      </MenuItem>
    );
  }
};

export { numOfDriverMenuItem };
