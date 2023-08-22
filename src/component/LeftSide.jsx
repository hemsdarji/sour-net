import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Airplay,
  AutoStories,
  Collections,
  CreditScore,
  Diversity3,
  Event,
  Games,
  Groups,
  Memory,
  Message,
  Movie,
  PlayCircle,
  Storefront,
} from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import Profile from "./Profile";

const data = [
  {
    name: "Friends",
    icon: <Diversity3 />,
  },
  {
    name: "Groups",
    icon: <Groups />,
  },
  {
    name: "MarketPlace",
    icon: <Storefront />,
  },
  {
    name: "Watch",
    icon: <Movie />,
  },
  {
    name: "Memories",
    icon: <Memory />,
  },
  {
    name: "Events",
    icon: <Event />,
  },
  {
    name: "Gaming",
    icon: <Games />,
  },
  {
    name: "Gallery",
    icon: <Collections />,
  },
  {
    name: "Videos",
    icon: <PlayCircle />,
  },
  {
    name: "Messages",
    icon: <Message />,
  },
];

const LeftBar = () => {
  return (
    <Box flex={2} sx={{display:{xs :"none",sm : "block"}}} > 
    <Box position="fixed">
      <nav>
        <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <Avatar src="./public/image4.jpg" alt="Hems darji" />
          <Typography p={2} variant="h6" component="div">
            Hems darji
          </Typography>
        </Box>
        {/* using map function */}
        <List>
          {data.map((info, index) => (
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
