import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Badge, Stack } from "@mui/material";
import { Notifications } from "@mui/icons-material";
import ChatIcon from "@mui/icons-material/Chat";
import { blue } from "@mui/material/colors";
import DeshBoard from "../pages/DashBoard";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SourNet
          </Typography>
          <Stack direction="row" spacing={2} sx={{justifyContent:"center",alignItems:"center"}}>
            <Avatar sx={{ bgcolor: blue[500] }}>
              <ChatIcon />
            </Avatar>

            <Badge color="secondary" badgeContent={29}>
              <Avatar sx={{ bgcolor: blue[500] }}>
                <Notifications />
              </Avatar>
            </Badge>

            <DeshBoard />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
