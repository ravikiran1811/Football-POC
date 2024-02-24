import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SelectInputStyles from "./SelectInput.module.scss";

interface Item {
  id: number;
  name: string;
}

interface SearchFieldProps {
  list: Item[];
  selectedState: string;
  handleChange?: (event: string) => void;
  mobileNumber?: boolean;
  register?: any;
  error?: string;
}

const SelectInputField: React.FC<SearchFieldProps> = ({
  list,
  selectedState,
  mobileNumber = false,
  register,
  error,
}) => {
  return (
    <FormControl
      className={` ${
        mobileNumber
          ? SelectInputStyles.mobileNumber
          : SelectInputStyles.selectContainer
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
        {...register}
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
      {error && <p className={SelectInputStyles.error}>{error}</p>}
    </FormControl>
  );
};

export default SelectInputField;
