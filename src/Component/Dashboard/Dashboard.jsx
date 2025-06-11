// import React from 'react'
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Boxs from "../Boxs/Boxs";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  height: "68px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.359)",

  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    marginLeft: "92px",
    width: "calc(100% - 92px)",
  }),
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          position: "fixed",
          top: 18,
          left: open ? `${drawerWidth}px` : `79px`,
          zIndex: theme.zIndex.drawer + 2,
          backgroundColor: "#fff",
          border: "1px solid #EDEDED",
          boxShadow: 1,
          borderRadius: "50%",
          transition: "left 0.3s ease-in-out",
          padding: 1.5,
          width: 12,
          height: 12,
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        }}
      >
        {open ? (
          theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )
        ) : theme.direction === "rtl" ? (
          <ChevronLeftIcon />
        ) : (
          <ChevronRightIcon />
        )}
      </IconButton>

      <AppBar position="fixed" open={open} sx={{ height: "68px" }}>
        <Navbar />
      </AppBar>

      <Sidebar
        open={open}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />

      <Box display={"flex"} flexDirection={"column"}>
        <Box
          sx={{
            maxWidth: "93vw",
            width: "100%",
          }}
        >
          <DrawerHeader />

          <Box>
            <Header />
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              maxWidth: "93vw",
              overflowX: "auto",
              overflowY: "hidden",
              whiteSpace: "nowrap",
              display: "flex",
              gap: 2,
              px: 2,
              py: 1,
            }}
          >
          <Boxs/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
