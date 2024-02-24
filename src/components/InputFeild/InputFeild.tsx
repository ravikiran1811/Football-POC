import InputFieldStyles from "./InputFeild.module.scss";
import { Box, FormLabel } from "@mui/material";
interface IInput {
  placeholder: string;
  handleInputFunction?: (value: string) => void;
  label?: string;
  mobileNumber?: boolean;
}
const InputField = (props: IInput) => {
  const { placeholder, handleInputFunction, label, mobileNumber } = props;
  return (
    <Box
      className={`${InputFieldStyles.container}
        ${mobileNumber ? InputFieldStyles.mobileNumberContainer : ""}`}
    >
      {label && (
        <FormLabel className={InputFieldStyles.label}>{label}</FormLabel>
      )}
      <input
        className={`${InputFieldStyles.input}
        ${mobileNumber ? InputFieldStyles.noBorder : InputFieldStyles.border}
        `}
        placeholder={placeholder}
        onChange={(event) => {
          const inputValue = event.target.value;
          handleInputFunction && handleInputFunction(inputValue);
        }}
      />
    </Box>
  );
};
export default InputField;
