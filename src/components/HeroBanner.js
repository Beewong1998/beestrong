import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png'


const HeroBanner = () => {
  return (
    <Box sx={{
        mt: '70px',
        ml: { sm: '50px' }
    }}  
        position='relative'
        p='20px'
        >
        <Typography 
          color='black'
          fontWeight='700'
          fontSize='26px'
        >
          Time to Workout!
        </Typography>
        <Typography 
          fontWeight={700}
          sx={{ fontSize: { lg: '44px', xs: '40px' }}}
          mb='23px'
          mt='30px'
          color='#f8d16c'
        >
          Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography 
          fontSize='20px' 
          lineHeight='35px'
          mb={4}
          fontWeight='700'
        >
          Check out the most effective exercises
        </Typography>
        <Button 
          className='nav-btn'
          variant='contained'
          href='#exercises'
          sx={{ backgroundColor: '#f8d16c', padding: '10px' }}
        >
          Explore Exercises
        </Button>
        <Typography
          fontWeight={600}
          color='black'
          sx={{
            opacity: 0.2,
            display: { lg: 'block', xs: 'none' }
          }}  
          fontSize='200px'
        >
          Exercise
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner