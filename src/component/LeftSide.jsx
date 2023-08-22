import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Typography } from "@mui/material";
import { LeftIcon } from "../Data";

const LeftBar = () => {
  return (
    <Box flex={2} sx={{display:{xs :"none",sm : "block"}}} > 
    <Box position="fixed">
      <nav>
        <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <Avatar src="./img/image4.jpg" alt="Hems darji" />
          <Typography p={2} variant="h6" component="div">
            Hems darji
          </Typography>
        </Box>
        {/* using map function */}
        <List>
          {LeftIcon.map((info, index) => (
            <ListItem key={index}>
              <ListItemButton>
                <ListItemIcon>{info.icon}</ListItemIcon>
                <ListItemText primary={info.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
    </Box>
  );
};

export default LeftBar;
