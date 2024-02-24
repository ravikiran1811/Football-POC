import { Box } from "@mui/material";
import HeadingFieldStyles from './HeadingField.module.scss'
import React from "react";
interface IHeadingFieldProps {
    heading: string;
    subHeading: string;
  }
  const HeadingField: React.FC<IHeadingFieldProps> = ({ heading, subHeading }) => {

    return(
        <Box className={HeadingFieldStyles.headingField}>
            <Box className={HeadingFieldStyles.subHeading}>{subHeading}</Box>
            <Box className={HeadingFieldStyles.heading}>{heading}</Box>
        </Box>
    )
}
export default HeadingField;