import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box sx={{textAlign:"center", backgroundColor:"black", color:"white",p:1, position:"static", bottom:0}}>
       <Box sx={{cursor:"pointer"}} >
        <InstagramIcon />
        <TwitterIcon />
        <GitHubIcon />
        <YouTubeIcon />
       </Box>
    

       <Typography variant='h5' 
       sx={{"@media(max-width :600px)" : {fontSize:"1rem"}}}
       >
         All Rights Reserved ©️ Himanshu Gachake
       </Typography>
    </Box>
  )
}

export default Footer
