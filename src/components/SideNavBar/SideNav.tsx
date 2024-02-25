import { Box, } from "@mui/material";
import sideNavstyles from "./SideNav.module.scss"
const SideNav = () => {
    return (
        <>
            <Box className={sideNavstyles.navbar}>
                <Box  className={sideNavstyles.contentDiv}>
                    <Box className={sideNavstyles.navContent} id="summary">Summary</Box>
                </Box>
                <Box className={sideNavstyles.contentDiv}>
                    <Box className={sideNavstyles.navContent} id="timeline">TimeLine</Box>
                </Box>
                <Box className={sideNavstyles.contentDiv}>
                    <Box className={sideNavstyles.navContent} id="hallOfFame">Hall of Fame</Box>
                </Box>
            </Box>
        </>
    )
}
export default SideNav;