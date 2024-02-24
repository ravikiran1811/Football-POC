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
        <Box className = {TotalTournament.viewmore}><a href="">view more</a></Box>
        </Box>
        </>
    )
}
export default TotalTournaments ;