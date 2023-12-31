import React from 'react'   
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
    InsertComment,
    Share,
    ThumbUpOffAlt,
  } from "@mui/icons-material";
  import { Avatar, Box, Button, Divider, Stack } from '@mui/material';
import { publicData } from '../Data';


const PostCard = () => {

    // date  
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${day}-${month}-${year}`;


  return (
    <Card>
    {/* use map method  */}

    {publicData.map((data, index) => (
      <Box key={index} sx={{boxShadow:'1px 1px 2px rgb(0 0 0 / 0.4)',paddingBottom:4}}>
        <CardHeader
          avatar={<Avatar src={data.image} alt="profile image"></Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={data.name}
          subheader={formattedDate}
        />
        <CardMedia
          component="img"
          height="500"
          src={data.image}
          alt="Paella dish"
        />

        {/* <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
           23 <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
           2 <ShareIcon />
          </IconButton>
        </CardActions> */}

        <Divider />

        <Stack direction="row" justifyContent="space-between">
          <Button
            sx={{ color: "black" }}
            variant="text"
            fullWidth
            startIcon={<ThumbUpOffAlt />}
          >
            Like
          </Button>
          <Button
            sx={{ color: "black" }}
            variant="text"
            fullWidth
            startIcon={<InsertComment />}
          >
            Comment
          </Button>
          <Button
            sx={{ color: "black" }}
            variant="text"
            fullWidth
            startIcon={<Share />}
          >
            Share
          </Button>
        </Stack>
      </Box>
    ))}
  </Card>

  )
}

export default PostCard;