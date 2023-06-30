import React, { useState } from 'react'
import { AppBar, Box, Drawer, Toolbar, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';

import { Link, NavLink } from 'react-router-dom';




const Header = () => {
 

  return (
    <>
     <Box>
        <AppBar position="static" sx={{bgcolor :"black"}}>
          <Toolbar>
        
           <img src='https://img.freepik.com/premium-vector/retro-restaurant-logo_23-2148474404.jpg' 
             style={{height:70, width:80}} />
            
           <Typography color={'goldenrod'} variant='h6' component="div" sx={{flexGrow :1}}>
             <FastfoodIcon />
             Slice of Spice
           </Typography>
           <Box sx={{display :{xs :"none", sm :"block"}}}>
            
            <ul>
              <li><NavLink activeClassName ='active' to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/menu">Menu</NavLink></li>
            </ul>
           </Box>

        </Toolbar>
          
        </AppBar>
        
     </Box> 
    </>
  )
}

export default Header
