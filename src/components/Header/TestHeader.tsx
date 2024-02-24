// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import headerlogo from "../../assets/Frame 7.png";
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import game from '../../assets/1100229001-preview.mp4';
// import { HeaderList } from './HeaderData';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import styles from './Header.module.scss';
// const pages = HeaderList;
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
// function ResponsiveAppBar() {
//   const navigate = useNavigate();
//   const [showSublinks, setShowSublinks] = useState(false);
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <>
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <div className={styles.container__logo}>
//             <img src={headerlogo} onClick={() => navigate("/home")} />
//            </div>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page.id} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page.name}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
    
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
  
//               {HeaderList.map((page, index) => (
//         <Box className={index === 3 ? styles.PathButton : ''}>
//         <Button 
//         key={page.id}
//         onClick={() => {
//           if (index < 3) {
//             navigate(page.path);
//           } else if (index === 3) {
//             setShowSublinks(!showSublinks); 
//           }
//         }}>
//           {page.name}
//           {index==3 && <div className={styles.triangleDown}>
//           </div>}
//         </Button>
//         {index === 3 && showSublinks && HeaderList[3]?.subLinks && (
//         <div className={styles.pathCard}>
//             {HeaderList[3].subLinks.map((item, index) => (
//               <p key={index} onClick={()=>navigate(item.name)}>{item.name}</p>
//             ))}
//         </div>
//       )}
//           </Box>
//             ))}
//     </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//      <Box>
//      <div className={styles.homeImage}>
//      <video autoPlay muted loop>
//        <source src={game}></source>
//      </video>
//      </div>
//      <div className={styles.homeImage__textright}>
//        TODAY, TOMORROW
//        <p>& ALWAYS.</p>
//      </div>
//      <div className={styles.homeImage__textleft}>
//        UNVEIL THE REALM OF
//        <p>INDIAN SOCCER</p>
//      </div>
//    </Box>
//    </>
//   );
// }
// export default ResponsiveAppBar;