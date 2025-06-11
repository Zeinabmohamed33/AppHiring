import Logo from '../../assets/vector-logo-design-icon-concept-260nw-313170776 1.png'
import InboxImg from '../../assets/Widget.svg'
import StarredImg from '../../assets/Presentation Graph 2.svg'
import SendEmailImg from '../../assets/u.svg'
import DraftsImg from '../../assets/bbb.svg'
import simg from '../../assets/Server.svg'
import gropimg from '../../assets/Users Group Two Rounded.svg'
import notficationimg from '../../assets/Document.svg'
import setting from '../../assets/Widget 6.svg'
import question from '../../assets/Question Square.svg'
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiDrawer from '@mui/material/Drawer';

import List from '@mui/material/List';

const drawerWidth = 240; 


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: '92px',
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const icons = [InboxImg, StarredImg, SendEmailImg, DraftsImg , simg , gropimg , notficationimg , setting ,question] ;
const texts = ['Inbox', 'Starred', 'Send email', 'Drafts' ,'Inbox', 'Inbox', 'Inbox', 'setting','question'];
export default function Sidebar({ open, selectedIndex, setSelectedIndex }) {
     
    
  return (
    <>
 <Drawer  variant="permanent"
  open={open}
  PaperProps={{

    sx: {
      backgroundColor: '#F4F1F8', 
      color: '#282828',
        borderRight: 'none', 
      boxShadow: 'none', 
       overflowX: 'hidden',
    },
  }}>
        <DrawerHeader  style={{ justifyContent: 'center', margin:'9px 0'  }}>
            <img src={Logo} alt="Logo"  />
        </DrawerHeader>
        <Divider  sx={{
    width: '60%',
    backgroundColor: '#fff',
  
    margin: '0 auto',
    height: '0.5px', 
    border: 'none'   
  }} />
     
        <List>
          {texts.map((text, index) => (
            <ListItem key={`${text}-${index}`} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
       selected={selectedIndex === index}
  onClick={() => setSelectedIndex(index)}
  sx={[
    {
      minHeight: 48,
      px: 2.5,
      borderRadius: '12px',
      transition: 'all 0.3s ease-in-out',
     
    },
    open
       ? { justifyContent: 'initial' }
      : {
          justifyContent: 'center',
          px: 0,
          minHeight: 10,          
          minWidth: 10,           
          borderRadius: '12px', 
    
        },
    (!open || selectedIndex === index) && {
      '&.Mui-selected, &:hover': {
        backgroundColor: '#fff',
        border: '1px solid #D2C5E3',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
        margin : '2px 18px'
        
      },
    },
  ]} >
                <ListItemIcon
                   sx={[
    { minWidth: 0 },
    open
      ? { mr: 3, justifyContent: 'center', display: 'flex', alignItems: 'center' }
      : {
          mr: 0,
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        }, ]}>
                  <img src={icons[index]} alt={text}  />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}
