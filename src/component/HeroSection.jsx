import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Box, Stack } from "@mui/system";
import { Button, Divider, TextField } from "@mui/material";
import PostCard from "../pages/PostCard";




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
        <Avatar src="./public/image4.jpg" alt="profile image"></Avatar>
        <TextField
          id="filled-basic"
          label="Whats on your mind,Hems?"
          variant="filled"
          sx={{ p: 1, marginLeft: 1 }}
          fullWidth
        />
      </Box>
      <Divider />


      {/* card component start */}
         <PostCard />
         </Box>
  );
};

export default Feed;
