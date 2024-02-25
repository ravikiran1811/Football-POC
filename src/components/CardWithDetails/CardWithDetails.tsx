import { Box, Typography } from "@mui/material";
import { DetailedCard } from "../../DummyData/CardWithDetails";
import CardWthDetailsStyles from './CardWithDetails.module.scss'
const CardWithDetails = () => {
  return (
    <Box className={CardWthDetailsStyles.cards}>
      {DetailedCard.map((card: any) => (
        <Box className={CardWthDetailsStyles.eachCard}>
          <Box className={CardWthDetailsStyles.part1}>
            <Box className={CardWthDetailsStyles.academyTag}>
              <Box className={CardWthDetailsStyles.academyIcon}>
                <img src={card.academyIcon} />
              </Box>
              <Box>
                <Typography  className={CardWthDetailsStyles.certification}>{card.certification}</Typography>
              </Box>
            </Box>
            <Box  className={CardWthDetailsStyles.clubImage}>
              <img src={card.clubImage} />
            </Box>
            <Box className={CardWthDetailsStyles.yearsTag}>
              <Box className={CardWthDetailsStyles.star}>
                <img src={card.star} />
              </Box>
              <Box>
                <Typography  className={CardWthDetailsStyles.years}>{card.years}</Typography>
              </Box>
            </Box>
          </Box>

          <Box className={CardWthDetailsStyles.part2}>
                <Box>
                    <Typography className={CardWthDetailsStyles.cardTitle}>{card.title}</Typography>
                </Box>
                <Box>
                    <Typography className={CardWthDetailsStyles.cardDescription}>{card.description}</Typography>
                </Box>
                <Box className={CardWthDetailsStyles.address}>
                   <Box className={CardWthDetailsStyles.eachAddress}>
                    <Box>
                        <img src={card.locationIcon} />
                    </Box>
                   <Typography className={CardWthDetailsStyles.eachAddressTexts}>{card.location}</Typography>
                   </Box>
                   <Box className={CardWthDetailsStyles.eachAddress}>
                   <Box>
                        <img src={card.groupIcon} />
                    </Box>
                   <Typography className={CardWthDetailsStyles.eachAddressTexts}>{card.group}</Typography>
                   </Box>
                   {card.tierFlag&&(
                      <Box className={CardWthDetailsStyles.eachAddress}>
                      <Box>
                           <img src={card.tierIcon} />
                       </Box>
                      <Typography className={CardWthDetailsStyles.eachAddressTexts}>{card.tier}</Typography>
                      </Box>
                   )}
                 
                </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default CardWithDetails;
