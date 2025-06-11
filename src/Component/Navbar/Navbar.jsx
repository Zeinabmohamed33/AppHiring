import React from 'react'
import notfication from '../../assets/Notification Unread 2.svg'
import notebook from '../../assets/Clipboard List.svg'
import avetarr from '../../assets/OIP (7).jpeg'
import row from '../../assets/Alt Arrow Down.svg'
import search from '../../assets/Frame 1000002416.svg'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Navbar() {
  return (
    <>
           <Toolbar >
     
     
<Box sx={{ flexGrow: 1, position: 'relative',  }}>
  <input
    type="text"
    placeholder="Search for anything"
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
<Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    ml: 'auto',
    gap: 1.5,
  }}
>
  <Box
    sx={{
      width: 36,
      height: 36,
      borderRadius: '50%',
      backgroundColor: '#F5F5F5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
        cursor: 'pointer',
    }}
  >
    <img src={notfication} alt="" style={{ width: 20, height: 20 }} />
  </Box>

  <Box
    sx={{
      width: 36,
      height: 36,
      borderRadius: '50%',
      backgroundColor: '#F5F5F5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
        cursor: 'pointer',
    }}
  >
    <img src={notebook} alt="" style={{ width: 20, height: 20 }} />
  </Box>
  <Box  sx={{
      width: 36,
      height: 36,
      borderRadius: '50%',
      
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
        cursor: 'pointer',
    }}>
    <img src={avetarr} alt="" style={{ width: 36, height: 36 , borderRadius: '50%', }} />
  </Box>

<Box sx={{ display: 'flex', flexDirection: 'column' ,  cursor: 'pointer',}}>
    <Typography sx={{ color: '#282828', fontWeight: 600, fontSize: 14 }}>
      Admin
    </Typography>
    <Typography sx={{ color: '#888888', fontWeight: 400, fontSize: 12 }}>
      admin@company.com
    </Typography>
  </Box>
  <Box
    sx={{
      width: 36,
      height: 36,
      
      display: 'flex',
      alignItems: 'center',
        cursor: 'pointer',
    }}
  >
    <img src={row} alt=""  />
  </Box>

  
</Box>
        </Toolbar>
    </>
  )
}
