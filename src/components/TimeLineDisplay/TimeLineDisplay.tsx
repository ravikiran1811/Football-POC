import TimeLineDisplayStyles from './TimeLineDisplay.module.scss';
import TimeLine from '../TimeLine/TimeLine';
import { Box } from '@mui/material'; 
interface  ITimeLineDisplay {
    data:any;
}

const TimeLineDisplay = (props:ITimeLineDisplay) => {
    const {data}=props;
  return (
    <div className={TimeLineDisplayStyles.container}>
    <div className={TimeLineDisplayStyles.followUpButton}>
    <button>You can Begin from</button>
    </div>
    <div>
      <Box className={TimeLineDisplayStyles.timeline}>{
      data && Array.isArray(data) && 
      data.map((each,index)=>{
        return <TimeLine
            id={index+1}
            title={each.title}
            imageLink={each.imageLink}
            content={each.content}
          />
      })}
      </Box>

      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
    </div>
  )
}

export default TimeLineDisplay
