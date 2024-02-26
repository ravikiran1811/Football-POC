import { Box, } from "@mui/material";
import sideNavstyles from "./SideNav.module.scss"
import React from "react";
interface ITournamentSummaryProps {
    content: string[]
}
const SideNav: React.FC<ITournamentSummaryProps> = ({ content }) => {
    return (
        <>
            <Box className={sideNavstyles.navbar}>
                {
                    content.map((tournamentTitle: any) => (
                
                        <Box className={sideNavstyles.contentDiv}>
                            <Box className={sideNavstyles.navContent} id="summary">{tournamentTitle}</Box>
                        </Box>
                    ))}
                    </Box>
            
        </>
    )
}
export default SideNav;