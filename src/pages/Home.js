import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')  //passing these states and setstates into other components through the use of props
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}/>  
      <Exercises 
        exercises={exercises}   
        setExercises={setExercises} 
        bodyPart={bodyPart} 
      />     
    </Box>
  )
}

export default Home