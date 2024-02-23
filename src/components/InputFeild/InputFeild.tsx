import InputFieldStyles from "./InputFeild.module.scss";
import { FormLabel, Input } from "@mui/material";
interface IInput {
  placeholder: string;
  handleInputFunction?: (value: string) => void;
  label: string;
  register?: any;
  error?: string;
}
const InputField = (props: IInput) => {
  const { placeholder, label, error, register } = props;
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Input
        className={InputFieldStyles.container}
        placeholder={placeholder}
        {...register}
      />
      {error && <p>{error}</p>}
    </>
  );
};
export default InputField;
