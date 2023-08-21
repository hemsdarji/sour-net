import { Box } from '@mui/material';
import React from 'react'

const LeftBar = () => {
    return (
      <Box flex={2} sx={{display:{xs :"none",sm : "block"},backgroundColor:"red"}}  >
        Left
      </Box>
    )}
    export default LeftBar;