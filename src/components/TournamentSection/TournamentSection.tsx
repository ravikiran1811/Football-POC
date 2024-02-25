import { Box } from "@mui/material";
import TournamentSectionStyles from "./TournamentSection.module.scss"
// import CardText from "../CardHeading/CardText";
// import ShowCard from "../CardSecondary/ShowCard";
import DisplayCard from "../Card/DisplayCard";
import { card } from "../../DummyData/CardData";
import TotalTournaments from "../TotalTournaments/TotalTournaments";
// import TotalCard from "../CardTeritary/TotalCard";
const TournamentSection = () => {
    return (
        <>
            <Box className={TournamentSectionStyles.totalTournament}>
                <TotalTournaments Tournament={"NATIONAL AND TROPHY"} />
                <DisplayCard cardArray={card.primary} nameOfTheClass={"primary"}/>
                <TotalTournaments Tournament={"LOCAL AND STATE"} />
                <DisplayCard cardArray={card.teritiary} nameOfTheClass={"teritiary"}/>
            </Box>
        </>
    )
}
export default TournamentSection;