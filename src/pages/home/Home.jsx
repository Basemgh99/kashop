import React from 'react'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
function Home() {
  return (
    <div>
        <Typography component="h1" variant='h1' sx={{backgroundColor:'green'}}>hello world</Typography>
        <Typography component="h2" variant='h2'>hello world</Typography>
        <Typography component="h3" variant='h3'>hello world</Typography>
        <Typography component="h4" variant='h4'>hello world</Typography>
        <Typography component="h5" variant='h5'>hello world</Typography>
        <Typography component="h6" variant='h6'>hello world</Typography>
    </div>
  )
}

export default Home