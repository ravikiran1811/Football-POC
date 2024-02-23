
import InputFieldStyles from './InputFeild.module.scss'
import { FormLabel, Input } from "@mui/material";
interface IInput  {
    placeholder:string;
    handleInputFunction: (value:string) => void;
    label: string;
}
const InputField = (props: IInput) => {
  
  const {placeholder, handleInputFunction,label} = props;
  return (
    <>
    <FormLabel>{label}</FormLabel>
    <Input
      className={InputFieldStyles.container}
      placeholder={placeholder}
      onChange={(event) => {
        const inputValue=event.target.value;
        handleInputFunction(inputValue);
    }}
    />
    </>
  );
};
export default InputField;
