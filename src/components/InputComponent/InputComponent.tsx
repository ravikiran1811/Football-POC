interface IInput  {
    placeholder:string;
    handleInputFunction: (value:string) => void;
    label: string;
}

import InputScss from './InputComponent.module.scss'
import { FormLabel, Input } from "@mui/material";

const InputComponent = (props:IInput) => {
  const {placeholder, handleInputFunction,label} = props;
  return (
    <>
    <FormLabel>{label}</FormLabel>
    <Input
      className={InputScss.containerInput}
      placeholder={placeholder}
      onChange={(event) => {
        const inputValue=event.target.value;
        handleInputFunction(inputValue);
    }}
    />
    </>
  );
};
export default InputComponent;
