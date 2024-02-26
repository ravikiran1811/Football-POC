import { Box, } from "@mui/material";
import sideNavstyles from "./SideNav.module.scss"
import React, { useState } from "react";
interface ITournamentSummaryProps {
    content: any
}
const SideNav: React.FC<ITournamentSummaryProps> = ({ content }) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const handleClick = (tournamentTitle: string) => {
        setSelectedItem(tournamentTitle);
    };
    return (
        <>
            <Box className={sideNavstyles.navbar}>
                {
                    content && Array.isArray(content) && content.length!=0 && content.map((tournamentTitle: any) => (
                        <Box key={tournamentTitle.content}
                        className={`${sideNavstyles.contentDiv} ${
                            selectedItem === tournamentTitle.content
                                ? sideNavstyles.selectedContentDiv
                                : ""
                        }`}>
                            <Box className={sideNavstyles.navContent}><a href={`#${tournamentTitle.content}`} className={sideNavstyles.anchorStyles} onClick={()=>handleClick(tournamentTitle.content)}>{tournamentTitle.content}</a></Box>
                        </Box>
                    ))}
                    </Box>
        </>
    )
}
export default SideNav;