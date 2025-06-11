import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import button from '../../assets/Import.svg'
import darkmodee from '../../assets/Component 34.svg'
import tag from '../../assets/Sticker Square.svg'
import star from '../../assets/Star.svg'
import global from '../../assets/Global.svg'
import search from '../../assets/Frame 1000002416.svg'
export default function Header() {

    
  return (
  <>
       <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={0.5}
   
      
     
     
    >
     
      <Box>
        <Typography variant="h6" fontWeight={600} color="text.primary">
         Job Pipeline
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Manage your recruitment process efficiently
        </Typography>
      </Box>

     
      <Button variant="contained" color="primary" sx={{
        width:'200px' ,
        height:'36px',
        color: '#fff',
        background: '#7A53AD',
        borderRadius:'12px',
        display:'flex',
        justifyContent:'space-between'
      }}>
        <img src={button} alt=""  />
      Import Candidates
      </Button>
    </Box>
     <Box
      display="flex" 
      justifyContent="space-between"
      alignItems="center" 
    p={1.5}
      bgcolor="#fff" >
      
      <Box>
       <img src={darkmodee} alt="" />
      </Box>
      <Box display="flex" gap={2}>
           <Button  sx={{
        width:'70px' ,
        height:'36px',
        color: '#616161',
        background: '#0FFFFF00',
        borderRadius:'9px',
        display:'flex',
      justifyContent:"space-between" ,

         border: '1px solid #E0E0E0',
      }}>
        <img src={tag} alt=""  />
Tags
      </Button>

        <Button  sx={{
        width:'135px' ,
        height:'36px',
        color: '#616161',
        background: 'none',
        borderRadius:'9px',
        display:'flex',
        border: '1px solid #E0E0E0',
        justifyContent:'space-between'
      }}>
        <img src={star} alt=""  />
      Score: 60-100
      </Button>
        <Button  sx={{
        width:'85px' ,
        height:'36px',
       color: '#616161',
        background: 'none',
        borderRadius:'9px',
        display:'flex',
        border: '1px solid #E0E0E0',
        justifyContent:'space-between'
      }}>
        <img src={global} alt=""  />
    Source
      </Button>
      <Box sx={{ flexGrow: 1, position: 'relative', }}>
        <input
          type="text"
          placeholder="Search by name or position"
          style={{
               width: '394px',
            padding: '8px 40px 8px 12px',
            borderRadius: '10px',
            border: '1px solid #EDEDED',
            outline: 'none',
            
            color: '#282828',
            fontSize: '14px',
          }}
          
        />
        <Box sx={{position: 'absolute',
            left: '362px',
            top: '80%',
            transform: 'translateY(-80%)',
            color: '#505050',
            pointerEvents: 'none',}}>
          <img src={search} alt="" />
        </Box>
      
        
      </Box>
      </Box>

   
    </Box>
   </>
  )
}
