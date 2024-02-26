import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import tournamentStyles from './Tournament.module.scss';
import tournamentHomePage from '../../assets/image 56.svg';
import {constants} from '../../constants/stringConstants';
import {Typography} from '@mui/material';
import arrow from '../../assets/CaretLeft.svg'
interface ItournamentDetails{
  tournamentName:string;
  tournamentPrize:string;
  tournamentUpcomingMatch:string;
  tournamentClubAssociated:string;
  tournamentAgeGroup:string;
  tournamentLevel:string;
}
const TournamentDetais=(props:ItournamentDetails)=>{
  const navigate=useNavigate();
  const {tournamentName,tournamentPrize,tournamentUpcomingMatch,tournamentClubAssociated,tournamentAgeGroup,tournamentLevel}=props;
  return (
    <Box>
      <Box className={tournamentStyles.container}>
      <Box className={tournamentStyles.homeImage}>
        <img src={tournamentHomePage} />
      </Box>
      <Box className={tournamentStyles.backButton}>
        <img src={arrow} alt="arrow" />
        <Typography className={tournamentStyles.buttonText} onClick={() => navigate(-1)}>Back</Typography>
      </Box>
      <Box className={tournamentStyles.homeImage__textleft}>
        <Typography className={tournamentStyles.textStyle}>{tournamentName}</Typography>
      </Box>
      <Box className={tournamentStyles.homeImage__textright}>
        <Box className={tournamentStyles.rightTextFirstLine}>
        <Box>
           <Typography>{constants.tournamentPagedetails.tournamentName}</Typography>
           <Typography>{tournamentName}</Typography>
        </Box>
         <Box>
           <Typography>{constants.tournamentPagedetails.clubsAssociated}</Typography>
           <Typography>{tournamentClubAssociated}</Typography>
        </Box>
        </Box>
        <Box className={tournamentStyles.rightTextFirstLine}>
         <Box>
           <Typography>{constants.tournamentPagedetails.totalPrizePool}</Typography>
           <Typography>{tournamentPrize}</Typography>
        </Box>
        <Box>
           <Typography>{constants.tournamentPagedetails.ageGroup}</Typography>
           <Typography>{tournamentAgeGroup}</Typography>
        </Box>
        </Box>
       <Box className={tournamentStyles.rightTextFirstLine}>
        <Box>
           <Typography>{constants.tournamentPagedetails.upcomingMatch}</Typography>
           <Typography>{tournamentUpcomingMatch}</Typography>
        </Box>
        <Box>
           <Typography>{constants.tournamentPagedetails.level}</Typography>
           <Typography>{tournamentLevel}</Typography>
        </Box>
        </Box>
      </Box>
    </Box>
    </Box>
  )
}
export default TournamentDetais;
