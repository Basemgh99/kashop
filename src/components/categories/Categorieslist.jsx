import React from 'react'

import { Box, CircularProgress, Typography } from '@mui/material';

import axios from 'axios';
import { QueryClient, useQuery } from '@tanstack/react-query';
import useCategories from '../../hooks/useCategories';
function Categorieslist() {




const {data,isError,isLoading,error}=useCategories()

if(isLoading) return <CircularProgress/>
if(isError) return <Typography color='red'>{error}</Typography>
  return (

    <>
   <Typography component="h1" variant='h1'>Categories</Typography>
   {data.response.data.map((category)=>
  <Box>
    <Typography>{category.name}</Typography>
  </Box>
  
  )}
  
   

   </>
    
  )
}

export default Categorieslist