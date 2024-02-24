import SelectInputField from "../SelectInputField/SelectInputField";
import InputComponent from "../InputFeild/InputFeild";
import MobileNumberComponentStyles from "./MobileNumberComponent.module.scss";

interface Item {
  id: number;
  name: string;
}

interface IMobile {
  placeholder: string;
  inputField: (a: string) => void;
  selectField: (a: string) => void;
  label: string;
  list: Item[];
  selectedState: string;
}

const MobileNumberComponent = (props: IMobile) => {
  const { placeholder, inputField, selectField, label, list, selectedState } =
    props;

  return (
    <div className={MobileNumberComponentStyles.container}>
      <div className={MobileNumberComponentStyles.selectField}>
        <SelectInputField
          mobileNumber={true}
          list={list}
          selectedState={selectedState ?? list[0].name}
          handleChange={selectField}
        />
      </div>
      <div className={MobileNumberComponentStyles.inputField}>
        <InputComponent
          mobileNumber={true}
          placeholder={placeholder}
          handleInputFunction={inputField}
        />
      </div>
    </div>
  );
};

export default MobileNumberComponent;
