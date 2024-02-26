import { Box, Stack } from "@mui/material";
import CardWithDetails, {
  ICard,
} from "../../components/CardWithDetails/CardWithDetails";
import TournamentListingStyles from "./TournamentListing.module.scss";
import clubListingImage from "../../assets/image 25.svg";
import { detailedCardList } from "../../DummyData/CardWithDetails";
import SectionHeading from "../../components/HeadingField/HeadingField";

const TournamentListing = () => {
  return (
    <Box className={TournamentListingStyles.clubsList}>
      <Box className={TournamentListingStyles.clubsListImage}>
        <img src={clubListingImage} alt="" />
      </Box>
      <Stack className={TournamentListingStyles.clubsListContainer}>
        <Box className={TournamentListingStyles.heading}>
          <SectionHeading
            heading={"TOURNAMENT"}
            subHeading={"EXPLORE TOURNAMENT LIST IN "}
          />
        </Box>
        <Box>
          <Box className={TournamentListingStyles.cardsContainer}>
            {detailedCardList &&
              Array.isArray(detailedCardList) &&
              detailedCardList.length > 0 &&
              detailedCardList.map((card: ICard) => (
                <CardWithDetails card={card} tournament={true} />
              ))}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
export default TournamentListing;
