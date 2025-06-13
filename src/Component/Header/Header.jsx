import React from 'react'
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import button from '../../assets/Import.svg'
import darkmodee from '../../assets/Component 34.svg'
import tag from '../../assets/Sticker Square.svg'
import star from '../../assets/Star.svg'
import global from '../../assets/Global.svg'
import search from '../../assets/Frame 1000002416.svg'

export default function Header() {

     const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  return (
 <>
   <Box 
      display="flex"
      flexDirection="column"
      gap={isMobile ? 1 : 0}
      mt={isMobile ? 7 : 0}
      px={isMobile ? 1 : 0}
      
    >
     
      <Box
      
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        justifyContent="space-between"
        alignItems={isMobile ? 'flex-start' : 'center'}
        gap={1}
        
      >
        <Box  margin={0.5}>
          <Typography
            variant="h6"
            fontWeight={600}
            color="text.primary"
            fontSize={isMobile ? 18 : 20}
           
          >
            Job Pipeline
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontSize={isMobile ? 13 : 14}
          >
            Manage your recruitment process efficiently
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          sx={{
            width: isMobile ? '75%' : '200px',
            height: isMobile ? '30px' : '36px',
            fontSize: isMobile ? '12px' : '14px',
            color: '#fff',
            background: '#7A53AD',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            textTransform: 'none',
            mt: isMobile ? 1 : 0
          }}
        >
          <img src={button} alt="Import" style={{ width: 16 }} />
          Import Candidates
        </Button>
      </Box>

      
      {isMobile ? (
        
        <Box  display="flex" flexDirection="column" gap={1.5} p={1}>
          
          <Box display="flex" gap={1} alignItems="center">
            <img src={darkmodee} alt="Dark mode" />
            <Button
              sx={{
                width: '140px',
                height: '30px',
                fontSize: '12px',
                color: '#616161',
                borderRadius: '8px',
                border: '1px solid #E0E0E0',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                padding: '0 8px',
                textTransform: 'none',
              }}
            >
              <img src={tag} alt="Tags" style={{ width: 14 }} />
              Tags
            </Button>
          </Box>

        
          <Box display="flex" gap={1}>
            <Button
              sx={{
                width: '140px',
                height: '30px',
                fontSize: '11px',
                color: '#616161',
                borderRadius: '8px',
                border: '1px solid #E0E0E0',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                padding: '0 8px',
                textTransform: 'none',
              }}
            >
              <img src={star} alt="Score" style={{ width: 14 }} />
              Score: 60-100
            </Button>

            <Button
              sx={{
                width: '140px',
                height: '30px',
                fontSize: '12px',
                color: '#616161',
                borderRadius: '8px',
                border: '1px solid #E0E0E0',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                padding: '0 8px',
                textTransform: 'none',
              }}
            >
              <img src={global} alt="Source" style={{ width: 14 }} />
              Source
            </Button>
          </Box>

         
          <Box sx={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Search by name or position"
              style={{
                width: '100%',
                padding: '6px 36px 6px 10px',
                borderRadius: '10px',
                border: '1px solid #EDEDED',
                outline: 'none',
                fontSize: '13px',
                color: '#282828',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                right: '20px',
                top: '55%',
                transform: 'translateY(-55%)',
                pointerEvents: 'none',
              }}
            >
              <img src={search} alt="Search" style={{ width: 16 }} />
            </Box>
          </Box>
        </Box>
      ) : isTablet ? (
       
        <Box
          
          display="flex"
          flexDirection="column"
          gap={2}
          p={2}
          borderRadius={2}
        >
          
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <img src={darkmodee} alt="Dark mode" />
            </Box>
            
            <Box display="flex" gap={1.5} flexWrap="wrap">
              <Button
                sx={{
                  minWidth: '70px',
                  height: '36px',
                  color: '#616161',
                  background: '#0FFFFF00',
                  borderRadius: '9px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                  border: '1px solid #E0E0E0',
                }}
              >
                <img src={tag} alt="Tags" style={{ width: 14 }} />
                Tags
              </Button>

              <Button
                sx={{
                  minWidth: '135px',
                  height: '36px',
                  color: '#616161',
                  background: 'none',
                  borderRadius: '9px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                  border: '1px solid #E0E0E0',
                }}
              >
                <img src={star} alt="Score" style={{ width: 14 }} />
                Score: 60-100
              </Button>

              <Button
                sx={{
                  minWidth: '85px',
                  height: '36px',
                  color: '#616161',
                  background: 'none',
                  borderRadius: '9px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                  border: '1px solid #E0E0E0',
                }}
              >
                <img src={global} alt="Source" style={{ width: 14 }} />
                Source
              </Button>
            </Box>
          </Box>

         
          <Box sx={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Search by name or position"
              style={{
                width: '100%',
                padding: '10px 40px 10px 15px',
                borderRadius: '10px',
                border: '1px solid #EDEDED',
                outline: 'none',
                color: '#282828',
                fontSize: '14px',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                right: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
              }}
            >
              <img src={search} alt="Search" style={{ width: 18 }} />
            </Box>
          </Box>
        </Box>
      ) : (
        
        <Box
     
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={1.5}
        >
          <Box>
            <img src={darkmodee} alt="Dark mode" />
          </Box>

          <Box display="flex" gap={2} alignItems="center">
            <Box display="flex" gap={1.5}>
              <Button
                sx={{
                  width: '70px',
                  height: '36px',
                  color: '#616161',
                  background: '#0FFFFF00',
                  borderRadius: '9px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  border: '1px solid #E0E0E0',
                }}
              >
                <img src={tag} alt="Tags" style={{ width: 14 }} />
                Tags
              </Button>

              <Button
                sx={{
                  width: '135px',
                  height: '36px',
                  color: '#616161',
                  background: 'none',
                  borderRadius: '9px',
                  display: 'flex',
                  border: '1px solid #E0E0E0',
                  justifyContent: 'space-between',
                }}
              >
                <img src={star} alt="Score" style={{ width: 14 }} />
                Score: 60-100
              </Button>

              <Button
                sx={{
                  width: '85px',
                  height: '36px',
                  color: '#616161',
                  background: 'none',
                  borderRadius: '9px',
                  display: 'flex',
                  border: '1px solid #E0E0E0',
                  justifyContent: 'space-between',
                }}
              >
                <img src={global} alt="Source" style={{ width: 14 }} />
                Source
              </Button>
            </Box>

            <Box sx={{ position: 'relative' }}>
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
              <Box
                sx={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                }}
              >
                <img src={search} alt="Search" style={{ width: 16 }} />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
    </>
  )
}
