import React from 'react'

import { CircularProgress, Typography } from '@mui/material';

import axios from 'axios';
import { QueryClient, useQuery } from '@tanstack/react-query';
import Categorieslist from '../../components/categories/Categorieslist';
function Home() {



  return (


 <>
 <Categorieslist/>
 </>
  )
}

export default Home