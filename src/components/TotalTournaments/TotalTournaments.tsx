import { Box } from "@mui/material";
import TotalTournament from "./TotalTournament.module.scss";
import React from "react";
interface ITournamentsProps {
  heading: string;
}
const SecondarySectionHeading: React.FC<ITournamentsProps> = ({ heading }) => {
  return (
    <>
      <Box className={TotalTournament.title}>
        <Box className={TotalTournament.text}>{heading}</Box>
        <a href="default">View More</a>
      </Box>
    </>
  );
};
export default SecondarySectionHeading;
