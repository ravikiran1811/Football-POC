import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./SelectInput.module.scss";

interface Item {
  id: number;
  name: string;
}

interface SearchFieldProps {
  list: Item[];
  selectedState: string;
  handleChange: (event: string) => void;
  mobileNumber?: boolean;
}

const SelectInputField: React.FC<SearchFieldProps> = ({
  list,
  selectedState,
  handleChange,
  mobileNumber = false,
}) => {
  return (
    <FormControl
      className={` ${
        mobileNumber ? styles.mobileNumber : styles.selectContainer
      }`}
    >
      <Select
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: `${mobileNumber ? "none" : "1px solid #E0E0E0"}`,
          },
          "& .MuiOutlinedInput-input": {
            padding: "8.5px",
          },
        }}
        value={selectedState || (list.length > 0 ? list[0].name : "")}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      >
        {list &&
          Array.isArray(list) &&
          list.length > 0 &&
          list.map((object) => (
            <MenuItem key={object.id} value={object.name}>
              {object.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default SelectInputField;
