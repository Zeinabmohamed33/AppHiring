import { Avatar, Box, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import linkin from '../../src/assets/hugeicons_linkedin-02.svg'
import group from '../assets/998.svg'
import upload from '../../../task/src/assets/Export.svg'
import person from '../assets/Frame 1984077977.svg'
import inbox from '../assets/Frame 1984077980.svg'
import message from '../assets/Frame 1984077979.svg'
import text from '../assets/Document Add.svg'
import DefaultIcon from '../../src/assets/Document.svg'
const getIcon = (qualified) => {
  if (qualified > 90) return <StarBorderIcon sx={{ color: "#007D5F" , fontSize:"18px"}} />;
  if (qualified > 75) return <StarBorderIcon sx={{ color: "#6254C7" , fontSize:"18px"}} />;
  if (qualified > 30) return <StarBorderIcon sx={{ color: "#E28000" , fontSize:"18px" }} />;
  return <StarBorderIcon sx={{ color: "#E94A4D" , fontSize:"18px" }} />;
};

const CardReusable = ({ data }) => {
  // console.log("data", data);

  return (
   <Box width={"270px"} height={"228px"} bgcolor={"#FFFFFF"}   border="1px solid #E4E4E4" borderRadius={3} padding={1.5} >
  <Box display="flex" gap={3} height={"40px"} alignItems="center">
    <Avatar
      alt="Profile image"
      src={data.image}
      sx={{ marginTop: "4px" }}
    />
    <Box>
      <Typography>{data.name}</Typography>
      <Typography>{data.position}</Typography>
    </Box>
  </Box>

  <Box marginTop={3} display="flex" gap={1}>
 
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="129px"
      height="30px"
      fontSize="12px"
      bgcolor={
        data.qualified > 90
          ? "#EDF3FF"
          : data.qualified > 75
          ? "#EDF3FF"
          : data.qualified > 30
          ? "#FFFDEA"
          : "#FEF2F2"
      }
      color={
        data.qualified > 90
          ? "#007D5F"
          : data.qualified > 75
          ? "#6254C7"
          : data.qualified > 30
          ? "#E28000"
          : "#E94A4D"
      }
      px={2}
      py={1}
      borderRadius="8px"
    >
      {getIcon(data.qualified)}
      {data.qualified}% Qualified
    </Box>

    
   <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  width="110px"
  height="32px"
  fontSize="12px"
  bgcolor="#F9F9F9"
 
  px={2}
  py={1}
  borderRadius="12px"
  gap={1}
  color="#9E9E9E"
>

  <img
    src={
    data.social === "Linked in"
        ? linkin
        : data.social === "Upload"
        ? upload
        : data.social === "Referral"
        ? group
        : DefaultIcon
    }
    alt={data.social}
    style={{ width: "16px", height: "16px" }}
  />

  {data.social}
</Box>
  </Box>
<Box marginTop={1} marginBottom={3} display="flex" gap={1}>
 
   <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  width="93px"
  height="25px"
  fontSize="12px"
  bgcolor="#F7F7F7"
  px={2}
  py={1}
  borderRadius="12px"
  gap={1}
  color="#616161"
>
 
  <Typography fontWeight="bold" color="#616161">
    #
  </Typography>

  {data.tags}
</Box>

    
  <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  width="77px"
  height="25px"
  fontSize="12px"
  bgcolor="#F7F7F7"
  px={2}
  py={1}
  borderRadius="12px"
  gap={1}
  color="#616161"
>
 
  <Typography fontWeight="bold" color="#616161">
    #
  </Typography>

  {data.language}
</Box>
  </Box>
    <Divider  sx={{
      width: '238px',
      backgroundColor: '#E0E0E0',
    
      margin: '0 auto',
      height: '0.9px', 
      border: 'none'   
    }} />
   <Box display= "flex" justifyContent="space-between" alignItems="center" marginTop={1}>
<Box display="flex" gap={0.5} >
  <img src={person} alt=""   />
    <img src={inbox} alt=""  />
  <img src={message} alt=""   />

</Box>
<Box display="flex" alignItems="center" gap={0.5} color={"#757575"}>
  <img src={text} alt="" />
  {data.countMessage}
</Box>
    </Box> 
   
</Box>

  );
};

export default CardReusable;
