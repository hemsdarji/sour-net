import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import {  Divider, Fab, TextField } from "@mui/material";
import PostCard from "../pages/PostCard";
import { Add } from "@mui/icons-material";




const Feed = () => {

  

  return (
    <Box flex={3}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Avatar src="./img/image4.jpg" alt="profile image" />
        <TextField
          id="filled-basic"
          label="Whats on your mind,Hems?"
          variant="filled"
          sx={{ p: 1, marginLeft: 1 }}
          fullWidth
        />
        <Fab size="medium" color="primary" aria-label="add">
  <Add />
</Fab>
      </Box>
      <Divider />


      {/* card component start */}
         <PostCard />
         </Box>
  );
};

export default Feed;
