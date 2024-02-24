import React from 'react';
import MobileNumberStyles from './MobileNumberComponent.module.scss';
import TextField from '@mui/material/TextField';
import InputComponent from '../InputFeild/InputFeild';
import SelectInputField from '../SelectInputField/SelectInputField';
import MobileNumberComponentStyles from './MobileNumberComponent.module.scss'
interface Item {
  id: number;
  name: string;
}
interface IMobile{
    placeholder:string;
    inputField:(a:string)=>void;
    selectField:(a:string)=> void;
    label:string;
    list: Item[];
    selectedState:string;
}
const MobileNumberComponent = (props:IMobile) => {
  const {placeholder,inputField,selectField,label,list,selectedState}=props;
  return (
    <div className={MobileNumberComponentStyles.container}>
    <div className={MobileNumberComponentStyles.selectField}>
    <SelectInputField list={list} selectedState={selectedState} handleChange={selectField}/>
    </div>
    <div className={MobileNumberComponentStyles.inputField}>
    <InputComponent placeholder={placeholder} label={label} handleInputFunction={inputField} />
    </div>
    </div>
  );
};

export default MobileNumberComponent;
