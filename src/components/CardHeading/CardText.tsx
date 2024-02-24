import { Box } from "@mui/material";
import { cardsHeading } from "../../DummyData/CardsHeading";
import CardTextStyle from "./CardText.module.scss"
const CardText = () => {
    return (
       <>
        <Box className = {CardTextStyle.title}>
            {
                cardsHeading.map((e:any)=>(
                    <Box>
                        {e.heading}
                    </Box>
                ))
            }
          
        </Box>
       </>
    )
}
export default CardText;