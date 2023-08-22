import React from "react";
import {
  Avatar,
  Badge,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import {
  AddCircleOutlineRounded,
  Brightness1Rounded,
  DuoRounded,
  Menu,
  SearchRounded,
  VideoChat,
} from "@mui/icons-material";
import { publicData } from "../Data";

const RightBar = () => {
  return (
    <Box flex={2} sx={{ display: { xs: "none", sm: "block", width: "100%" } }}>
      <Box position="fixed">
        <Button
          sx={{ color: "black", p: 3 }}
          variant="text"
          fullWidth
          startIcon={<VideoChat sx={{ color: "red" }} />}
        >
          New Message
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            gap: 12,
          }}
        >
          <Typography sx={{ fontSize: 24, fontWeight: 500 }}>
            contacts
          </Typography>

          <DuoRounded />
          <SearchRounded />
          <Menu />
        </Box>

        {/*  */}
        <List sx={{ width: "100%" }}>
          {publicData.map((Info, index) => (
            <ListItem key={index} sx={{ display: "flex" }}>
              <Badge
                badgeContent={
                  <Brightness1Rounded
                    sx={{ color: Info.color, width: 0.5, paddingRight: 2 }}
                  />
                }
              >
                <Avatar alt="Remy Sharp" src={Info.image} />
              </Badge>
              <Typography sx={{ paddingLeft: 2 }}>{Info.name}</Typography>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ textAlign: "center", p: 2 }}>
          <Typography variant="h6"> Group conversations</Typography>
          <Button
            sx={{ color: "black" }}
            variant="text"
            fullWidth
            startIcon={<AddCircleOutlineRounded sx={{ color: "red" }} />}
          >
            Create New Group
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RightBar;
