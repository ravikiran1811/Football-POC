import { Box } from "@mui/material";
import HeadingField from "../HeadingField/HeadingField";
import DetailsFieldStyles from './DetailsField.module.scss';
const  DetailsField= () => {
    return(
        <Box className={DetailsFieldStyles.detailsField}>
      <Box>
        <HeadingField heading="SOCCER SCOUT" subHeading="WHY" />
      </Box>
      <Box>
        <Box className={DetailsFieldStyles.detailsField__description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nobis!</Box>
      </Box>
    </Box>
    )
}
export default DetailsField