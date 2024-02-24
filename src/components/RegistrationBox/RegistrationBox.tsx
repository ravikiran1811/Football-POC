import { Box,Button, Typography } from "@mui/material"
import RegistrationBoxStyles from './RegistrationBox.module.scss'
import WhiteBoxIcon from '../../assets/WhiteBoxIcon.svg'
import React from "react";
// import Button from "../../themes/overrides/Button";
interface IRegistrationBoxProps {
    heading: string;
    subHeading: string;
  }
const RegistrationBox: React.FC<IRegistrationBoxProps> = ({ heading, subHeading }) =>{
    return(
        <Box className={RegistrationBoxStyles.RegistrationBox}>
            <Box className={RegistrationBoxStyles.RegistrationBox__image}>
            <img className={RegistrationBoxStyles.RegistrationBox__imageStyle} src={WhiteBoxIcon}></img>
            </Box> 
            <Box  className={RegistrationBoxStyles.RegistrationBox__headings}>
                <Typography className={RegistrationBoxStyles.RegistrationBox__headings__heading}>{heading}</Typography>
                <Typography className={RegistrationBoxStyles.RegistrationBox__headings__subHeading}>{subHeading}</Typography>
            </Box>
            <Box className={RegistrationBoxStyles.RegistrationBox__Button}>
            <Button className={RegistrationBoxStyles.RegistrationBox__Button__registrationButton}>Register</Button>
            </Box>
        </Box>
    )
}
export default RegistrationBox;