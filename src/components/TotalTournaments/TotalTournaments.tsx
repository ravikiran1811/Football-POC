import { Box } from "@mui/material";
import TotalTournament from "./TotalTournament.module.scss";
import React from "react";
interface ITournamentsProps{
   Tournament: string;
}
const TotalTournaments: React.FC<ITournamentsProps>= ({Tournament}) =>{
    return (
        <>
        <Box className = {TotalTournament.title}>
        <Box className = {TotalTournament.text}>{Tournament}</Box>
        <a href="default">View More</a>
        
        </Box>
        </>
    )
}
export default TotalTournaments ;