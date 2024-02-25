import styles from './ClubDetails.module.scss';
import { Box } from '@mui/material';
import { constants } from '../../constants/stringConstants';
import chatwithusimage from '../../assets/ChatDots.png';
import { useNavigate } from 'react-router-dom';
  
interface Ilocations{
    name:string;
}
interface IclubPageDetail{
    image:string;
    name:string;
    details:any;
    locations:Ilocations[];
}
const ClubDetails=(props:IclubPageDetail)=> {
    const {image,name,details,locations}=props
    const navigate=useNavigate();
  return (
    <>
    <Box className={styles.parentContainer}>
    <Box className={styles.buttons}>
        <span onClick={()=>navigate('/home')} >{'<'}Back</span>
        <div className={styles.chatIcon}>
        <div>
        <img src={chatwithusimage}/>
        </div>
        <div>Chat with us</div>
        </div>
    </Box>
      <Box className={styles.container}>
            <Box className={styles.containerImage}>
                <img src={image}/>
            </Box>
            <Box className={styles.content}>
            <Box className={styles.contentHeading}>
               <p>{name}</p>
            </Box>
            <Box>
            {details.map((item:any, index:any) => (
            <div key={index} className={styles.contentDetails}>
                <Box>
                <p>{constants.clubpageDetails.location}</p>
                <p>{item.location}</p>
                </Box>
                <Box>
                <p>{constants.clubpageDetails.clublevel}</p>
                <p>{item.clublevel}</p>
                </Box>
                <Box>
                <p>{constants.clubpageDetails.category}</p>
                <p>{item.category}</p>
                </Box>
                <Box>
                <p>{constants.clubpageDetails.primarycontact}</p>
                <p>{item.primaryContactName}</p>
                </Box>
                <Box>
                <p>{constants.clubpageDetails.email}</p>
                <p>{item.email}</p>
                </Box>
                <Box>
                <p>{constants.clubpageDetails.contact}</p>
                <p>{item.contactNumber}</p>
                </Box>
            </div>
            ))}
            </Box>
            <Box>
                <p>Our Training Arenas</p>
                <div className={styles.locationData}>
                {locations.map((item:any)=>(
                    <div>
                    <span className={styles.locations}>{item.name}</span>
                    </div>
                ))}
                </div>
            </Box>
            </Box>
         </Box>
         </Box>
    </>
  )
}
export default ClubDetails;
