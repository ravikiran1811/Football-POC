import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./SelectInput.module.scss";
interface Item {
  id: number;
  name: string;
}

interface Props {
  list: Item[];
  selectedState: string;
  handleChange: (event: string) => void;
}
// const selectInputStyle = {
//   margin: 1,
//   width: 300,
// };
const SelectInput: React.FC<Props> = ({
  list,
  selectedState,
  handleChange,
}) => {
  return (
    <div>
      <FormControl className={styles.selectContainer}>
        <Select
          value={selectedState}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select State
          </MenuItem>
          {list.map((object) => (
            <MenuItem key={object.id} value={object.name}>
              {object.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectInput;
