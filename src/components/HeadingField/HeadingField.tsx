import { Box } from "@mui/material";
import HeadingFieldStyles from './HeadingField.module.scss'
interface IHeadingFieldProps {
    heading: string;
    subHeading: string;
  }
  const HeadingField: React.FC<IHeadingFieldProps> = ({ heading, subHeading }) => {

    return(
        <Box className={HeadingFieldStyles.headingField}>
            <p className={HeadingFieldStyles.subHeading}>{subHeading}</p>
            <p className={HeadingFieldStyles.heading}>{heading}</p>
        </Box>
    )
}
export default HeadingField;