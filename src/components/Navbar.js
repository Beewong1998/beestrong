import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Stack } from '@mui/material'  //stack component manages layout of immediate children along the vertical or horizontal axis with optional spacing and/or dividers between each child

import Logo from '../assets/icons/beestrong-logo.png'


const Navbar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{ gap: {sm: '122px', xs: '40px'},
            mt: {sm: '32px', xs: '20px'},
            justifyContent: 'none'
        }}
      px='20px'
    >
      <Link to='/'>
        <img src={Logo} alt='logo' style={{
            width: '133px', 
            height: '120px', 
            margin:'0 20px'
          }} />
      </Link>
      <Stack
        direction='row'
        gap='65px'
        fontSize='24px'
        alignItems='flex-end'
      >
        <Typography 
          className='nav-btn'
          fontWeight={700}
          fontSize='20px'
        >
          <Link to='/' style={{
              textDecoration: 'none',
              color: '#3A1212',
              borderBottom: '4px solid transparent'
            }} >
              Home
          </Link>
        </Typography>
        <Typography 
          className='nav-btn'
          fontWeight={700}
          fontSize='20px'
        >
          <a href='#exercises' style={{
              textDecoration: 'none',
              color: '#3A1212',
              borderBottom: '4px solid transparent'
            }}>
              Exercises
          </a>
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Navbar