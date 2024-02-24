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
  defaultvalue:string;
  handleChange: (event: string) => void;
}
const SelectInputField: React.FC<SearchFieldProps> = ({
  list,
  selectedState,
  defaultvalue,
  handleChange,
}) => {
  return (
      <FormControl className={styles.selectContainer}>
        <Select
          value={selectedState}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          displayEmpty
        >
          <MenuItem value="" disabled>
            {defaultvalue}
          </MenuItem>
          { list &&
          Array.isArray(list) &&
          list.map((object) => (
            <MenuItem key={object.id} value={object.name}>
              {object.name}
            </MenuItem>
          ))} : 'Data is Not Available'
        </Select>
      </FormControl>
  );
};

export default SelectInputField;
